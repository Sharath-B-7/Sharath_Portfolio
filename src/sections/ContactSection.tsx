import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Send, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "../components/Icons";
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
          <div className="section-label">05 // Inquiries & Professional Connections</div>
          <h2 className="section-heading-editorial">
            Let's Build Something Secure.
          </h2>
          <p className="section-subheading-editorial">
            Currently open to undergraduate research collaborations, defensive cybersecurity internships, and software engineering opportunities.
          </p>
        </div>

        {/* Large Typographic Email Feature Card */}
        <div
          style={{
            border: "1px solid var(--bg-hairline)",
            background: "var(--bg-surface)",
            padding: "clamp(2rem, 4vw, 3.5rem)",
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <Mail size={15} color="var(--accent-cyan)" />
            <span className="mono-tag" style={{ color: "var(--accent-cyan)" }}>
              PRIMARY DIRECT CONTACT
            </span>
          </div>

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
              type="button"
              onClick={handleCopyEmail}
              className="btn-editorial-secondary"
            >
              {copied ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
              <span>{copied ? "Copied to Clipboard" : "Copy Email Address"}</span>
            </button>
          </div>
        </div>

        {/* Verified Profile Links Matrix */}
        <div className="contact-links-grid">
          {/* GitHub */}
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-profile-card"
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <GithubIcon size={18} />
                <span className="mono-tag" style={{ color: "#ffffff" }}>GITHUB</span>
              </div>
              <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
            </div>
            <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>
              @Sharath-B-7
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
              Source code repositories, security pipelines & ML architectures
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-profile-card"
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <LinkedinIcon size={18} />
                <span className="mono-tag" style={{ color: "#ffffff" }}>LINKEDIN</span>
              </div>
              <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
            </div>
            <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>
              Sharath B
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
              Professional network, academic milestones & internship updates
            </div>
          </a>

          {/* LeetCode */}
          <a
            href={personalInfo.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-profile-card"
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <LeetCodeIcon size={18} />
                <span className="mono-tag" style={{ color: "#ffffff" }}>LEETCODE</span>
              </div>
              <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
            </div>
            <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>
              Sharathbcs (450+ Solved)
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
              Continuous algorithmic practice across data structures & graph theory
            </div>
          </a>
        </div>

      </div>

      <style>{`
        .contact-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          border-top: 1px solid var(--bg-hairline);
          padding-top: 2.5rem;
        }

        .contact-profile-card {
          display: block;
          padding: 1.5rem;
          background: var(--bg-surface);
          border: 1px solid var(--bg-hairline);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .contact-profile-card:hover {
          border-color: rgba(255, 255, 255, 0.25);
          background: var(--bg-surface-elevated);
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .contact-links-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
