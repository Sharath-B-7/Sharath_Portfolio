import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg-canvas)",
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "2.75rem",
        paddingBottom: "3.25rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          {/* Colophon Details */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
                marginBottom: "0.25rem",
              }}
            >
              SHARATH B
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", fontFamily: "var(--font-sans)", lineHeight: 1.5 }}>
              B.E. Computer Science &amp; Engineering (Cyber Security) · Chennai Institute of Technology
            </p>
          </div>

          {/* Right: Location & Back to Top */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <span
              className="mono-tag"
              style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
            >
              CHENNAI, INDIA · 2026
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                background: "rgba(255, 255, 255, 0.025)",
                border: "1px solid var(--border-default)",
                borderRadius: "4px",
                color: "var(--text-secondary)",
                padding: "0.35rem 0.75rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                transition: "all 0.18s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.borderColor = "var(--accent-cyan-border)";
                e.currentTarget.style.background = "var(--accent-cyan-subtle)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--border-default)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.025)";
              }}
            >
              <span>TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
