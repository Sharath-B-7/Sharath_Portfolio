import React, { useState } from "react";
import { Terminal, Shield, Globe, Cpu, Database, Wrench, Search, SlidersHorizontal, Sparkles, ShieldCheck } from "lucide-react";
import { skillCategories } from "../data/skills";

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const getGroupIcon = (id: string) => {
    switch (id) {
      case "languages":
        return <Terminal size={16} color="var(--accent-terracotta)" />;
      case "cybersecurity":
        return <Shield size={16} color="var(--accent-terracotta)" />;
      case "webdev":
        return <Globe size={16} color="var(--accent-terracotta)" />;
      case "aiml":
        return <Cpu size={16} color="var(--accent-terracotta)" />;
      case "databases":
        return <Database size={16} color="var(--accent-terracotta)" />;
      case "tools":
        return <Wrench size={16} color="var(--accent-terracotta)" />;
      case "other":
        return <Sparkles size={16} color="var(--accent-terracotta)" />;
      default:
        return <Terminal size={16} color="var(--accent-terracotta)" />;
    }
  };

  const filteredCategories = skillCategories.filter((group) => {
    if (activeCategory !== "all" && group.id !== activeCategory) {
      return false;
    }
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchesGroup = group.name.toLowerCase().includes(q) || group.description.toLowerCase().includes(q);
      const matchesSkill = group.skills.some((s) => s.toLowerCase().includes(q));
      return matchesGroup || matchesSkill;
    }
    return true;
  });

  const isBespokeView = activeCategory === "all" && searchQuery.trim() === "";

  return (
    <section id="skills" className="editorial-section">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div className="section-label">03 · Technical Capabilities</div>
          <h2 className="section-heading-editorial">
            Disciplines &amp; Core Toolchain
          </h2>
          <p className="section-subheading-editorial">
            Systematic technical competencies organized across systems programming, defensive security, intelligent algorithms, and developer tooling. Every capability reflects practical implementation in projects or academic research.
          </p>
        </div>

        {/* Filter Controls Row: Category Buttons + Instant Search Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "2.75rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          {/* Category Pills */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "0.78125rem",
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
                marginRight: "0.4rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              <SlidersHorizontal size={12} />
              Filter:
            </span>

            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              style={{
                background: activeCategory === "all" ? "var(--accent-terracotta-subtle)" : "var(--bg-surface-subtle)",
                border: activeCategory === "all" ? "1px solid var(--accent-terracotta-border)" : "1px solid var(--border-subtle)",
                borderRadius: "6px",
                padding: "0.38rem 0.8rem",
                color: activeCategory === "all" ? "var(--text-primary)" : "var(--text-secondary)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: activeCategory === "all" ? 600 : 500,
                cursor: "pointer",
                minHeight: "36px",
                display: "inline-flex",
                alignItems: "center",
                transition: "border-color 450ms cubic-bezier(0.4, 0, 0.2, 1), background-color 450ms cubic-bezier(0.4, 0, 0.2, 1), color 450ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              All Disciplines
            </button>

            {skillCategories.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveCategory(group.id)}
                style={{
                  background: activeCategory === group.id ? "var(--accent-terracotta-subtle)" : "var(--bg-surface-subtle)",
                  border: activeCategory === group.id ? "1px solid var(--accent-terracotta-border)" : "1px solid var(--border-subtle)",
                  borderRadius: "6px",
                  padding: "0.38rem 0.8rem",
                  color: activeCategory === group.id ? "var(--text-primary)" : "var(--text-secondary)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  fontWeight: activeCategory === group.id ? 600 : 500,
                  cursor: "pointer",
                  minHeight: "36px",
                  display: "inline-flex",
                  alignItems: "center",
                  transition: "border-color 450ms cubic-bezier(0.4, 0, 0.2, 1), background-color 450ms cubic-bezier(0.4, 0, 0.2, 1), color 450ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {group.name}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--bg-surface-subtle)",
              border: "1px solid var(--border-default)",
              borderRadius: "4px",
              padding: "0.45rem 0.75rem",
              minWidth: "220px",
            }}
            className="skills-search-box"
          >
            <Search size={13} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, Linux)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "var(--text-primary)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                width: "100%",
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text-muted)",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  padding: "0",
                }}
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* BESPOKE ARCHITECTURAL VIEW (Varied Composition, Not Repetitive Cards) */}
        {isBespokeView ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            
            {/* 1. Flagship Wide Block: Defensive Cybersecurity & Systems Programming */}
            <div
              className="skill-feature-card"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-default)",
                borderRadius: "10px",
                padding: "clamp(1.5rem, 3.5vw, 2.75rem)",
                transition: "border-color 450ms cubic-bezier(0.4, 0, 0.2, 1), background-color 450ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Meta Top Line */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <span className="mono-tag" style={{ color: "var(--accent-terracotta)", display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
                  <ShieldCheck size={14} />
                  01 · Flagship Specialization
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.71875rem",
                    fontWeight: 600,
                    color: "var(--accent-terracotta)",
                    background: "var(--accent-terracotta-subtle)",
                    border: "1px solid var(--accent-terracotta-border)",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "4px",
                    letterSpacing: "0.04em",
                  }}
                >
                  Core Discipline
                </span>
              </div>

              {/* Title & Narrative */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.35rem, 2.2vw, 1.85rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                Cybersecurity &amp; Low-Level Systems
              </h3>

              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.68,
                  maxWidth: "75ch",
                  marginBottom: "2rem",
                }}
              >
                Grounded in computer architecture, network protocol analysis, and defensive operations. Applying low-level systems programming in C, C++, and Python to construct verifiable software, triage malware indicators, and correlate security event logs.
              </p>

              {/* Two-Column Internal Breakdown */}
              <div className="flagship-skills-grid">
                {/* Column 1: Defensive Telemetry */}
                <div
                  style={{
                    padding: "1.25rem 1.4rem",
                    background: "var(--bg-surface-subtle)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "6px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.71875rem",
                      fontWeight: 600,
                      color: "var(--accent-terracotta-light)",
                      marginBottom: "0.85rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <Shield size={13} />
                    Defensive Security &amp; Telemetry
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                    {[
                      "Network Security",
                      "SOC Incident Triage",
                      "Log & Event Correlation",
                      "Static Malware Analysis",
                      "Threat Modeling",
                      "SIEM Telemetry",
                      "Security Event Monitoring",
                    ].map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: "0.8125rem",
                          fontFamily: "var(--font-sans)",
                          color: "var(--text-primary)",
                          background: "var(--bg-surface)",
                          padding: "0.28rem 0.65rem",
                          borderRadius: "4px",
                          border: "1px solid var(--border-subtle)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Column 2: Systems Languages & OS */}
                <div
                  style={{
                    padding: "1.25rem 1.4rem",
                    background: "var(--bg-surface-subtle)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "6px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.71875rem",
                      fontWeight: 600,
                      color: "var(--accent-terracotta-light)",
                      marginBottom: "0.85rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <Terminal size={13} />
                    Systems Languages &amp; Operating Environments
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                    {[
                      "C (Low-Level Systems)",
                      "C++ (Data Structures)",
                      "Python (Automation & Analytics)",
                      "Java (Enterprise OOP)",
                      "Linux / Ubuntu Terminal",
                      "Bash Scripting",
                      "Memory Management",
                    ].map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: "0.8125rem",
                          fontFamily: "var(--font-sans)",
                          color: "var(--text-primary)",
                          background: "var(--bg-surface)",
                          padding: "0.28rem 0.65rem",
                          borderRadius: "4px",
                          border: "1px solid var(--border-subtle)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Complementary Dual Columns: AI/ML & Web Engineering */}
            <div className="skills-dual-grid">
              {/* Dual Column Left: AI/ML & Analytical Engines */}
              <div
                className="skill-feature-card"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "10px",
                  padding: "clamp(1.35rem, 3vw, 2.25rem)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color 450ms cubic-bezier(0.4, 0, 0.2, 1), background-color 450ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem" }}>
                    <span className="mono-tag" style={{ color: "var(--accent-terracotta)" }}>
                      02 · Intelligent Systems
                    </span>
                    <Cpu size={16} color="var(--accent-terracotta)" />
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.015em",
                      marginBottom: "0.45rem",
                    }}
                  >
                    Applied AI / ML &amp; Data
                  </h3>

                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    Sequence modeling, deep learning architectures, anomaly detection scoring pipelines, and high-performance relational &amp; document databases.
                  </p>

                  <div style={{ marginBottom: "1.25rem" }}>
                    <div style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.06em", marginBottom: "0.55rem", textTransform: "uppercase" }}>
                      Machine Learning &amp; Frameworks
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {[
                        "Machine Learning",
                        "Deep Learning",
                        "PyTorch (LSTM)",
                        "XGBoost",
                        "CNN",
                        "Scikit-Learn",
                        "NumPy",
                        "Pandas",
                      ].map((item) => (
                        <span
                          key={item}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            color: "var(--text-primary)",
                            background: "var(--bg-surface-subtle)",
                            padding: "0.22rem 0.55rem",
                            borderRadius: "4px",
                            border: "1px solid var(--border-subtle)",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1.1rem", marginTop: "1rem" }}>
                  <div style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.06em", marginBottom: "0.55rem", textTransform: "uppercase" }}>
                    Databases &amp; Persistence
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {["SQL", "MySQL", "MongoDB", "SQLite", "SQLAlchemy"].map((db) => (
                      <span
                        key={db}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: "var(--text-secondary)",
                          background: "var(--bg-surface-subtle)",
                          padding: "0.22rem 0.55rem",
                          borderRadius: "4px",
                          border: "1px solid var(--border-subtle)",
                        }}
                      >
                        {db}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dual Column Right: Web Engineering & Platforms */}
              <div
                className="skill-feature-card"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "10px",
                  padding: "clamp(1.35rem, 3vw, 2.25rem)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color 450ms cubic-bezier(0.4, 0, 0.2, 1), background-color 450ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem" }}>
                    <span className="mono-tag" style={{ color: "var(--accent-terracotta)" }}>
                      03 · Application Architecture
                    </span>
                    <Globe size={16} color="var(--accent-terracotta)" />
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.015em",
                      marginBottom: "0.45rem",
                    }}
                  >
                    Web Systems &amp; Platforms
                  </h3>

                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    Modern web frontends, type-safe full-stack services, RESTful API design, and disciplined software development toolchains.
                  </p>

                  <div style={{ marginBottom: "1.25rem" }}>
                    <div style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.06em", marginBottom: "0.55rem", textTransform: "uppercase" }}>
                      Web &amp; Backend Engineering
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {[
                        "React",
                        "TypeScript",
                        "JavaScript",
                        "Node.js",
                        "Express.js",
                        "FastAPI",
                        "Vite",
                        "HTML / CSS",
                      ].map((item) => (
                        <span
                          key={item}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            color: "var(--text-primary)",
                            background: "var(--bg-surface-subtle)",
                            padding: "0.22rem 0.55rem",
                            borderRadius: "4px",
                            border: "1px solid var(--border-subtle)",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1.1rem", marginTop: "1rem" }}>
                  <div style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.06em", marginBottom: "0.55rem", textTransform: "uppercase" }}>
                    Development Toolchain &amp; Workflow
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {["Git", "GitHub", "VS Code", "Postman", "Android Debug Tools", "AI-assisted Coding"].map((tool) => (
                      <span
                        key={tool}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: "var(--text-secondary)",
                          background: "var(--bg-surface-subtle)",
                          padding: "0.22rem 0.55rem",
                          borderRadius: "4px",
                          border: "1px solid var(--border-subtle)",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Filtered or Searched Grid View */
          <div>
            {filteredCategories.length > 0 ? (
              <div className="skills-filtered-grid">
                {filteredCategories.map((group) => (
                  <div
                    key={group.id}
                    className="skill-feature-card"
                    style={{
                      padding: "clamp(1.5rem, 2.5vw, 2rem)",
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border-default)",
                      borderRadius: "8px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "border-color 450ms cubic-bezier(0.4, 0, 0.2, 1), background-color 450ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div>
                      {/* Header with index, restrained icon, and group name */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <span className="mono-tag" style={{ color: "var(--accent-terracotta)" }}>
                            {group.index} ·
                          </span>
                          <h3
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "1.2rem",
                              fontWeight: 800,
                              color: "var(--text-primary)",
                              letterSpacing: "-0.02em",
                              textTransform: "uppercase",
                            }}
                          >
                            {group.name}
                          </h3>
                        </div>
                        <div style={{ opacity: 0.9 }}>{getGroupIcon(group.id)}</div>
                      </div>

                      <p
                        style={{
                          fontSize: "0.84375rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.55,
                          marginBottom: "1.5rem",
                        }}
                      >
                        {group.description}
                      </p>
                    </div>

                    {/* Text-based Technology Listing */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.45rem",
                        paddingTop: "1rem",
                        borderTop: "1px solid var(--border-subtle)",
                      }}
                    >
                      {group.skills.map((skill, sIdx) => {
                        const isMatched =
                          searchQuery.trim() !== "" && skill.toLowerCase().includes(searchQuery.toLowerCase());

                        return (
                          <div
                            key={sIdx}
                            style={{
                              fontSize: "0.875rem",
                              color: isMatched ? "var(--text-primary)" : "var(--text-secondary)",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.55rem",
                              background: isMatched ? "var(--accent-terracotta-subtle)" : "transparent",
                              padding: isMatched ? "0.2rem 0.5rem" : "0",
                              borderRadius: "4px",
                              border: isMatched ? "1px solid var(--accent-terracotta-border)" : "1px solid transparent",
                            }}
                          >
                            <span style={{ color: "var(--accent-terracotta)", fontSize: "0.75rem" }}>—</span>
                            <span style={{ color: isMatched ? "var(--accent-terracotta)" : "var(--text-primary)", fontWeight: isMatched ? 600 : 400 }}>
                              {skill}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                style={{
                  padding: "3rem 1.5rem",
                  textAlign: "center",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "8px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                  color: "var(--text-muted)",
                }}
              >
                No toolchains matched &quot;{searchQuery}&quot;. Clear search to view all categories.
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .flagship-skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .skills-dual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: stretch;
        }

        .skills-filtered-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }

        .skill-feature-card:hover {
          border-color: var(--border-strong) !important;
        }

        @media (max-width: 960px) {
          .flagship-skills-grid {
            grid-template-columns: 1fr !important;
            gap: 1.15rem !important;
          }

          .skills-dual-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .skills-filtered-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .skills-search-box {
            width: 100% !important;
            min-width: 100% !important;
            margin-top: 0.35rem;
          }
        }
      `}</style>
    </section>
  );
};
