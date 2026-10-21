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
                background: "var(--bg-surface-subtle)",
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
                transition: "border-color 450ms cubic-bezier(0.4, 0, 0.2, 1), background-color 450ms cubic-bezier(0.4, 0, 0.2, 1), color 450ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.borderColor = "var(--accent-terracotta-border)";
                e.currentTarget.style.background = "var(--accent-terracotta-subtle)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--border-default)";
                e.currentTarget.style.background = "var(--bg-surface-subtle)";
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
