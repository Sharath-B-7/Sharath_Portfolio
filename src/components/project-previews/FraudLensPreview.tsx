import React, { useState } from "react";
import { ShieldAlert, ShieldCheck, AlertTriangle, Network, Activity, FileText } from "lucide-react";

interface SampleEntity {
  id: string;
  query: string;
  name: string;
  score: number;
  riskTier: "HIGH RISK" | "SUSPICIOUS" | "VERIFIED SAFE";
  riskColor: string;
  centrality: string;
  reports: number;
  region: string;
  velocity: string;
  statusNote: string;
  graphNodes: { id: string; label: string; type: "target" | "mule" | "normal"; x: number; y: number }[];
  graphEdges: { from: string; to: string; flagged?: boolean }[];
}

const sampleEntities: SampleEntity[] = [
  {
    id: "entity-1",
    query: "payment-gateway.9821@okhdfcbank",
    name: "Flagged High-Risk UPI Entity",
    score: 34,
    riskTier: "HIGH RISK",
    riskColor: "var(--accent-terracotta)",
    centrality: "0.82 (Cluster Flag)",
    reports: 14,
    region: "Tamil Nadu & Karnataka",
    velocity: "18 txn/min (Spike)",
    statusNote: "Confidence: 94.2% based on 14 community reports & mule node graph clustering.",
    graphNodes: [
      { id: "target", label: "9821@okhdfc", type: "target", x: 140, y: 80 },
      { id: "mule1", label: "Mule-A", type: "mule", x: 60, y: 40 },
      { id: "mule2", label: "Mule-B", type: "mule", x: 70, y: 125 },
      { id: "norm1", label: "User-41", type: "normal", x: 220, y: 50 },
      { id: "norm2", label: "User-89", type: "normal", x: 230, y: 115 },
    ],
    graphEdges: [
      { from: "target", to: "mule1", flagged: true },
      { from: "target", to: "mule2", flagged: true },
      { from: "target", to: "norm1" },
      { from: "target", to: "norm2" },
    ],
  },
  {
    id: "entity-2",
    query: "verified-merchant.store@icici",
    name: "Verified Merchant Payment Identity",
    score: 92,
    riskTier: "VERIFIED SAFE",
    riskColor: "var(--accent-emerald)",
    centrality: "0.14 (Decentralized)",
    reports: 0,
    region: "Pan-India",
    velocity: "Normal Distribution",
    statusNote: "Zero community scam reports; active merchant certificate and verified KYC credentials.",
    graphNodes: [
      { id: "target", label: "store@icici", type: "target", x: 140, y: 80 },
      { id: "norm1", label: "Customer-A", type: "normal", x: 65, y: 50 },
      { id: "norm2", label: "Customer-B", type: "normal", x: 75, y: 120 },
      { id: "norm3", label: "Customer-C", type: "normal", x: 220, y: 50 },
      { id: "norm4", label: "Customer-D", type: "normal", x: 215, y: 115 },
    ],
    graphEdges: [
      { from: "target", to: "norm1" },
      { from: "target", to: "norm2" },
      { from: "target", to: "norm3" },
      { from: "target", to: "norm4" },
    ],
  },
  {
    id: "entity-3",
    query: "refund-support.bot44@ybl",
    name: "Suspicious Automated Bot Endpoint",
    score: 48,
    riskTier: "SUSPICIOUS",
    riskColor: "#d97706",
    centrality: "0.59 (Anomalous Fanout)",
    reports: 5,
    region: "Northern Region",
    velocity: "High Reversal Ratio",
    statusNote: "5 recent community scam reports with high transaction reversal frequency.",
    graphNodes: [
      { id: "target", label: "bot44@ybl", type: "target", x: 140, y: 80 },
      { id: "mule1", label: "Proxy-1", type: "mule", x: 65, y: 45 },
      { id: "norm1", label: "Payer-1", type: "normal", x: 80, y: 125 },
      { id: "norm2", label: "Payer-2", type: "normal", x: 225, y: 80 },
    ],
    graphEdges: [
      { from: "target", to: "mule1", flagged: true },
      { from: "target", to: "norm1" },
      { from: "target", to: "norm2" },
    ],
  },
];

