import React from "react";
import { currentlyExploring } from "../data/exploring";
import { Sparkles, Shield, Cpu, Globe, Code2, ArrowUpRight } from "lucide-react";

export const ExploringSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "cybersecurity":
        return <Shield size={20} color="var(--cyan-primary)" />;
      case "aiml":
        return <Cpu size={20} color="var(--emerald-primary)" />;
      case "development":
        return <Globe size={20} color="var(--blue-primary)" />;
      case "problemsolving":
        return <Code2 size={20} color="#f59e0b" />;
      default:
        return <Sparkles size={20} color="var(--cyan-primary)" />;
    }
  };

  return (
    <section id="exploring" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Active Investigation</span>
          </div>
          <h2 className="section-title">
            Currently <span>Learning & Exploring</span>
          </h2>
          <p className="section-subtitle">
            Active technical domains currently being researched and practiced through coursework, laboratories, and prototype development.
          </p>
        </div>

        {/* 4 Categories Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {currentlyExploring.map((domain) => (
            <div
              key={domain.id}
              className="glass-card"
              style={{
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {getIcon(domain.id)}
                </div>

                <span className="cyber-badge">
                  {domain.badge}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.4rem" }}>
                  {domain.category}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.6 }}>
                  {domain.description}
                </p>
              </div>

              {/* Topics List */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  paddingTop: "0.75rem",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                {domain.topics.map((topic, tIdx) => (
                  <div
                    key={tIdx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "0.8125rem",
                      color: "#cbd5e1",
                      background: "rgba(7, 10, 19, 0.5)",
                      padding: "0.4rem 0.65rem",
                      borderRadius: "6px",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <span>{topic}</span>
                    <ArrowUpRight size={13} color="var(--cyan-muted)" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Clear Non-Exaggeration Disclaimer */}
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem 1.5rem",
            borderRadius: "10px",
            background: "rgba(15, 23, 42, 0.6)",
            border: "1px dashed var(--border-subtle)",
            textAlign: "center",
            maxWidth: "720px",
            margin: "2rem auto 0",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
            [!] Explicit Note: These represent current topics of study and experimentation as a second-year undergraduate student. They do not claim senior or expert-level specialization.
          </p>
        </div>
      </div>
    </section>
  );
};
