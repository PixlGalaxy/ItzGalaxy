import React, { useEffect, useRef, useState } from "react";

type ItemType = "dir" | "file" | "link";
interface Leaf {
  url?: string;
  desc?: string;
  type?: ItemType;          // dir | file | link
  [key: string]: any;       // allow nested dirs
}
interface Tree { [k: string]: Leaf }

const PROMPT_ROOT = "ItzGalaxyTerminal>";

export default function Terminal() {
  const [tree, setTree] = useState<Tree>({});
  const [path, setPath] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [cmdHist, setCmdHist] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  /* Load JSON once */
  useEffect(() => {
    fetch("/console/commands.json")
      .then(r => r.json())
      .then((raw: Tree) => setTree(normalize(raw)))
      .catch(e => push(`Error loading commands: ${e}`))
      .finally(() => setLoading(false));
  }, []);

  /* Focus + autoscroll */
  useEffect(() => inputRef.current?.focus(), []);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  /* ─ helpers ─ */
  const push = (m: string) => setHistory(h => [...h, m]);
  const node = path.reduce((acc: any, k) => (acc ? acc[k] : undefined), tree);
  const prompt = path.length ? `ItzGalaxyTerminal/${path.join("/")}>` : PROMPT_ROOT;

  /* ─ normalize keys to lowercase and default type ─ */
  function normalize(obj: Tree): Tree {
    const out: Tree = {};
    Object.entries(obj).forEach(([k, v]) => {
      const key = k.toLowerCase();
      if (v && typeof v === "object" && !v.url) {
        out[key] = { type: "dir", ...normalize(v) };
      } else {
        const t: ItemType =
          v.type ?? (/\.(zip|exe|tar\.gz|rar|7z|pdf)$/i.test(v.url ?? "") ? "file" : "link");
        out[key] = { ...v, type: t };
      }
    });
    return out;
  }

  /* ─ built‑ins ─ */
  const ls = () => {
    const dir = path.length ? node : tree;
    if (!dir) return push("Empty.");
    Object.entries(dir).forEach(([k, v]) => {
      if (v.type === "dir")  push(`DIR  ${k}`);
      else if (v.type === "file") push(`FILE ${k}`);
      else push(`LINK ${k}`);
    });
  };

  const help = () => {
    push("Built‑in commands:");
    push("  ls                list directory");
    push("  cd <dir> / cd ..  change directory");
    push("  clear             clear screen");
    push("  <cmd> -help       command description");
  };

  /* ─ execute ─ */
  const run = (raw: string) => {
    const line = raw.trim();
    if (!line) return;
    push(`${prompt} ${line}`);

    const args = line.toLowerCase().split(/\s+/);  
    const cmd  = args[0];

    if (cmd === "clear") return setHistory([]);
    if (cmd === "help")  return help();
    if (cmd === "ls")    return ls();

    if (cmd === "cd") {
      const tgt = args[1];
      if (!tgt) return push("Usage: cd <directory>");
      if (tgt === "/" || tgt === "~") return setPath([]);
      if (tgt === ".." || tgt === "exit") return setPath(p => p.slice(0, -1));

      const newPath = [...path, tgt];
      const exists  = newPath.reduce((acc: any, k) => (acc ? acc[k] : undefined), tree);
      if (exists && exists.type === "dir") return setPath(newPath);
      return push(`Directory '${tgt}' not found.`);
    }

    /* cd by name at root */
    if (!path.length && tree[cmd] && tree[cmd].type === "dir") return setPath([cmd]);

    /* execute file/link */
    if (path.length && node && node[cmd] && node[cmd].url) {
      const item = node[cmd];
      if (args[1] === "-help") return push(item.desc || "No description.");
      if (item.type === "file") {
        const a = document.createElement("a");
        a.href = item.url!; a.download = ""; a.click();
        push(`Downloading ${cmd}...`);
      } else {
        window.open(item.url, "_blank");
        push(`Opening ${item.url}...`);
      }
      return;
    }

    push(`Command or directory '${cmd}' not found.`);
  };

  /* submit + arrow history */
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    run(input);
    setCmdHist(h => [...h, input]);
    setHistIdx(-1);
    setInput("");
  };
  const arrow = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistIdx(i => {
        const n = i < 0 ? cmdHist.length - 1 : Math.max(0, i - 1);
        setInput(cmdHist[n] || ""); return n;
      });
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistIdx(i => {
        if (i < 0) return -1;
        const n = i + 1;
        if (n >= cmdHist.length) { setInput(""); return -1; }
        setInput(cmdHist[n]); return n;
      });
    }
  };

  if (loading)
    return (
      <div className="h-screen bg-black text-green-400 flex items-center justify-center pt-24">
        <p className="animate-pulse">Loading ItzGalaxyTerminal…</p>
      </div>
    );

  return (
    <div className="h-screen bg-black text-green-400 font-mono pt-24 flex flex-col">
      {/* history + prompt scroll together */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 space-y-1">
        {history.map((l, i) => (
          <div key={i} className="whitespace-pre-wrap">{l}</div>
        ))}

        {/* prompt */}
        <form onSubmit={submit} className="flex items-center gap-2">
          <span className="text-green-300">{prompt}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={arrow}
            className="flex-1 bg-transparent outline-none text-green-400
                       after:content-[''] after:inline-block after:w-2 after:h-4
                       after:bg-green-400 after:animate-pulse"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}
