import React from "react";
import { quickStats } from "../data/stats";
import { GraduationCap, Award, Code2, ShieldAlert } from "lucide-react";

export const StatsSection: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap size={24} color="var(--cyan-primary)" />;
      case 1:
        return <Award size={24} color="var(--emerald-primary)" />;
      case 2:
        return <Code2 size={24} color="#f59e0b" />;
      case 3:
        return <ShieldAlert size={24} color="var(--blue-primary)" />;
      default:
        return <Award size={24} color="var(--cyan-primary)" />;
    }
  };

  return (
    <section
      id="stats"
      style={{
        paddingTop: "1.5rem",
        paddingBottom: "3.5rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              {/* Card Header */}
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
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {getIcon(idx)}
                </div>

                {stat.badge && (
                  <span className="cyber-badge">
                    {stat.badge}
                  </span>
                )}
              </div>

              {/* Main Metric Value */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "2.25rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--cyan-primary)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