export const FraudLensPreview: React.FC = () => {
  const [selectedEntity, setSelectedEntity] = useState<SampleEntity>(sampleEntities[0]);
  const [activeTab, setActiveTab] = useState<"score" | "graph" | "triage">("score");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div
      style={{
        border: "1px solid var(--border-default)",
        background: "var(--bg-surface-elevated)",
        borderRadius: "8px",
        padding: "clamp(1.15rem, 2vw, 1.5rem)",
        fontFamily: "var(--font-sans)",
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
          flexWrap: "wrap",
          gap: "0.4rem",
        }}
      >
        <span style={{ letterSpacing: "0.04em", fontFamily: "var(--font-mono)" }}>FRAUDLENS AI · TRUST ENGINE SIMULATOR</span>
        <span style={{ color: "var(--accent-terracotta)", display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-mono)" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--accent-emerald)",
              display: "inline-block",
            }}
          />
          INTELLIGENCE ENGINE READY
        </span>
      </div>

      {/* Preset Entity Selector Tabs */}
      <div>
        <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>
          SAMPLE QUERY IDENTITIES:
        </div>
        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
          {sampleEntities.map((entity) => (
            <button
              key={entity.id}
              type="button"
              onClick={() => setSelectedEntity(entity)}
              style={{
                background: selectedEntity.id === entity.id ? "var(--accent-terracotta-subtle)" : "var(--bg-surface-subtle)",
                border: selectedEntity.id === entity.id ? "1px solid var(--accent-terracotta-border)" : "1px solid var(--border-subtle)",
                borderRadius: "4px",
                padding: "0.3rem 0.6rem",
                color: selectedEntity.id === entity.id ? "var(--text-primary)" : "var(--text-secondary)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.71875rem",
                cursor: "pointer",
                transition: "border-color 450ms ease-in-out, background-color 450ms ease-in-out, color 450ms ease-in-out",
              }}
            >
              {entity.query.split("@")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Query Bar */}
      <div
        style={{
          padding: "0.55rem 0.75rem",
          background: "var(--bg-surface-subtle)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.78125rem",
          flexWrap: "wrap",
        }}
      >
        <span style={{ color: "var(--text-primary)", wordBreak: "break-all", fontFamily: "var(--font-mono)" }}>
          {selectedEntity.query}
        </span>
        <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", flexShrink: 0, fontFamily: "var(--font-mono)" }}>
          [LOOKUP]
        </span>
      </div>

      {/* Sub-Tabs: Score vs Graph vs Triage */}
      <div
        style={{
          display: "flex",
          gap: "0.35rem",
          borderBottom: "1px solid var(--border-subtle)",
          paddingBottom: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        <button
          type="button"
          onClick={() => setActiveTab("score")}
          style={{
            background: "transparent",
            border: "none",
            color: activeTab === "score" ? "var(--accent-terracotta)" : "var(--text-muted)",
            fontSize: "0.71875rem",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            padding: "0.2rem 0.4rem",
            borderBottom: activeTab === "score" ? "2px solid var(--accent-terracotta)" : "2px solid transparent",
          }}
        >
          <Activity size={13} />
          <span>Trust Score</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("graph")}
          style={{
            background: "transparent",
            border: "none",
            color: activeTab === "graph" ? "var(--accent-terracotta)" : "var(--text-muted)",
            fontSize: "0.71875rem",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            padding: "0.2rem 0.4rem",
            borderBottom: activeTab === "graph" ? "2px solid var(--accent-terracotta)" : "2px solid transparent",
          }}
        >
          <Network size={13} />
          <span>Graph Explorer</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("triage")}
          style={{
            background: "transparent",
            border: "none",
            color: activeTab === "triage" ? "var(--accent-terracotta)" : "var(--text-muted)",
            fontSize: "0.71875rem",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            padding: "0.2rem 0.4rem",
            borderBottom: activeTab === "triage" ? "2px solid var(--accent-terracotta)" : "2px solid transparent",
          }}
        >
          <FileText size={13} />
          <span>Triage Flow</span>
        </button>
      </div>

      {/* TAB 1: Trust Score & Heuristics */}
      {activeTab === "score" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {/* Main Dial Card */}
          <div
            style={{
              border: "1px solid var(--border-default)",
              background: "var(--bg-surface-subtle)",
              borderRadius: "6px",
              padding: "0.95rem 1.1rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.6875rem", color: "var(--text-secondary)", letterSpacing: "0.06em" }}>
                CYBER TRUST SCORE
              </span>
              <span
                style={{
                  fontSize: "0.6875rem",
                  color: selectedEntity.riskColor,
                  fontWeight: 600,
                  background: "var(--accent-terracotta-subtle)",
                  border: "1px solid var(--accent-terracotta-border)",
                  padding: "0.15rem 0.45rem",
                  borderRadius: "3px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                {selectedEntity.score < 50 ? <ShieldAlert size={11} /> : selectedEntity.score < 75 ? <AlertTriangle size={11} /> : <ShieldCheck size={11} />}
                {selectedEntity.riskTier}
              </span>
            </div>

            <div style={{ fontSize: "2.1rem", fontWeight: 700, color: "var(--text-primary)", margin: "0.35rem 0" }}>
              {selectedEntity.score}
              <span style={{ fontSize: "0.875rem", color: "var(--text-muted)", fontWeight: 400 }}> / 100</span>
            </div>

            <div style={{ fontSize: "0.71875rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
              {selectedEntity.statusNote}
            </div>
          </div>

          {/* Metric Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.71875rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.35rem", borderBottom: "1px solid var(--border-subtle)" }}>
              <span style={{ color: "var(--text-muted)" }}>Graph Centrality:</span>
              <span style={{ color: "var(--text-primary)" }}>{selectedEntity.centrality}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.35rem", borderBottom: "1px solid var(--border-subtle)" }}>
              <span style={{ color: "var(--text-muted)" }}>Community Flags:</span>
              <span style={{ color: selectedEntity.reports > 0 ? "var(--accent-terracotta)" : "var(--accent-emerald)" }}>
                {selectedEntity.reports} Verified Reports
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.35rem", borderBottom: "1px solid var(--border-subtle)" }}>
              <span style={{ color: "var(--text-muted)" }}>Regional Heatmap:</span>
              <span style={{ color: "var(--text-primary)" }}>{selectedEntity.region}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "var(--text-muted)" }}>Transaction Velocity:</span>
              <span style={{ color: "var(--text-primary)" }}>{selectedEntity.velocity}</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Interactive Graph Explorer */}
      {activeTab === "graph" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "170px",
              background: "var(--bg-canvas)",
              border: "1px solid var(--border-default)",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 300 170" style={{ display: "block" }}>
              {/* Edges */}
              {selectedEntity.graphEdges.map((edge, idx) => {
                const source = selectedEntity.graphNodes.find((n) => n.id === edge.from);
                const target = selectedEntity.graphNodes.find((n) => n.id === edge.to);
                if (!source || !target) return null;

                return (
                  <line
                    key={idx}
                    x1={source.x}
                    y1={source.y}
                    x2={target.x}
                    y2={target.y}
                    stroke={edge.flagged ? "rgba(181, 106, 69, 0.85)" : "var(--border-strong)"}
                    strokeWidth={edge.flagged ? 1.5 : 1}
                    strokeDasharray={edge.flagged ? "4 2" : undefined}
                  />
                );
              })}

              {/* Nodes */}
              {selectedEntity.graphNodes.map((node) => {
                const isTarget = node.type === "target";
                const isMule = node.type === "mule";
                const isHovered = hoveredNode === node.id;

                const fillColor = isTarget
                  ? "var(--accent-terracotta)"
                  : isMule
                  ? "rgba(181, 106, 69, 0.45)"
                  : "var(--border-strong)";

                const radius = isTarget ? 14 : isHovered ? 12 : 9;

                return (
                  <g
                    key={node.id}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{ cursor: "pointer" }}
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={radius}
                      fill={fillColor}
                      stroke="var(--bg-surface-elevated)"
                      strokeWidth={2}
                    />
                    <text
                      x={node.x}
                      y={node.y + 19}
                      textAnchor="middle"
                      fill={isTarget ? "var(--text-primary)" : "var(--text-secondary)"}
                      fontSize="9"
                      fontFamily="var(--font-sans)"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.6875rem", color: "var(--text-muted)", flexWrap: "wrap", gap: "0.35rem" }}>
            <span>Terracotta: Target Entity</span>
            <span>Dashed: Flagged Clustering Link</span>
          </div>
        </div>
      )}

      {/* TAB 3: Triage Flow */}
      {activeTab === "triage" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <div
            style={{
              padding: "0.85rem",
              background: "var(--bg-surface-subtle)",
              border: "1px solid var(--border-default)",
              borderRadius: "6px",
              fontSize: "0.71875rem",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
            }}
          >
            <div style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "0.4rem" }}>
              FastAPI &amp; SQLite Triage Pipeline:
            </div>
            <div>1. Client queries payment identity string.</div>
            <div>2. SQLite / SQLAlchemy extracts transaction history &amp; reporting counts.</div>
            <div>3. Graph Engine evaluates degree centrality &amp; shared mule node linkages.</div>
            <div>4. Heuristic engine synthesizes factors into normalized 0–100 Cyber Trust Index.</div>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div
        style={{
          borderTop: "1px solid var(--border-subtle)",
          paddingTop: "0.65rem",
          fontSize: "0.65625rem",
          color: "var(--text-muted)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.35rem",
        }}
      >
        <span>Interactive Demo · Grounded in FraudLens Architecture</span>
        <span style={{ fontFamily: "var(--font-mono)" }}>FastAPI + Vite</span>
      </div>
    </div>
  );
};
