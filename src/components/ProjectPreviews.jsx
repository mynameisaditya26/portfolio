/**
 * Stylized UI previews for featured projects.
 * Pure CSS/SVG mock interfaces — no fabricated screenshots of real apps.
 */

export function RagAgentPreview() {
  return (
    <div className="h-full w-full bg-[#0d1117] p-3 font-mono text-[10px] sm:text-[11px] leading-relaxed select-none overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-white/10">
        <span className="h-2 w-2 rounded-full bg-red-500/80" />
        <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
        <span className="h-2 w-2 rounded-full bg-green-500/80" />
        <span className="ml-2 text-white/40">LangGraph RAG Agent</span>
      </div>
      <div className="flex gap-2 h-[calc(100%-28px)]">
        {/* Chat */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="self-end max-w-[80%] rounded-lg bg-blue-600/30 border border-blue-500/30 px-2.5 py-1.5 text-blue-100">
            What is RAG and how do embeddings work?
          </div>
          <div className="self-start max-w-[85%] rounded-lg bg-white/5 border border-white/10 px-2.5 py-1.5 text-white/80">
            <span className="text-emerald-400/90">● tool: search_docs</span>
            <br />
            RAG retrieves relevant chunks from a vector store before generation…
          </div>
          <div className="mt-auto flex gap-1.5">
            <div className="flex-1 rounded bg-white/5 border border-white/10 h-6" />
            <div className="w-6 h-6 rounded bg-blue-600/50" />
          </div>
        </div>
        {/* Trace sidebar */}
        <div className="w-[38%] rounded border border-white/10 bg-white/[0.03] p-2 hidden sm:block">
          <div className="text-white/40 mb-1.5 text-[9px] uppercase tracking-wider">Tool Trace</div>
          <div className="space-y-1.5 text-white/60">
            <div className="rounded bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-1">
              search_docs → 3 chunks
            </div>
            <div className="rounded bg-white/5 px-1.5 py-1 text-white/40">
              latency 412ms
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InterviewCoachPreview() {
  return (
    <div className="h-full w-full bg-[#0f0f12] p-3 font-mono text-[10px] sm:text-[11px] leading-relaxed select-none overflow-hidden">
      <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-white/10">
        <span className="h-2 w-2 rounded-full bg-violet-500/80" />
        <span className="ml-1 text-white/40">Interview Coach · Mem0</span>
      </div>
      <div className="space-y-2">
        <div className="rounded-lg border border-violet-500/20 bg-violet-500/10 px-2.5 py-2">
          <div className="text-violet-300/90 text-[9px] mb-0.5">MEMORY CONTEXT</div>
          <div className="text-white/70">Candidate: focused on system design · weak on Redis</div>
        </div>
        <div className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-2 text-white/75">
          Let’s practice rate-limiting. Design a token bucket for an API gateway…
        </div>
        <div className="flex gap-2 mt-1">
          <span className="rounded-full bg-emerald-500/15 text-emerald-400/90 px-2 py-0.5 text-[9px]">
            Redis &lt;100ms
          </span>
          <span className="rounded-full bg-blue-500/15 text-blue-400/90 px-2 py-0.5 text-[9px]">
            Qdrant recall
          </span>
        </div>
      </div>
    </div>
  );
}

export function AliaPreview() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#1a1025] to-[#0d0d12] p-3 font-mono text-[10px] sm:text-[11px] leading-relaxed select-none overflow-hidden">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-pink-500/30 border border-pink-400/40 flex items-center justify-center text-[10px]">
            A
          </div>
          <span className="text-white/70">Alia</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-white/30 text-[9px]">Telegram · Pydantic AI</span>
      </div>
      <div className="space-y-2">
        <div className="self-start rounded-2xl rounded-tl-sm bg-white/8 border border-white/10 px-3 py-2 text-white/80 max-w-[90%]">
          hey — how’s your day going?
        </div>
        <div className="grid grid-cols-3 gap-1.5 mt-3">
          {[
            { label: "affection", val: "72%" },
            { label: "energy", val: "58%" },
            { label: "focus", val: "81%" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg bg-white/5 border border-white/10 p-1.5 text-center"
            >
              <div className="text-white/40 text-[8px] uppercase">{s.label}</div>
              <div className="text-pink-300/90 font-medium mt-0.5">{s.val}</div>
            </div>
          ))}
        </div>
        <div className="text-white/30 text-[9px] mt-1">Logfire · schema 100% valid</div>
      </div>
    </div>
  );
}

export function CodeReviewerPreview() {
  return (
    <div className="h-full w-full bg-[#0d1117] p-3 font-mono text-[10px] sm:text-[11px] leading-relaxed select-none overflow-hidden">
      <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-white/10">
        <span className="text-white/40">AI Code Reviewer</span>
        <span className="ml-auto text-[9px] text-amber-400/80">OpenAI · Express</span>
      </div>
      <div className="rounded border border-white/10 bg-[#161b22] p-2 mb-2">
        <div className="text-purple-400/90">function</div>
        <div className="text-white/70 pl-2">
          <span className="text-yellow-300/80">fetchUser</span>
          <span className="text-white/40">(id) {"{"}</span>
        </div>
        <div className="text-red-400/70 pl-4">// missing await</div>
        <div className="text-white/60 pl-4">return db.users.find(id)</div>
        <div className="text-white/40 pl-2">{"}"}</div>
      </div>
      <div className="rounded border border-amber-500/20 bg-amber-500/10 px-2 py-1.5 text-amber-100/80">
        <span className="text-amber-400">⚠</span> Async: add <span className="text-white/90">await</span> — race condition risk
      </div>
    </div>
  );
}

export function DeviceTrackerPreview() {
  return (
    <div className="h-full w-full bg-[#0a1628] p-3 select-none overflow-hidden relative">
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-10">
        <div className="text-[10px] text-blue-300/60 mb-2 font-mono">Socket.io · Live Map</div>
        <div className="relative h-24 rounded-lg border border-blue-500/20 bg-blue-950/40">
          <div className="absolute top-1/3 left-1/4 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <div className="absolute top-1/2 left-1/2 h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
          <div className="absolute bottom-1/4 right-1/3 h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <path
              d="M 25% 33% Q 40% 40% 50% 50%"
              fill="none"
              stroke="rgba(52,211,153,0.4)"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
          </svg>
        </div>
        <div className="mt-2 flex gap-2 text-[9px] font-mono text-white/50">
          <span>3 devices</span>
          <span>·</span>
          <span className="text-emerald-400/80">live</span>
        </div>
      </div>
    </div>
  );
}

export function CloudDrivePreview() {
  return (
    <div className="h-full w-full bg-[#f8f9fa] dark:bg-[#1a1a1a] p-3 select-none overflow-hidden text-[10px] sm:text-[11px]">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black/10 dark:border-white/10">
        <div className="h-4 w-4 rounded bg-blue-500/80" />
        <span className="text-black/60 dark:text-white/50 font-medium">Cloud Drive</span>
      </div>
      <div className="space-y-1.5">
        {["Documents", "Projects", "Images"].map((f, i) => (
          <div
            key={f}
            className="flex items-center gap-2 rounded-md px-2 py-1.5 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/5"
          >
            <span className="text-amber-500">📁</span>
            <span className="text-black/70 dark:text-white/70">{f}</span>
            <span className="ml-auto text-black/30 dark:text-white/30 text-[9px]">
              {i === 0 ? "12 files" : i === 1 ? "8 files" : "24 files"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StudentMgmtPreview() {
  return (
    <div className="h-full w-full bg-[#0f1419] p-3 font-mono text-[10px] select-none overflow-hidden">
      <div className="text-white/40 mb-2 pb-1.5 border-b border-white/10">Student Management</div>
      <div className="space-y-1">
        {["A. Sharma · CSE · 8.2", "R. Patel · IT · 7.9", "S. Khan · ECE · 8.5"].map((row) => (
          <div
            key={row}
            className="flex items-center gap-2 rounded px-2 py-1.5 bg-white/5 border border-white/5 text-white/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}

const previewMap = {
  "langgraph-rag": RagAgentPreview,
  "interview-coach": InterviewCoachPreview,
  "alia-agent": AliaPreview,
  "ai-code-reviewer": CodeReviewerPreview,
  "device-tracker": DeviceTrackerPreview,
  "cloud-drive": CloudDrivePreview,
  "student-management": StudentMgmtPreview,
};

export function ProjectPreview({ projectId }) {
  const Comp = previewMap[projectId];
  if (!Comp) {
    return (
      <div className="h-full w-full bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-text-dim)] text-sm">
        Preview
      </div>
    );
  }
  return <Comp />;
}
