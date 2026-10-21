import React from "react";
import {
  ArrowDownRight,
  FileText,
  Mail,
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
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100svh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "var(--bg-canvas)",
        overflow: "hidden",
      }}
    >
      {/* ==============================================================
          DESKTOP RIGHT-SIDE FULL-BLEED EDITORIAL BACKGROUND PHOTOGRAPH
          Seamless Multi-Directional Gradient Blend into Canvas
          ============================================================== */}
      <div
        className="hero-backdrop-portrait"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "46%",
          maxWidth: "740px",
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
            objectPosition: "center 14%",
            filter: "contrast(104%) saturate(102%) brightness(98%)",
          }}
          loading="eager"
        />

        {/* Multi-Directional Gradient Vignette / Edge Blend matching deep charcoal canvas */}
        {/* Left-edge smooth fade into the dark canvas (active on desktop) */}
        <div
          className="hero-vignette-left"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #0c0f17 0%, rgba(12, 15, 23, 0.95) 15%, rgba(12, 15, 23, 0.75) 35%, rgba(12, 15, 23, 0.25) 60%, transparent 85%)",
          }}
        />

        {/* Bottom-edge smooth fade into dark canvas */}
        <div
          className="hero-vignette-bottom"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "45%",
            background:
              "linear-gradient(to top, #0c0f17 0%, rgba(12, 15, 23, 0.95) 20%, rgba(12, 15, 23, 0.4) 55%, transparent 100%)",
          }}
        />

        {/* Top-edge subtle vignette */}
        <div
          className="hero-vignette-top"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "22%",
            background:
              "linear-gradient(to bottom, #0c0f17 0%, rgba(12, 15, 23, 0.65) 35%, transparent 100%)",
          }}
        />
      </div>

      {/* ==============================================================
          MAIN HERO CONTENT (LEFT SIDE DOMINANCE ON DESKTOP,
          PORTRAIT-LED NATURAL FLOW ON MOBILE)
          ============================================================== */}
      <div
        className="container hero-container-main"
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "clamp(6rem, 11vh, 8.5rem)",
          paddingBottom: "clamp(2rem, 4vh, 3.5rem)",
        }}
      >
        <div
          style={{
            maxWidth: "clamp(480px, 58vw, 800px)",
            display: "flex",
            flexDirection: "column",
          }}
          className="hero-left-col"
        >
          {/* 1. Clear Portrait (Mobile only: large, prominent, natural proportions above heading) */}
          <div className="hero-mobile-portrait" aria-label="Sharath B portrait">
            <img
              src={personalInfo.assets.profilePhoto}
              alt="Sharath B — Cybersecurity & Software Engineer"
              className="hero-mobile-portrait-img"
              loading="eager"
            />
          </div>

          {/* 2. Availability Label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.32rem 0.85rem",
              borderRadius: "9999px",
              background: "rgba(16, 185, 129, 0.08)",
              border: "1px solid var(--accent-emerald-border)",
              width: "fit-content",
              marginBottom: "1.25rem",
            }}
            className="hero-availability-pill"
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--accent-emerald)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#34d399",
                letterSpacing: "0.01em",
              }}
            >
              Available for Internships &amp; Research
            </span>
          </div>

          {/* 3. Primary Editorial Headline */}
          <h1
            className="hero-headline-text"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 5.2vw, 5.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
              color: "var(--text-primary)",
              marginBottom: "1.15rem",
              overflowWrap: "break-word",
            }}
          >
            <span style={{ display: "block" }}>Cybersecurity &amp;</span>
            <span style={{ display: "block", color: "#ffffff" }}>Software Engineer</span>
          </h1>

          {/* 4. Short Supporting Text (Role Tagline + Understated LeetCode Problem Solver badge) */}
          <div className="hero-support-group" style={{ marginBottom: "1.35rem" }}>
            <p
              className="hero-tagline"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.95rem, 1.25vw, 1.125rem)",
                fontWeight: 500,
                color: "var(--accent-cyan-light)",
                lineHeight: 1.45,
                marginBottom: "0.75rem",
              }}
            >
              Building secure systems, practical software, and applied AI/ML.
            </p>

            {/* Clickable LeetCode badge without problem count */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              <a
                href={personalInfo.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-clean-pill"
                style={{ textDecoration: "none", cursor: "pointer" }}
                title="LeetCode Profile"
              >
                <LeetCodeIcon size={12} color="var(--accent-cyan)" />
                <span>Consistent Problem Solver</span>
              </a>
            </div>
          </div>

          {/* 5. Concise Introduction Paragraph (Authentic, no 450+ count) */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.68,
              maxWidth: "580px",
              marginBottom: "1.75rem",
            }}
            className="hero-intro-bio"
          >
            I'm <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Sharath B</strong>, a Cybersecurity student at <span style={{ color: "var(--text-primary)" }}>Chennai Institute of Technology</span> focused on defensive security, threat modeling, and secure software engineering.
          </p>

          {/* 6. Primary Action Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            }}
            className="hero-cta-buttons"
          >
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <ArrowDownRight size={15} />
            </a>

            <button onClick={onOpenResume} className="btn-secondary">
              <FileText size={15} />
              <span>View Resume (PDF)</span>
            </button>
          </div>

          {/* 7. Social Links (Mobile integrated view below buttons) */}
          <div className="hero-mobile-social" aria-label="Social connections">
            <span className="hero-mobile-social-label">Connect:</span>
            <div className="hero-mobile-social-links">
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
                title="LeetCode Profile"
              >
                <LeetCodeIcon size={13} />
                <span>LeetCode</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ==============================================================
          SLIM BOTTOM INFORMATION BAR (ALIGNED FOOTER BAR ON DESKTOP)
          ============================================================== */}
      <div
        className="hero-bottom-bar"
        style={{
          position: "relative",
          zIndex: 20,
          borderTop: "1px solid var(--bg-hairline)",
          background: "rgba(12, 15, 23, 0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          paddingTop: "0.95rem",
          paddingBottom: "1.05rem",
        }}
      >
        <div
          className="container hero-bottom-container"
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
              letterSpacing: "0.08em",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span>CHENNAI, INDIA · 2025–2029</span>
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
              title="LeetCode Profile"
            >
              <LeetCodeIcon size={13} />
              <span>LeetCode</span>
            </a>

            {/* Resume Action */}
            <button
              onClick={onOpenResume}
              className="social-pill-link"
              style={{
                background: "var(--accent-cyan-subtle)",
                borderColor: "var(--accent-cyan-border)",
                color: "var(--accent-cyan-light)",
                cursor: "pointer",
                fontWeight: 600,
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
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border-default)",
                color: "var(--text-primary)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(45deg)";
                e.currentTarget.style.borderColor = "var(--accent-cyan-border)";
                e.currentTarget.style.background = "var(--accent-cyan-subtle)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(0deg)";
                e.currentTarget.style.borderColor = "var(--border-default)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
              }}
              title="Scroll to About Section"
              aria-label="Scroll to about section"
            >
              <ArrowDownRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Dedicated Styles for Hero & Metadata */}
      <style>{`
        .hero-clean-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.32rem 0.65rem;
          border-radius: 6px;
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.8125rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: border-color 0.15s ease, color 0.15s ease;
        }

        .hero-clean-pill:hover {
          border-color: var(--border-strong);
          color: var(--text-primary);
        }

        /* Desktop: mobile portrait and mobile social are hidden */
        .hero-mobile-portrait {
          display: none;
        }

        .hero-mobile-social {
          display: none;
        }

        /* ==========================================================
           MOBILE & TABLET RESPONSIVE HERO (<= 960px)
           Portrait-led natural hero sequence with clear portrait
           above heading, no watermark behind text, no separate card
           ========================================================== */
        @media (max-width: 960px) {
          #hero {
            min-height: auto !important;
            padding-bottom: 2.5rem;
          }

          /* Hide desktop right-side background portrait & desktop bottom bar */
          .hero-backdrop-portrait {
            display: none !important;
          }

          .hero-bottom-bar {
            display: none !important;
          }

          /* Content column full width */
          .hero-left-col {
            max-width: 100% !important;
          }

          .hero-container-main {
            padding-top: clamp(5.25rem, 8vh, 6.25rem) !important;
            padding-bottom: 1.5rem !important;
          }

          /* 1. Large, clear profile portrait above the heading */
          .hero-mobile-portrait {
            display: block;
            width: clamp(140px, 42vw, 180px);
            aspect-ratio: 4 / 5;
            border-radius: 14px;
            overflow: hidden;
            border: 1px solid var(--border-default);
            background: var(--bg-surface);
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
            margin-bottom: 1.35rem;
          }

          .hero-mobile-portrait-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 14%;
            display: block;
          }

          /* 3. Headline responsiveness */
          .hero-headline-text {
            font-size: clamp(2rem, 7.5vw, 3rem) !important;
            line-height: 1.12 !important;
            margin-bottom: 0.95rem !important;
          }

          /* 6. Buttons responsiveness */
          .hero-cta-buttons {
            gap: 0.75rem !important;
            margin-bottom: 1.5rem !important;
          }

          /* 7. Social Links row on mobile */
          .hero-mobile-social {
            display: flex;
            flex-direction: column;
            gap: 0.55rem;
            padding-top: 0.5rem;
            border-top: 1px solid var(--border-subtle);
          }

          .hero-mobile-social-label {
            font-family: var(--font-sans);
            font-size: 0.75rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-muted);
          }

          .hero-mobile-social-links {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 0.5rem;
          }
        }

        /* Narrow mobile phones (<= 360px, e.g. iPhone SE 1st gen) */
        @media (max-width: 360px) {
          .hero-mobile-portrait {
            width: 130px;
          }

          .hero-headline-text {
            font-size: 1.85rem !important;
          }

          .hero-cta-buttons > a,
          .hero-cta-buttons > button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
