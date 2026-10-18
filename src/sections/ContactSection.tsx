import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Send } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="editorial-section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">05 // Inquiries & Connection</div>
          <h2 className="section-heading-editorial">
            Let's Build Something Secure.
          </h2>
          <p className="section-subheading-editorial">
            Currently open to undergraduate research collaborations, defensive security internships, and technical software engineering opportunities.
          </p>
        </div>

        {/* Large Typographic Email Feature Card */}
        <div
          style={{
            border: "1px solid var(--bg-hairline)",
            background: "var(--bg-surface)",
            padding: "clamp(2rem, 4vw, 3.5rem)",
            marginBottom: "3rem",
          }}
        >
          <span className="mono-tag" style={{ display: "block", marginBottom: "0.75rem" }}>
            PRIMARY DIRECT CONTACT
          </span>

          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4vw, 3.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              wordBreak: "break-all",
              lineHeight: 1.15,
              marginBottom: "1.75rem",
            }}
          >
            {personalInfo.social.email}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="btn-editorial-primary"
            >
              <Send size={14} />
              <span>Send Direct Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-editorial-secondary"
            >
              {copied ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
              <span>{copied ? "Copied to Clipboard" : "Copy Email Address"}</span>
            </button>
          </div>
        </div>

        {/* Verified Profile Links Matrix */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            borderTop: "1px solid var(--bg-hairline)",
            paddingTop: "2.5rem",
          }}
        >
          <div>
            <span className="mono-tag" style={{ display: "block", marginBottom: "0.35rem" }}>
              CODE REPOSITORIES
            </span>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link-arrow"
              style={{ fontSize: "1rem", color: "#ffffff", fontWeight: 600 }}
            >
              <span>GitHub: @Sharath-B-7</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div>
            <span className="mono-tag" style={{ display: "block", marginBottom: "0.35rem" }}>
              PROFESSIONAL NETWORK
            </span>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link-arrow"
              style={{ fontSize: "1rem", color: "#ffffff", fontWeight: 600 }}
            >
              <span>LinkedIn: Sharath B</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div>
            <span className="mono-tag" style={{ display: "block", marginBottom: "0.35rem" }}>
              ALGORITHMIC PRACTICE
            </span>
            <a
              href={personalInfo.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link-arrow"
              style={{ fontSize: "1rem", color: "#ffffff", fontWeight: 600 }}
            >
              <span>LeetCode: 450+ Solved</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
