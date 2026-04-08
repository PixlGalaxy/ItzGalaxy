import React, { useEffect, useRef, useState } from "react";

type ItemType = "dir" | "file" | "link";

interface Leaf {
  url?: string;
  desc?: string;
  type?: ItemType;
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
  const inputRef = useRef<HTMLInputElement>(null);

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
      if (typeof next === "object") return next as Leaf;
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
      if (leaf.type === "dir") push(`\x1b DIR  ${k}`);
      else if (leaf.type === "file") push(`\x1b FILE ${k}`);
      else push(`\x1b LINK ${k}`);
    });
  };

  const help = () => {
    push("Built-in commands:");
    push("  ls                list directory");
    push("  cd <dir> / cd ..  navigate directories");
    push("  clear             clear the screen");
    push("  <cmd> -help       show command description");
  };

  function run(raw: string) {
    const line = raw.trim();
    if (!line) return;
    push(`${prompt} ${line}`);

    const args = line.toLowerCase().split(/\s+/);
    const cmd = args[0];

    if (cmd === "clear") { setHistory([]); return; }
    if (cmd === "help") { help(); return; }
    if (cmd === "ls") { ls(); return; }

    if (cmd === "cd") {
      const tgt = args[1];
      if (!tgt) { push("Usage: cd <directory>"); return; }
      if (tgt === "/" || tgt === "~") { setPath([]); return; }
      if (tgt === ".." || tgt === "exit") { setPath((p) => p.slice(0, -1)); return; }

      const newPath = [...path, tgt];
      const exists = newPath.reduce<Leaf | undefined>((acc, k) => {
        if (!acc) return undefined;
        const next = acc[k];
        if (typeof next === "object") return next as Leaf;
        return undefined;
      }, tree as Leaf);

      if (exists?.type === "dir") { setPath(newPath); return; }
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
        if (args[1] === "-help") { push(item.desc || "No description."); return; }
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
    if (e.key === "ArrowUp" || e.key === "ArrowDown") e.preventDefault();
  };

  if (loading) {
    return (
      <div className="h-screen bg-[#0c0a1a] flex items-center justify-center pt-16 font-mono">
        <div className="text-center">
          <div className="flex items-center gap-3 text-green-400 text-lg mb-2">
            <span className="animate-pulse">Loading ItzGalaxyTerminal</span>
            <span className="terminal-cursor" />
          </div>
          <p className="text-gray-600 text-xs tracking-widest uppercase">Initializing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#0c0a1a] flex flex-col pt-16 font-mono overflow-hidden">

      {/* ── Title bar ──────────────────────────────────────────────── */}
      <div className="flex-shrink-0 flex items-center px-4 py-2.5 bg-[#0f0d22] border-b border-[#00ffae]/10">
        <span className="text-[10px] text-[#00ffae]/50 tracking-[0.25em] uppercase select-none">
          ItzGalaxy Terminal — type <span className="text-[#00ffae]/80">help</span> to get started
        </span>
      </div>

      {/* ── Output + Input ─────────────────────────────────────────── */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-5 py-4 space-y-1 terminal-scanline relative"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Welcome message */}
        {history.length === 0 && (
          <div className="text-green-600/60 text-xs mb-4 select-none space-y-0.5">
            <p>ItzGalaxy Terminal v1.0 — type <span className="text-[#00ffae]/70">help</span> for commands, <span className="text-[#00ffae]/70">ls</span> to list resources.</p>
            <p className="text-gray-700">─────────────────────────────────────────</p>
          </div>
        )}

        {history.map((l, i) => {
          const isPromptLine = l.startsWith("ItzGalaxy");
          return (
            <div
              key={i}
              className={`whitespace-pre-wrap text-sm leading-snug ${
                isPromptLine ? "text-green-300" : "text-green-500/80"
              }`}
            >
              {l}
            </div>
          );
        })}

        <form onSubmit={submit} className="flex items-center gap-2 mt-1">
          <span className="text-[#00ffae] text-sm whitespace-nowrap select-none">{prompt}</span>
          {/* Wrapper: real input (invisible) over visible text + cursor */}
          <div className="relative flex items-center flex-1 min-w-0">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              className="absolute inset-0 w-full bg-transparent outline-none text-transparent caret-transparent"
              autoComplete="off"
              spellCheck={false}
            />
            <span className="text-green-300 text-sm whitespace-pre">{input}</span>
            <span className="terminal-cursor" />
          </div>
        </form>
      </div>
    </div>
  );
}
