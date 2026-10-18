import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#09090b",
        borderTop: "1px solid var(--bg-hairline)",
        paddingTop: "3rem",
        paddingBottom: "3.5rem",
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
                color: "#ffffff",
                letterSpacing: "-0.01em",
                marginBottom: "0.25rem",
              }}
            >
              SHARATH B
            </div>
            <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              B.E. Computer Science & Engineering (Cyber Security) · Chennai Institute of Technology
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
              CHENNAI, IN // 2026
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                background: "transparent",
                border: "1px solid var(--bg-hairline)",
                color: "var(--text-secondary)",
                padding: "0.35rem 0.75rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--bg-hairline)";
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
