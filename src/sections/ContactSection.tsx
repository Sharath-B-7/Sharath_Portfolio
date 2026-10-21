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
          <div className="section-label">06 · Inquiries &amp; Connections</div>
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
            border: "1px solid var(--border-default)",
            background: "var(--bg-surface)",
            borderRadius: "8px",
            padding: "clamp(2rem, 4vw, 3.25rem)",
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
            <Mail size={15} color="var(--accent-terracotta-light)" />
            <span className="mono-tag" style={{ color: "var(--accent-terracotta-light)" }}>
              DIRECT EMAIL INQUIRY
            </span>
          </div>

          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.25rem, 4.2vw, 2.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              wordBreak: "break-word",
              lineHeight: 1.2,
              marginBottom: "1.75rem",
            }}
          >
            {personalInfo.social.email}
          </div>

          <div className="contact-cta-buttons">
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="btn-primary"
            >
              <Send size={14} />
              <span>Send Direct Email</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="btn-secondary"
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
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--text-primary)" }}>GitHub</span>
              </div>
              <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
              @Sharath-B-7
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
              Source code repositories, security pipelines &amp; ML architectures
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
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--text-primary)" }}>LinkedIn</span>
              </div>
              <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
              Sharath B
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
              Professional network, academic milestones &amp; internship updates
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
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--text-primary)" }}>LeetCode</span>
              </div>
              <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
              Sharathbcs (450+ Solved)
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
              Continuous algorithmic practice across data structures &amp; graph theory
            </div>
          </a>
        </div>

      </div>

      <style>{`
        .contact-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        .contact-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          border-top: 1px solid var(--border-subtle);
          padding-top: 2.5rem;
        }

        .contact-profile-card {
          display: block;
          padding: 1.5rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-default);
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .contact-profile-card:hover {
          border-color: var(--border-strong);
          background: var(--bg-surface-elevated);
          transform: translateY(-2px);
        }

        @media (max-width: 900px) and (min-width: 601px) {
          .contact-links-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .contact-links-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .contact-cta-buttons > a,
          .contact-cta-buttons > button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};
