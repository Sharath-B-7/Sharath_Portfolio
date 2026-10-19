import React from "react";
import {
  ArrowDownRight,
  FileText,
  Mail,
  Shield,
  GraduationCap,
  Code,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "../components/Icons";
import { personalInfo } from "../data/personalInfo";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "var(--bg-color)",
        overflow: "hidden",
      }}
    >
      {/* ==============================================================
          RIGHT-SIDE FULL-BLEED EDITORIAL BACKGROUND PHOTOGRAPH
          Integrated with Multi-Directional Gradient Blend (Reference Match)
          ============================================================== */}
      <div
        className="hero-backdrop-portrait"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "45%",
          maxWidth: "760px",
          zIndex: 1,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* Genuine Profile Photograph */}
        <img
          src={personalInfo.assets.profilePhoto}
          alt="Sharath B — Cybersecurity & Software Engineer"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 12%",
            filter: "contrast(106%) saturate(102%) brightness(98%)",
          }}
          loading="eager"
        />

        {/* Multi-Directional Gradient Vignette / Edge Blend */}
        {/* Left-edge smooth fade into the dark canvas */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #08080c 0%, rgba(8, 8, 12, 0.85) 15%, rgba(8, 8, 12, 0.4) 40%, transparent 70%)",
          }}
        />

        {/* Bottom-edge smooth fade into dark canvas */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "40%",
            background:
              "linear-gradient(to top, #08080c 0%, rgba(8, 8, 12, 0.9) 25%, transparent 100%)",
          }}
        />

        {/* Top-edge subtle vignette */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "18%",
            background:
              "linear-gradient(to bottom, #08080c 0%, rgba(8, 8, 12, 0.6) 40%, transparent 100%)",
          }}
        />
      </div>

      {/* ==============================================================
          MAIN HERO CONTENT (LEFT SIDE DOMINANCE)
          ============================================================== */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "clamp(6rem, 12vh, 8.5rem)",
          paddingBottom: "clamp(2rem, 4vh, 3.5rem)",
        }}
      >
        <div
          style={{
            maxWidth: "clamp(460px, 58vw, 820px)",
            display: "flex",
            flexDirection: "column",
          }}
          className="hero-left-col"
        >
          {/* Subtle Status Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.3rem 0.8rem",
              borderRadius: "9999px",
              background: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              width: "fit-content",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
                display: "inline-block",
                boxShadow: "0 0 8px #10b981",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6875rem",
                fontWeight: 700,
                color: "#34d399",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Available for Internships & Projects
            </span>
          </div>

          {/* Bold, Oversized Multi-Line Editorial Headline */}
          <h1
            className="hero-headline-text"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 6.8vw, 6.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.89,
              color: "#ffffff",
              textTransform: "uppercase",
              marginBottom: "1.75rem",
            }}
          >
            <div style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}>CYBER</div>
            <div style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}>SECURITY</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
                textShadow: "0 4px 20px rgba(0,0,0,0.8)",
              }}
              className="hero-third-line"
            >
              <span>& SOFTWARE</span>
            </div>
            <div style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}>ENGINEER</div>
          </h1>

          {/* Compact Supporting Metadata Pills (Refined & Restrained) */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.75rem",
            }}
            className="hero-meta-pills"
          >
            <div className="hero-clean-pill">
              <Shield size={12} color="var(--accent-cyan)" />
              <span>Cybersecurity & Network Security</span>
            </div>

            <div className="hero-clean-pill">
              <GraduationCap size={12} color="var(--accent-cyan)" />
              <span>CIT Chennai // 2025–2029</span>
            </div>

            <div className="hero-clean-pill">
              <CheckCircle2 size={12} color="#34d399" />
              <span>CGPA: 8.5 / 10</span>
            </div>

            <div className="hero-clean-pill">
              <Code size={12} color="var(--accent-cyan)" />
              <span>450+ LeetCode Solved</span>
            </div>
          </div>

          {/* Short Introduction Paragraph */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              maxWidth: "580px",
              marginBottom: "2rem",
            }}
          >
            I'm <strong style={{ color: "#ffffff", fontWeight: 600 }}>Sharath B</strong>, a Cybersecurity student at <span style={{ color: "#ffffff" }}>Chennai Institute of Technology</span> interested in secure software, threat analysis, and intelligent systems.
          </p>

          {/* Primary Action Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <ArrowDownRight size={15} />
            </a>

            <button onClick={onOpenResume} className="btn-secondary">
              <FileText size={14} />
              <span>View Resume (PDF)</span>
            </button>
          </div>

        </div>
      </div>

      {/* ==============================================================
          SLIM BOTTOM INFORMATION BAR (ALIGNED FOOTER BAR)
          ============================================================== */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          background: "rgba(8, 8, 12, 0.85)",
          backdropFilter: "blur(10px)",
          paddingTop: "1rem",
          paddingBottom: "1.1rem",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {/* Left: Location & Academic Monospace Tag */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span>CHENNAI, INDIA — 2025–2029</span>
            <span style={{ opacity: 0.3 }}>/</span>
            <span style={{ color: "var(--text-secondary)" }}>CIT CHENNAI CSE-CYBER</span>
          </div>

          {/* Right: Compact Technical & Social Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.55rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="social-pill-link"
              title="Direct Email"
            >
              <Mail size={13} />
              <span>Email</span>
            </a>

            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-link"
              title="GitHub Profile"
            >
              <GithubIcon size={13} />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-link"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={13} />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-link"
              title="LeetCode (450+ Solved)"
            >
              <LeetCodeIcon size={13} />
              <span>LeetCode</span>
            </a>

            {/* Resume Action */}
            <button
              onClick={onOpenResume}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.4rem 0.95rem",
                borderRadius: "6px",
                background: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.35)",
                color: "#34d399",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#10b981";
                e.currentTarget.style.color = "#04070d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(16, 185, 129, 0.12)";
                e.currentTarget.style.color = "#34d399";
              }}
              title="View Verified Resume PDF"
            >
              <FileText size={13} />
              <span>Resume PDF</span>
            </button>

            {/* Circular Down-Right Arrow Button to Explore */}
            <a
              href="#about"
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                background: "#ffffff",
                color: "#08080c",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(45deg)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "rotate(0deg)")}
              title="Scroll to About Section"
              aria-label="Scroll to about section"
            >
              <ArrowDownRight size={17} />
            </a>
          </div>
        </div>
      </div>

      {/* Dedicated Styles for Hero & Metadata Pills */}
      <style>{`
        .hero-clean-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.3rem 0.65rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.09);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          fontSize: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        @media (max-width: 960px) {
          .hero-backdrop-portrait {
            width: 100% !important;
            opacity: 0.22 !important;
            background-blend-mode: darken;
          }
          .hero-left-col {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
