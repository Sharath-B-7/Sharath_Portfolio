import React, { useState } from "react";
import { FileText, Sparkles, Search, CheckCircle2, BookOpen, ShieldCheck } from "lucide-react";

interface SampleQuery {
  id: string;
  tag: string;
  docName: string;
  docPages: number;
  question: string;
  answer: string;
  citations: {
    page: number;
    chunkId: string;
    rerankScore: number;
    text: string;
  }[];
  vectorCandidates: {
    rank: number;
    chunkId: string;
    page: number;
    initialScore: number;
    finalRank: number;
    rerankScore: number;
    selected: boolean;
  }[];
}

const sampleQueries: SampleQuery[] = [
  {
    id: "query-1",
    tag: "Two-Stage Pipeline",
    docName: "system_architecture_spec.pdf",
    docPages: 14,
    question: "How does the two-stage retrieval pipeline optimize accuracy?",
    answer:
      "The system employs a two-stage retrieval design: First, ChromaDB executes cosine vector search over all-MiniLM-L6-v2 embeddings to rapidly retrieve the top 15 candidates. Next, a cross-encoder (ms-marco-MiniLM-L-6-v2) scores question-chunk pairs jointly to re-rank and extract the top 4 chunks, ensuring high precision before feeding context to Groq's Llama 3.1 8B.",
    citations: [
      {
        page: 3,
        chunkId: "chunk-08",
        rerankScore: 0.942,
        text: "Embedding similarity provides fast coarse retrieval to select top-15 candidates. A cross-encoder (ms-marco-MiniLM-L-6-v2) then jointly evaluates question-chunk relevance to rerank and extract the top-4 context windows...",
      },
      {
        page: 3,
        chunkId: "chunk-10",
        rerankScore: 0.887,
        text: "By decoupling candidate retrieval from cross-encoder scoring, the system achieves sub-second latency while eliminating false positive context injection into the LLM prompt.",
      },
      {
        page: 4,
        chunkId: "chunk-14",
        rerankScore: 0.831,
        text: "Top-4 chunks are formatted into a system-grounded prompt template with strict instructions requiring direct citation of source page references.",
      },
    ],
    vectorCandidates: [
      { rank: 1, chunkId: "chunk-08", page: 3, initialScore: 0.78, finalRank: 1, rerankScore: 0.942, selected: true },
      { rank: 2, chunkId: "chunk-03", page: 1, initialScore: 0.76, finalRank: 5, rerankScore: 0.612, selected: false },
      { rank: 3, chunkId: "chunk-10", page: 3, initialScore: 0.74, finalRank: 2, rerankScore: 0.887, selected: true },
      { rank: 4, chunkId: "chunk-14", page: 4, initialScore: 0.71, finalRank: 3, rerankScore: 0.831, selected: true },
      { rank: 5, chunkId: "chunk-11", page: 4, initialScore: 0.69, finalRank: 4, rerankScore: 0.795, selected: true },
    ],
  },
  {
    id: "query-2",
    tag: "Chunking & Overlap",
    docName: "config_parameters.pdf",
    docPages: 8,
    question: "What chunking parameters are configured to prevent boundary context loss?",
    answer:
      "Text chunking is managed via LangChain's RecursiveCharacterTextSplitter configured with CHUNK_SIZE = 800 characters and CHUNK_OVERLAP = 150 characters. The 150-character sliding overlap preserves semantic continuity across contiguous chunk boundaries so multi-sentence concepts are not truncated.",
    citations: [
      {
        page: 1,
        chunkId: "chunk-02",
        rerankScore: 0.961,
        text: "RecursiveCharacterTextSplitter is configured with CHUNK_SIZE = 800 and CHUNK_OVERLAP = 150 characters to prevent loss of semantic context across contiguous chunk boundaries.",
      },
      {
        page: 2,
        chunkId: "chunk-05",
        rerankScore: 0.843,
        text: "Character chunking roughly maps to 150-200 tokens per passage, offering optimal granularity for dense embedding similarity with all-MiniLM-L6-v2.",
      },
    ],
    vectorCandidates: [
      { rank: 1, chunkId: "chunk-02", page: 1, initialScore: 0.81, finalRank: 1, rerankScore: 0.961, selected: true },
      { rank: 2, chunkId: "chunk-05", page: 2, initialScore: 0.75, finalRank: 2, rerankScore: 0.843, selected: true },
      { rank: 3, chunkId: "chunk-07", page: 3, initialScore: 0.72, finalRank: 3, rerankScore: 0.789, selected: true },
      { rank: 4, chunkId: "chunk-09", page: 4, initialScore: 0.68, finalRank: 4, rerankScore: 0.742, selected: true },
      { rank: 5, chunkId: "chunk-12", page: 6, initialScore: 0.64, finalRank: 6, rerankScore: 0.521, selected: false },
    ],
  },
  {
    id: "query-3",
    tag: "Guardrails & Gating",
    docName: "retrieval_guardrails.pdf",
    docPages: 6,
    question: "What happens when query similarity is below the relevance threshold?",
    answer:
      "The pipeline enforces a low-confidence gate (MIN_SIMILARITY_SCORE = 0.15). If the best candidate vector similarity score from ChromaDB is below 0.15, the system short-circuits execution before contacting the LLM, returning a verified grounded notice rather than risking hallucinated output.",
    citations: [
      {
        page: 5,
        chunkId: "chunk-18",
        rerankScore: 0.928,
        text: "Low-confidence gating evaluates the top raw cosine similarity score against MIN_SIMILARITY_SCORE = 0.15. If the threshold is not met, the system aborts LLM generation to guarantee grounded veracity.",
      },
      {
        page: 5,
        chunkId: "chunk-19",
        rerankScore: 0.854,
        text: "Early exit on irrelevant inquiries saves API token consumption and guarantees deterministic guardrails against hallucinated responses.",
      },
    ],
    vectorCandidates: [
      { rank: 1, chunkId: "chunk-18", page: 5, initialScore: 0.79, finalRank: 1, rerankScore: 0.928, selected: true },
      { rank: 2, chunkId: "chunk-19", page: 5, initialScore: 0.74, finalRank: 2, rerankScore: 0.854, selected: true },
      { rank: 3, chunkId: "chunk-16", page: 4, initialScore: 0.67, finalRank: 3, rerankScore: 0.762, selected: true },
      { rank: 4, chunkId: "chunk-21", page: 6, initialScore: 0.63, finalRank: 4, rerankScore: 0.718, selected: true },
      { rank: 5, chunkId: "chunk-04", page: 1, initialScore: 0.58, finalRank: 7, rerankScore: 0.449, selected: false },
    ],
  },
];

