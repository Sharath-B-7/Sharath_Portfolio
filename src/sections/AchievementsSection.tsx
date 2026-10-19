import React, { useState } from "react";
import { Trophy, Code2, GraduationCap, ShieldCheck, Cpu, Award, CheckCircle2, SlidersHorizontal } from "lucide-react";
import { achievementsData, dsaTopics } from "../data/exploring";
import { certificationsData } from "../data/certifications";

export const AchievementsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "academic" | "certifications">("all");

  const getAchievementIcon = (id: string) => {
    switch (id) {
      case "leetcode":
        return <Code2 size={20} color="var(--accent-cyan)" />;
      case "academics":
        return <GraduationCap size={20} color="var(--accent-emerald)" />;
      case "soc-training":
        return <ShieldCheck size={20} color="var(--accent-cyan)" />;
      case "practical-projects":
        return <Cpu size={20} color="var(--accent-cyan)" />;
      default:
        return <Trophy size={20} color="var(--accent-cyan)" />;
    }
  };

  return (
    <section id="achievements" className="editorial-section">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div className="section-label">04 // Demonstrated Track Record</div>
          <h2 className="section-heading-editorial">
            Achievements &amp; Credentials
          </h2>
          <p className="section-subheading-editorial">
            Verified academic milestones, algorithmic problem-solving track record across 450+ LeetCode problems, and industry-standard certifications.
          </p>
        </div>

        {/* Tab Filters */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.45rem",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <span
            style={{
              fontSize: "0.71875rem",
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              marginRight: "0.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <SlidersHorizontal size={13} />
            FILTER CREDENTIALS:
          </span>

          <button
            type="button"
            onClick={() => setActiveTab("all")}
            style={{
              background: activeTab === "all" ? "var(--accent-cyan-subtle)" : "rgba(255, 255, 255, 0.025)",
              border: activeTab === "all" ? "1px solid var(--accent-cyan-border)" : "1px solid var(--border-subtle)",
              borderRadius: "4px",
              padding: "0.35rem 0.75rem",
              color: activeTab === "all" ? "var(--text-primary)" : "var(--text-secondary)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.71875rem",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            All Milestones &amp; Certs
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("academic")}
            style={{
              background: activeTab === "academic" ? "var(--accent-cyan-subtle)" : "rgba(255, 255, 255, 0.025)",
              border: activeTab === "academic" ? "1px solid var(--accent-cyan-border)" : "1px solid var(--border-subtle)",
              borderRadius: "4px",
              padding: "0.35rem 0.75rem",
              color: activeTab === "academic" ? "var(--text-primary)" : "var(--text-secondary)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.71875rem",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            Academic &amp; DSA Discipline
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("certifications")}
            style={{
              background: activeTab === "certifications" ? "var(--accent-cyan-subtle)" : "rgba(255, 255, 255, 0.025)",
              border: activeTab === "certifications" ? "1px solid var(--accent-cyan-border)" : "1px solid var(--border-subtle)",
              borderRadius: "4px",
              padding: "0.35rem 0.75rem",
              color: activeTab === "certifications" ? "var(--text-primary)" : "var(--text-secondary)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.71875rem",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            Industry Certifications ({certificationsData.length})
          </button>
        </div>

        {/* SECTION A: Key Milestones Grid */}
        {(activeTab === "all" || activeTab === "academic") && (
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--accent-cyan)", letterSpacing: "0.06em", marginBottom: "1rem" }}>
              // CORE HIGHLIGHTS &amp; DSA DISCIPLINE
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {achievementsData.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: "clamp(1.5rem, 2vw, 1.85rem)",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-default)",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "1.25rem",
                    transition: "border-color 0.2s ease, background 0.2s ease",
                  }}
                  className="editorial-card-hover"
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "8px",
                          background: "var(--bg-surface-elevated)",
                          border: "1px solid var(--border-subtle)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {getAchievementIcon(item.id)}
                      </div>

                      <span
                        style={{
                          fontSize: "0.6875rem",
                          fontFamily: "var(--font-mono)",
                          color: "var(--text-secondary)",
                          border: "1px solid var(--border-subtle)",
                          padding: "0.15rem 0.5rem",
                          borderRadius: "4px",
                          background: "rgba(255, 255, 255, 0.02)",
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <div
                      style={{
                        fontSize: "0.6875rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-cyan)",
                        letterSpacing: "0.06em",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {item.category}
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.4rem",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.title}
                    </h3>

                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {item.metric}
                    </div>

                    <p style={{ color: "var(--text-secondary)", fontSize: "0.84375rem", lineHeight: 1.65 }}>
                      {item.description}
                    </p>
                  </div>

                  {/* LeetCode Topic Tag Cloud if leetcode card */}
                  {item.id === "leetcode" && (
                    <div style={{ paddingTop: "0.75rem", borderTop: "1px solid var(--border-subtle)" }}>
                      <div style={{ fontSize: "0.65625rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginBottom: "0.4rem" }}>
                        PRACTICE DOMAINS:
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                        {dsaTopics.slice(0, 8).map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              fontSize: "0.65625rem",
                              fontFamily: "var(--font-mono)",
                              background: "rgba(255, 255, 255, 0.03)",
                              border: "1px solid var(--border-subtle)",
                              borderRadius: "3px",
                              padding: "0.1rem 0.35rem",
                              color: "var(--text-muted)",
                            }}
                          >
                            {topic}
                          </span>
                        ))}
                        <span style={{ fontSize: "0.65625rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", alignSelf: "center" }}>
                          +8 more
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION B: Industry Certifications & Training Grid */}
        {(activeTab === "all" || activeTab === "certifications") && (
          <div>
            <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--accent-cyan)", letterSpacing: "0.06em", marginBottom: "1rem" }}>
              // VERIFIED INDUSTRY CERTIFICATIONS &amp; CREDENTIALS
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  style={{
                    padding: "1.5rem",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-default)",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "1rem",
                    transition: "border-color 0.2s ease, background 0.2s ease",
                  }}
                  className="editorial-card-hover"
                >
                  <div>
                    {/* Header: Issuer + Badge */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.6rem" }}>
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          fontFamily: "var(--font-mono)",
                          color: "var(--accent-cyan)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {cert.issuer}
                      </span>
                      <span
                        style={{
                          fontSize: "0.65625rem",
                          fontFamily: "var(--font-mono)",
                          color: "var(--text-secondary)",
                          border: "1px solid var(--border-subtle)",
                          padding: "0.15rem 0.45rem",
                          borderRadius: "4px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          background: "rgba(255, 255, 255, 0.02)",
                        }}
                      >
                        <Award size={10} style={{ color: "var(--accent-cyan)" }} />
                        {cert.badgeLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.6rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {cert.title}
                    </h3>

                    {/* Description */}
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.55, marginBottom: "1rem" }}>
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border-subtle)" }}>
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: "0.6875rem",
                          fontFamily: "var(--font-mono)",
                          color: "var(--text-muted)",
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid var(--border-subtle)",
                          padding: "0.15rem 0.45rem",
                          borderRadius: "3px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <CheckCircle2 size={9} style={{ color: "var(--accent-cyan)" }} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .editorial-card-hover:hover {
          border-color: var(--border-strong) !important;
          background: var(--bg-surface-elevated) !important;
        }
      `}</style>
    </section>
  );
};
