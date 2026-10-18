import React from "react";
import { achievementsData } from "../data/exploring";
import { Trophy, Code2, GraduationCap, ShieldCheck, Cpu } from "lucide-react";

export const AchievementsSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "leetcode":
        return <Code2 size={24} color="#f59e0b" />;
      case "academics":
        return <GraduationCap size={24} color="var(--emerald-primary)" />;
      case "soc-training":
        return <ShieldCheck size={24} color="var(--cyan-primary)" />;
      case "practical-projects":
        return <Cpu size={24} color="var(--blue-primary)" />;
      default:
        return <Trophy size={24} color="var(--cyan-primary)" />;
    }
  };

  return (
    <section id="achievements" className="section" style={{ background: "rgba(11, 17, 32, 0.4)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>Demonstrated Track Record</span>
          </div>
          <h2 className="section-title">
            Key <span>Achievements</span>
          </h2>
          <p className="section-subtitle">
            Authentic milestones in problem solving, academic rigor, defensive training, and software architecture.
          </p>
        </div>

        {/* Achievements Grid */}
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
              className="glass-card"
              style={{
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1.25rem",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(15, 23, 42, 0.9)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {getIcon(item.id)}
                  </div>

                  <span className="cyber-badge">
                    {item.badge}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--cyan-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.category}
                </div>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>

                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--cyan-primary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.metric}
                </div>

                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
