import React from "react";
import { FileText, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

interface ResumeCtaSectionProps {
  onOpenResume: () => void;
}

export const ResumeCtaSection: React.FC<ResumeCtaSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume-cta" className="section">
      <div className="container">
        <div
          className="glass-card"
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            padding: "clamp(2rem, 4vw, 3.5rem)",
            background: "linear-gradient(145deg, rgba(13, 20, 36, 0.9) 0%, rgba(7, 10, 19, 0.95) 100%)",
            border: "1px solid rgba(0, 240, 255, 0.3)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 240, 255, 0.15)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          {/* Badge */}
          <div className="cyber-badge green">
            <ShieldCheck size={14} />
            <span>Verified PDF Document</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
            }}
          >
            Want to know <span style={{ color: "var(--cyan-primary)" }}>more?</span>
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              maxWidth: "600px",
              lineHeight: 1.7,
            }}
          >
            «Take a closer look at my skills, projects, certifications and experience.»
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              marginTop: "0.5rem",
            }}
          >
            <button
              onClick={onOpenResume}
              className="btn btn-primary"
              style={{ padding: "0.85rem 1.75rem", fontSize: "1rem" }}
            >
              <FileText size={18} />
              <span>View Resume</span>
            </button>

            <a
              href={personalInfo.assets.resumePdf}
              download="Sharath_B_Resume.pdf"
              className="btn btn-secondary"
              style={{ padding: "0.85rem 1.75rem", fontSize: "1rem" }}
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>

            <a
              href={personalInfo.assets.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ padding: "0.85rem 1.25rem", fontSize: "0.9375rem" }}
            >
              <ExternalLink size={16} />
              <span>Open in Tab</span>
            </a>
          </div>

          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Source Asset: public/resume/sharath-resume.pdf (Original student upload)
          </div>
        </div>
      </div>
    </section>
  );
};
