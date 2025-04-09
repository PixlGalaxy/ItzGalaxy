import React, { useEffect, useRef, useState } from "react";

type ItemType = "dir" | "file" | "link";

interface Leaf {
  url?: string;
  desc?: string;
  type?: ItemType;   // "dir" | "file" | "link"
  [key: string]: any; 
}

interface Tree {
  [k: string]: Leaf;
}

const PROMPT_ROOT = "ItzGalaxyTerminal>";

export default function Terminal() {
  const [tree, setTree] = useState<Tree>({});
  const [path, setPath] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/console/commands.json")
      .then((r) => r.json())
      .then((raw: Tree) => setTree(normalize(raw)))
      .catch((e) => push(`Error loading commands: ${e}`))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => inputRef.current?.focus(), []);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current?.scrollHeight });
  }, [history]);

  const push = (msg: string) => setHistory((h) => [...h, msg]);

  function getNode(): Leaf | undefined {
    return path.reduce<Leaf | undefined>((acc, k) => {
      if (!acc) return undefined;
      const next = acc[k];
      if (typeof next === "object") {
        return next as Leaf;
      }
      return undefined;
    }, tree as Leaf);
  }
  const node = getNode();

  const prompt = path.length
    ? `ItzGalaxyTerminal/${path.join("/")}>`
    : PROMPT_ROOT;

  function normalize(obj: Tree): Tree {
    const out: Tree = {};
    Object.entries(obj).forEach(([k, v]) => {
      const key = k.toLowerCase();

      if (v && typeof v === "object" && !v.url) {
        out[key] = { type: "dir", ...normalize(v as Tree) };
      } else {
        const guessType: ItemType =
          v.type ??
          (/\.(zip|exe|tar\.gz|rar|7z|pdf)$/i.test(v.url ?? "") ? "file" : "link");
        out[key] = { ...v, type: guessType };
      }
    });
    return out;
  }

  const ls = () => {
    const dir = path.length ? node : (tree as Leaf);
    if (!dir) return push("Empty.");


    Object.entries(dir).forEach(([k, val]) => {
      if (k === "type" || k === "url" || k === "desc") return;
      const leaf = val as Leaf;
      if (leaf.type === "dir")  push(`DIR  ${k}`);
      else if (leaf.type === "file") push(`FILE ${k}`);
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

  function run(raw: string) {
    const line = raw.trim();
    if (!line) return;
    push(`${prompt} ${line}`);

    const args = line.toLowerCase().split(/\s+/);
    const cmd  = args[0];

    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    if (cmd === "help") {
      help();
      return;
    }
    if (cmd === "ls") {
      ls();
      return;
    }

    if (cmd === "cd") {
      const tgt = args[1];
      if (!tgt) {
        push("Usage: cd <directory>");
        return;
      }
      if (tgt === "/" || tgt === "~") {
        setPath([]);
        return;
      }
      if (tgt === ".." || tgt === "exit") {
        setPath((p) => p.slice(0, -1));
        return;
      }

      const newPath = [...path, tgt];
      const exists = newPath.reduce<Leaf | undefined>((acc, k) => {
        if (!acc) return undefined;
        const next = acc[k];
        if (typeof next === "object") {
          return next as Leaf;
        }
        return undefined;
      }, tree as Leaf);

      if (exists?.type === "dir") {
        setPath(newPath);
        return;
      }
      push(`Directory '${tgt}' not found.`);
      return;
    }

    if (!path.length && tree[cmd] && tree[cmd].type === "dir") {
      setPath([cmd]);
      return;
    }

    if (node) {
      const item = node[cmd] as Leaf | undefined;
      if (item?.url) {
        if (args[1] === "-help") {
          push(item.desc || "No description.");
          return;
        }
        if (item.type === "file") {
          const a = document.createElement("a");
          a.href = item.url;
          a.download = "";
          a.click();
          push(`Downloading ${cmd}...`);
        } else {
          window.open(item.url, "_blank");
          push(`Opening ${item.url}...`);
        }
        return;
      }
    }

    push(`Command or directory '${cmd}' not found.`);
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    run(input);
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
    }
  };

  if (loading) {
    return (
      <div className="h-screen bg-black text-green-400 flex items-center justify-center pt-24">
        <p className="animate-pulse">Loading ItzGalaxyTerminal…</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-black text-green-400 font-mono pt-24 flex flex-col">
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 space-y-1">
        {history.map((l, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {l}
          </div>
        ))}

        <form onSubmit={submit} className="flex items-center gap-2">
          <span className="text-green-300">{prompt}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
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
