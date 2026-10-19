import React, { useState } from "react";
import { Terminal, Shield, Globe, Cpu, Database, Wrench, Search, SlidersHorizontal } from "lucide-react";
import { skillCategories } from "../data/skills";

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const getGroupIcon = (id: string) => {
    switch (id) {
      case "languages":
        return <Terminal size={16} color="var(--accent-cyan)" />;
      case "cybersecurity":
        return <Shield size={16} color="var(--accent-cyan)" />;
      case "webdev":
        return <Globe size={16} color="var(--accent-cyan)" />;
      case "aiml":
        return <Cpu size={16} color="var(--accent-cyan)" />;
      case "databases":
        return <Database size={16} color="var(--accent-cyan)" />;
      case "tools":
        return <Wrench size={16} color="var(--accent-cyan)" />;
      default:
        return <Terminal size={16} color="var(--accent-cyan)" />;
    }
  };

  const filteredCategories = skillCategories.filter((group) => {
    // Category tab filter
    if (activeCategory !== "all" && group.id !== activeCategory) {
      return false;
    }
    // Search query filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchesGroup = group.name.toLowerCase().includes(q) || group.description.toLowerCase().includes(q);
      const matchesSkill = group.skills.some((s) => s.toLowerCase().includes(q));
      return matchesGroup || matchesSkill;
    }
    return true;
  });

  return (
    <section id="skills" className="editorial-section">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div className="section-label">03 // Technical Capabilities</div>
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
                fontSize: "0.71875rem",
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
                marginRight: "0.4rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              <SlidersHorizontal size={12} />
              CATEGORY:
            </span>

            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              style={{
                background: activeCategory === "all" ? "var(--accent-cyan-subtle)" : "rgba(255, 255, 255, 0.025)",
                border: activeCategory === "all" ? "1px solid var(--accent-cyan-border)" : "1px solid var(--border-subtle)",
                borderRadius: "4px",
                padding: "0.3rem 0.65rem",
                color: activeCategory === "all" ? "var(--text-primary)" : "var(--text-secondary)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.71875rem",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              All Toolchains
            </button>

            {skillCategories.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveCategory(group.id)}
                style={{
                  background: activeCategory === group.id ? "var(--accent-cyan-subtle)" : "rgba(255, 255, 255, 0.025)",
                  border: activeCategory === group.id ? "1px solid var(--accent-cyan-border)" : "1px solid var(--border-subtle)",
                  borderRadius: "4px",
                  padding: "0.3rem 0.65rem",
                  color: activeCategory === group.id ? "var(--text-primary)" : "var(--text-secondary)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.71875rem",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
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
              background: "rgba(255, 255, 255, 0.025)",
              border: "1px solid var(--border-default)",
              borderRadius: "4px",
              padding: "0.35rem 0.75rem",
              minWidth: "220px",
            }}
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

        {/* 6-Block Grid: Clean, Text-First Technical Matrix */}
        {filteredCategories.length > 0 ? (
          <div className="skills-grid-container">
            {filteredCategories.map((group) => (
              <div
                key={group.id}
                className="skill-card-block"
                style={{
                  padding: "clamp(1.5rem, 2.5vw, 2rem)",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                }}
              >
                <div>
                  {/* Header with index, restrained icon, and group name */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span className="mono-tag" style={{ color: "var(--accent-cyan)" }}>
                        {group.index} //
                      </span>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {group.name}
                      </h3>
                    </div>
                    <div style={{ opacity: 0.9 }}>{getGroupIcon(group.id)}</div>
                  </div>

                  <p
                    style={{
                      fontSize: "0.8125rem",
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
                          background: isMatched ? "var(--accent-cyan-subtle)" : "transparent",
                          padding: isMatched ? "0.15rem 0.4rem" : "0",
                          borderRadius: "3px",
                        }}
                      >
                        <span style={{ color: "var(--accent-cyan)", fontSize: "0.75rem" }}>—</span>
                        <span style={{ color: isMatched ? "var(--accent-cyan-light)" : "var(--text-primary)", fontWeight: isMatched ? 600 : 400 }}>
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

      <style>{`
        .skills-grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .skill-card-block:hover {
          border-color: var(--border-strong) !important;
          background: var(--bg-surface-elevated) !important;
        }

        @media (max-width: 1024px) {
          .skills-grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .skills-grid-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