export const RagPreview: React.FC = () => {
  const [selectedQuery, setSelectedQuery] = useState<SampleQuery>(sampleQueries[0]);
  const [activeTab, setActiveTab] = useState<"qa" | "rerank" | "workflow">("qa");
  const [activeCitationIndex, setActiveCitationIndex] = useState<number>(0);

  return (
    <div
      style={{
        border: "1px solid var(--border-default)",
        background: "var(--bg-surface-elevated)",
        borderRadius: "8px",
        padding: "clamp(1.15rem, 2vw, 1.5rem)",
        fontFamily: "var(--font-mono)",
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
      }}
    >
      {/* Telemetry Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "0.75rem",
          borderBottom: "1px solid var(--border-subtle)",
          fontSize: "0.71875rem",
          color: "var(--text-muted)",
        }}
      >
        <span style={{ letterSpacing: "0.04em" }}>RAG PIPELINE · TWO-STAGE RETRIEVAL</span>
        <span style={{ color: "var(--accent-cyan-light)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--accent-emerald)",
              display: "inline-block",
            }}
          />
          CHROMADB + RE-RANKER READY
        </span>
      </div>

      {/* Preset Query Selector Tabs */}
      <div>
        <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>
          SAMPLE INGESTION QUERIES:
        </div>
        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
          {sampleQueries.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelectedQuery(item);
                setActiveCitationIndex(0);
              }}
              style={{
                background: selectedQuery.id === item.id ? "var(--accent-cyan-subtle)" : "rgba(255, 255, 255, 0.025)",
                border: selectedQuery.id === item.id ? "1px solid var(--accent-cyan-border)" : "1px solid var(--border-subtle)",
                borderRadius: "4px",
                padding: "0.3rem 0.6rem",
                color: selectedQuery.id === item.id ? "var(--text-primary)" : "var(--text-secondary)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.71875rem",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {item.tag}
            </button>
          ))}
        </div>
      </div>

      {/* Source PDF Banner */}
      <div
        style={{
          padding: "0.55rem 0.75rem",
          background: "rgba(255, 255, 255, 0.025)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.78125rem",
        }}
      >
        <span style={{ color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "0.45rem" }}>
          <FileText size={14} color="var(--accent-cyan)" />
          {selectedQuery.docName} ({selectedQuery.docPages} pages)
        </span>
        <span style={{ fontSize: "0.6875rem", color: "var(--accent-emerald)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
          <CheckCircle2 size={12} />
          INDEXED
        </span>
      </div>

      {/* Sub-Tabs: Q&A vs Re-ranking vs Workflow */}
      <div
        style={{
          display: "flex",
          gap: "0.35rem",
          borderBottom: "1px solid var(--border-subtle)",
          paddingBottom: "0.5rem",
        }}
      >
        <button
          type="button"
          onClick={() => setActiveTab("qa")}
          style={{
            background: "transparent",
            border: "none",
            borderBottom: activeTab === "qa" ? "2px solid var(--accent-cyan)" : "2px solid transparent",
            padding: "0.25rem 0.5rem",
            color: activeTab === "qa" ? "var(--text-primary)" : "var(--text-muted)",
            fontSize: "0.71875rem",
            cursor: "pointer",
            fontFamily: "var(--font-mono)",
          }}
        >
          Q&amp;A &amp; Citations
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("rerank")}
          style={{
            background: "transparent",
            border: "none",
            borderBottom: activeTab === "rerank" ? "2px solid var(--accent-cyan)" : "2px solid transparent",
            padding: "0.25rem 0.5rem",
            color: activeTab === "rerank" ? "var(--text-primary)" : "var(--text-muted)",
            fontSize: "0.71875rem",
            cursor: "pointer",
            fontFamily: "var(--font-mono)",
          }}
        >
          Two-Stage Re-Ranking
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("workflow")}
          style={{
            background: "transparent",
            border: "none",
            borderBottom: activeTab === "workflow" ? "2px solid var(--accent-cyan)" : "2px solid transparent",
            padding: "0.25rem 0.5rem",
            color: activeTab === "workflow" ? "var(--text-primary)" : "var(--text-muted)",
            fontSize: "0.71875rem",
            cursor: "pointer",
            fontFamily: "var(--font-mono)",
          }}
        >
          Workflow Preview
        </button>
      </div>

      {/* TAB CONTENT */}
      {activeTab === "qa" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {/* User Question */}
          <div
            style={{
              background: "rgba(0, 0, 0, 0.25)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "6px",
              padding: "0.75rem",
            }}
          >
            <div style={{ fontSize: "0.6875rem", color: "var(--accent-cyan)", marginBottom: "0.3rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <Search size={12} />
              USER QUESTION:
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-primary)", fontWeight: 500 }}>
              &ldquo;{selectedQuery.question}&rdquo;
            </div>
          </div>

          {/* Grounded LLM Answer */}
          <div
            style={{
              background: "rgba(0, 240, 255, 0.03)",
              border: "1px solid var(--accent-cyan-border)",
              borderRadius: "6px",
              padding: "0.75rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
              <span style={{ fontSize: "0.6875rem", color: "var(--accent-cyan)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Sparkles size={12} />
                CONTEXT-GROUNDED RESPONSE (Groq / Llama 3.1 8B):
              </span>
              <span style={{ fontSize: "0.65rem", color: "var(--accent-emerald)", background: "rgba(16, 185, 129, 0.1)", padding: "0.1rem 0.4rem", borderRadius: "3px" }}>
                GROUNDED
              </span>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>
              {selectedQuery.answer}
            </p>
          </div>

          {/* Page-Level Citations Box */}
          <div
            style={{
              border: "1px solid var(--border-subtle)",
              borderRadius: "6px",
              padding: "0.75rem",
              background: "rgba(0, 0, 0, 0.2)",
            }}
          >
            <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)", marginBottom: "0.45rem", display: "flex", justifyContent: "space-between" }}>
              <span>VERIFIED PAGE CITATIONS:</span>
              <span style={{ color: "var(--accent-cyan)" }}>{selectedQuery.citations.length} Sources Retained</span>
            </div>

            {/* Citation Chips */}
            <div style={{ display: "flex", gap: "0.35rem", marginBottom: "0.6rem", flexWrap: "wrap" }}>
              {selectedQuery.citations.map((cite, idx) => (
                <button
                  key={cite.chunkId}
                  type="button"
                  onClick={() => setActiveCitationIndex(idx)}
                  style={{
                    background: activeCitationIndex === idx ? "var(--accent-cyan-subtle)" : "rgba(255, 255, 255, 0.03)",
                    border: activeCitationIndex === idx ? "1px solid var(--accent-cyan)" : "1px solid var(--border-subtle)",
                    borderRadius: "4px",
                    padding: "0.2rem 0.5rem",
                    color: activeCitationIndex === idx ? "var(--text-primary)" : "var(--text-muted)",
                    fontSize: "0.6875rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <BookOpen size={11} />
                  <span>Page {cite.page} · {cite.chunkId}</span>
                  <span style={{ color: "var(--accent-cyan)", fontSize: "0.625rem" }}>
                    ({(cite.rerankScore * 100).toFixed(0)}%)
                  </span>
                </button>
              ))}
            </div>

            {/* Active Citation Snippet */}
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
                lineHeight: 1.5,
                background: "rgba(255, 255, 255, 0.02)",
                padding: "0.55rem 0.65rem",
                borderRadius: "4px",
                borderLeft: "2px solid var(--accent-cyan)",
              }}
            >
              &ldquo;{selectedQuery.citations[activeCitationIndex].text}&rdquo;
            </div>
          </div>
        </div>
      )}

      {activeTab === "rerank" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{ fontSize: "0.71875rem", color: "var(--text-muted)", lineHeight: 1.45 }}>
            Two-stage architecture: ChromaDB vector search retrieves 15 candidates; a joint cross-encoder scores <span style={{ color: "var(--accent-cyan)" }}>(question, chunk)</span> pairs to extract the top 4.
          </div>

          <div
            style={{
              border: "1px solid var(--border-subtle)",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1.2fr 1fr 1fr",
                padding: "0.45rem 0.65rem",
                background: "rgba(255, 255, 255, 0.03)",
                borderBottom: "1px solid var(--border-subtle)",
                fontSize: "0.65625rem",
                color: "var(--text-muted)",
              }}
            >
              <span>CHUNK REF</span>
              <span>VECTOR SEARCH</span>
              <span>CROSS-ENCODER</span>
              <span>STATUS</span>
            </div>

            {selectedQuery.vectorCandidates.map((cand) => (
              <div
                key={cand.chunkId}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1.2fr 1fr 1fr",
                  padding: "0.45rem 0.65rem",
                  borderBottom: "1px solid var(--border-subtle)",
                  fontSize: "0.71875rem",
                  alignItems: "center",
                  background: cand.selected ? "rgba(0, 240, 255, 0.025)" : "transparent",
                }}
              >
                <span style={{ color: "var(--text-primary)" }}>
                  {cand.chunkId} (p.{cand.page})
                </span>
                <span style={{ color: "var(--text-muted)" }}>
                  Rank #{cand.rank} ({cand.initialScore.toFixed(2)})
                </span>
                <span style={{ color: cand.selected ? "var(--accent-cyan)" : "var(--text-muted)", fontWeight: cand.selected ? 600 : 400 }}>
                  Score: {cand.rerankScore.toFixed(3)}
                </span>
                <span>
                  {cand.selected ? (
                    <span style={{ color: "var(--accent-emerald)", fontSize: "0.65rem", background: "rgba(16, 185, 129, 0.1)", padding: "0.1rem 0.35rem", borderRadius: "3px" }}>
                      TOP 4 SELECTED
                    </span>
                  ) : (
                    <span style={{ color: "var(--text-muted)", fontSize: "0.65rem" }}>
                      FILTERED
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: "0.6875rem",
              color: "var(--text-muted)",
              padding: "0.45rem 0.65rem",
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Initial Vector Retrieval: Top 15</span>
            <span style={{ color: "var(--accent-cyan)" }}>Final Context Feed: Top 4 Chunks</span>
          </div>
        </div>
      )}

      {activeTab === "workflow" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{ fontSize: "0.71875rem", color: "var(--text-muted)" }}>
            End-to-End Ingestion, Retrieval, Re-ranking &amp; Inference Pipeline:
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
            {[
              {
                step: "01",
                title: "PDF Documents Ingestion",
                desc: "Uploaded files extracted per page via native pypdf parser",
                tech: "pypdf",
              },
              {
                step: "02",
                title: "Chunking & Embeddings",
                desc: "800 char chunks with 150 char overlap; embedded via all-MiniLM-L6-v2",
                tech: "RecursiveCharacterTextSplitter",
              },
              {
                step: "03",
                title: "ChromaDB Vector Retrieval",
                desc: "Cosine similarity search retrieves initial top 15 candidate passages",
                tech: "ChromaDB Local",
              },
              {
                step: "04",
                title: "Cross-Encoder Re-Ranking",
                desc: "ms-marco-MiniLM-L-6-v2 scores (question, chunk) pairs to select top 4",
                tech: "Sentence-Transformers",
              },
              {
                step: "05",
                title: "Grounded LLM Response",
                desc: "Grounded prompt generates answer with exact page citations",
                tech: "Groq (Llama 3.1 8B)",
              },
            ].map((node) => (
              <div
                key={node.step}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.55rem 0.75rem",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ color: "var(--accent-cyan)", fontWeight: 700, fontSize: "0.7rem" }}>
                    {node.step}
                  </span>
                  <div>
                    <div style={{ color: "var(--text-primary)", fontWeight: 600 }}>{node.title}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.6875rem" }}>{node.desc}</div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border-subtle)",
                    padding: "0.15rem 0.4rem",
                    borderRadius: "3px",
                    flexShrink: 0,
                  }}
                >
                  {node.tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Metrics Bar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0.5rem",
          paddingTop: "0.75rem",
          borderTop: "1px solid var(--border-subtle)",
          textAlign: "center",
        }}
      >
        <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "0.4rem", borderRadius: "4px" }}>
          <div style={{ fontSize: "0.625rem", color: "var(--text-muted)" }}>CHUNK SIZE</div>
          <div style={{ fontSize: "0.8125rem", color: "var(--text-primary)", fontWeight: 600 }}>800 / 150</div>
        </div>
        <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "0.4rem", borderRadius: "4px" }}>
          <div style={{ fontSize: "0.625rem", color: "var(--text-muted)" }}>CANDIDATES</div>
          <div style={{ fontSize: "0.8125rem", color: "var(--accent-cyan)", fontWeight: 600 }}>15 &rarr; Top 4</div>
        </div>
        <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "0.4rem", borderRadius: "4px" }}>
          <div style={{ fontSize: "0.625rem", color: "var(--text-muted)" }}>INFERENCE</div>
          <div style={{ fontSize: "0.8125rem", color: "var(--accent-emerald)", fontWeight: 600 }}>Llama 3.1 8B</div>
        </div>
      </div>

      {/* Grounded Demo Banner */}
      <div
        style={{
          fontSize: "0.6875rem",
          color: "var(--text-muted)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "0.25rem",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <ShieldCheck size={12} color="var(--accent-emerald)" />
          Interactive Demo · Grounded in RAG Architecture
        </span>
        <span style={{ color: "var(--accent-cyan)", fontSize: "0.65rem" }}>
          pypdf + ChromaDB + Groq
        </span>
      </div>
    </div>
  );
};
