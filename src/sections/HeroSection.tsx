import React from "react";
import {
  ArrowDownRight,
  FileText,
  Mail,
  Shield,
  Cpu,
  Code,
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
          1. DESKTOP ONLY: RIGHT-SIDE FULL-BLEED EDITORIAL BACKGROUND
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

        {/* Multi-Directional Gradient Vignette Blend matching theme canvas */}
        {/* Left-edge smooth fade into theme canvas */}
        <div
          className="hero-portrait-fade-left"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, var(--hero-vignette-solid) 0%, var(--hero-vignette-95) 15%, var(--hero-vignette-75) 35%, var(--hero-vignette-25) 60%, transparent 85%)",
          }}
        />

        {/* Bottom-edge smooth fade into theme canvas */}
        <div
          className="hero-portrait-fade-bottom"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "45%",
            background:
              "linear-gradient(to top, var(--hero-vignette-solid) 0%, var(--hero-vignette-95) 20%, var(--hero-vignette-40) 55%, transparent 100%)",
          }}
        />

        {/* Top-edge subtle vignette */}
        <div
          className="hero-portrait-fade-top"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "22%",
            background:
              "linear-gradient(to bottom, var(--hero-vignette-solid) 0%, var(--hero-vignette-75) 35%, transparent 100%)",
          }}
        />
      </div>

      {/* ==============================================================
          2. MOBILE ONLY: LARGE PORTRAIT-LED HERO BANNER
          Nearly full-width prominent photo fading smoothly into canvas
          ============================================================== */}
      <div className="hero-mobile-portrait-banner" aria-label="Sharath B portrait">
        <img
          src={personalInfo.assets.profilePhoto}
          alt="Sharath B — Cybersecurity & Software Engineer"
          className="hero-mobile-portrait-banner-img"
          loading="eager"
        />
        {/* Bottom smooth multi-stop gradient blend into canvas */}
        <div className="hero-mobile-portrait-fade-bottom" aria-hidden="true" />
        {/* Top subtle fade under fixed navigation */}
        <div className="hero-mobile-portrait-fade-top" aria-hidden="true" />
      </div>

      {/* ==============================================================
          MAIN HERO CONTENT (LEFT SIDE ON DESKTOP,
          STREAMLINED SEQUENTIAL HIERARCHY ON MOBILE)
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
          {/* Order Item 3: Understated Availability Label */}
          <div className="hero-availability-pill">
            <span className="hero-status-dot" aria-hidden="true" />
            <span>AVAILABLE FOR INTERNSHIPS &amp; RESEARCH</span>
          </div>

          {/* Order Item 4: Bold, Expressive Editorial Headline */}
          <h1 className="hero-headline-text">
            <span style={{ display: "block" }}>CYBERSECURITY, AI &amp;</span>
            <span style={{ display: "block" }}>SOFTWARE ENGINEER</span>
          </h1>

          {/* Order Item 5: Short Supporting Line */}
          <p className="hero-supporting-line">
            Building secure systems, verifiable software, and applied AI/ML architectures.
          </p>

          {/* Order Item 6: Meaningful Technical Skill Labels (No redundant metadata) */}
          <div className="hero-skills-grid" aria-label="Core focus areas">
            <div className="hero-skill-chip">
              <Shield size={13} color="var(--accent-cyan)" />
              <span>Defensive Security</span>
            </div>

            {/* LeetCode pill as "Consistent Problem Solver" without problem counts */}
            <a
              href={personalInfo.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-skill-chip hero-skill-chip-link"
              title="LeetCode Profile"
            >
              <LeetCodeIcon size={13} color="var(--accent-cyan)" />
              <span>Consistent Problem Solver</span>
            </a>

            <div className="hero-skill-chip">
              <Cpu size={13} color="var(--accent-cyan)" />
              <span>Applied AI &amp; ML</span>
            </div>

            <div className="hero-skill-chip">
              <Code size={13} color="var(--accent-cyan)" />
              <span>Full-Stack Systems</span>
            </div>
          </div>

          {/* Order Item 7: Concise Personal Introduction */}
          <p className="hero-bio-text">
            I'm <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Sharath B</strong>, a Cybersecurity student at <span style={{ color: "var(--text-primary)" }}>Chennai Institute of Technology</span> focused on defensive security, threat modeling, and secure software engineering.
          </p>

          {/* Order Item 8: Primary Actions */}
          <div className="hero-cta-buttons">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <ArrowDownRight size={15} />
            </a>

            <button onClick={onOpenResume} className="btn-secondary">
              <FileText size={15} />
              <span>View Resume (PDF)</span>
            </button>
          </div>

          {/* Order Item 9: Social Links (Mobile integrated presentation) */}
          <div className="hero-mobile-social-row" aria-label="Social connections">
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
          DESKTOP ONLY: SLIM BOTTOM INFORMATION BAR
          ============================================================== */}
      <div className="hero-bottom-bar">
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

      {/* Dedicated Styles for Desktop & Mobile Hero */}
      <style>{`
        /* --- Desktop Baseline: Hide mobile portrait banner & mobile social row --- */
        .hero-mobile-portrait-banner {
          display: none;
        }

        .hero-mobile-social-row {
          display: none;
        }

        /* --- Shared Availability Pill --- */
        .hero-availability-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-default);
          width: fit-content;
          margin-bottom: 1.25rem;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 500;
          color: var(--text-secondary);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .hero-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent-terracotta);
          box-shadow: 0 0 8px var(--accent-terracotta-border);
          display: inline-block;
        }

        /* --- Headline --- */
        .hero-headline-text {
          font-family: var(--font-display);
          font-size: clamp(2.15rem, 5vw, 4.85rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.04;
          color: var(--text-primary);
          margin-bottom: 1.15rem;
          overflow-wrap: break-word;
          text-transform: uppercase;
        }

        /* --- Supporting Line --- */
        .hero-supporting-line {
          font-family: var(--font-sans);
          font-size: clamp(1rem, 1.35vw, 1.1875rem);
          font-weight: 500;
          color: var(--accent-terracotta-light);
          line-height: 1.45;
          margin-bottom: 1.35rem;
          max-width: 580px;
        }

        /* --- Meaningful Skills Grid --- */
        .hero-skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-bottom: 1.65rem;
        }

        .hero-skill-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.38rem 0.75rem;
          border-radius: 6px;
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-default);
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.8125rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;
        }

        .hero-skill-chip-link {
          text-decoration: none;
          cursor: pointer;
        }

        .hero-skill-chip:hover,
        .hero-skill-chip-link:hover {
          border-color: var(--accent-cyan-border);
          background: var(--accent-cyan-subtle);
          color: var(--text-primary);
        }

        /* --- Bio Text --- */
        .hero-bio-text {
          font-family: var(--font-sans);
          font-size: clamp(0.9375rem, 1.1vw, 1.0625rem);
          color: var(--text-secondary);
          line-height: 1.68;
          max-width: 580px;
          margin-bottom: 1.75rem;
        }

        /* --- CTA Buttons --- */
        .hero-cta-buttons {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        /* --- Desktop Bottom Bar --- */
        .hero-bottom-bar {
          position: relative;
          z-index: 20;
          border-top: 1px solid var(--bg-hairline);
          background: var(--hero-bottom-bar-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding-top: 0.95rem;
          padding-bottom: 1.05rem;
        }

        /* ==============================================================
           MOBILE ONLY (<= 960px): PORTRAIT-LED PROPORTIONS & HIERARCHY
           Matches visual structure and dominant portrait of reference
           ============================================================== */
        @media (max-width: 960px) {
          #hero {
            min-height: auto !important;
            padding-bottom: 2.5rem;
          }

          /* Hide desktop right-side portrait & bottom bar */
          .hero-backdrop-portrait {
            display: none !important;
          }

          .hero-bottom-bar {
            display: none !important;
          }

          /* 1. Large Portrait-Led Banner: nearly full-width, dominant, natural ratio */
          .hero-mobile-portrait-banner {
            display: block !important;
            position: relative;
            width: 100%;
            height: clamp(340px, 48vh, 460px);
            overflow: hidden;
            background: var(--hero-vignette-solid);
          }

          .hero-mobile-portrait-banner-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 12%;
            display: block;
          }

          /* Smooth multi-stop bottom fade into solid canvas */
          .hero-mobile-portrait-fade-bottom {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 52%;
            background: linear-gradient(
              to top,
              var(--hero-vignette-solid) 0%,
              var(--hero-vignette-95) 25%,
              var(--hero-vignette-40) 55%,
              transparent 100%
            );
            pointer-events: none;
          }

          /* Top subtle vignette for fixed navbar contrast */
          .hero-mobile-portrait-fade-top {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 25%;
            background: linear-gradient(
              to bottom,
              var(--hero-vignette-75) 0%,
              transparent 100%
            );
            pointer-events: none;
          }

          /* Content container directly below the portrait fade */
          .hero-container-main {
            padding-top: 0.5rem !important;
            padding-bottom: 1.5rem !important;
          }

          .hero-left-col {
            max-width: 100% !important;
          }

          /* Mobile Bold Expressive Headline */
          .hero-headline-text {
            font-size: clamp(2.15rem, 8.8vw, 3.25rem) !important;
            line-height: 1.04 !important;
            margin-bottom: 0.85rem !important;
          }

          /* 2x2 Skill Grid on Mobile */
          .hero-skills-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 0.55rem;
            margin-bottom: 1.5rem;
          }

          .hero-skill-chip {
            justify-content: flex-start;
            padding: 0.42rem 0.65rem;
            font-size: 0.75rem;
          }

          /* Mobile CTA Buttons */
          .hero-cta-buttons {
            gap: 0.75rem !important;
            margin-bottom: 1.5rem !important;
          }

          .hero-cta-buttons > a,
          .hero-cta-buttons > button {
            flex: 1 1 140px;
            justify-content: center;
          }

          /* Integrated Social Row on Mobile */
          .hero-mobile-social-row {
            display: flex !important;
            flex-direction: column;
            gap: 0.55rem;
            padding-top: 0.75rem;
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

        /* Narrow mobile screens (<= 380px, e.g. iPhone SE / compact viewports) */
        @media (max-width: 380px) {
          .hero-mobile-portrait-banner {
            height: 310px !important;
          }

          .hero-availability-pill {
            font-size: 0.65625rem !important;
            letter-spacing: 0.04em !important;
            padding: 0.22rem 0.6rem !important;
          }

          .hero-headline-text {
            font-size: 1.85rem !important;
          }

          .hero-skills-grid {
            grid-template-columns: 1fr !important;
          }

          .hero-cta-buttons > a,
          .hero-cta-buttons > button {
            width: 100% !important;
            flex: 1 1 100% !important;
          }

          .hero-mobile-social-links > a {
            flex: 1 1 calc(50% - 0.5rem);
          }
        }

        /* Prevent hero photo image elements from animating during theme changes */
        .hero-backdrop-portrait img,
        .hero-mobile-portrait-banner-img {
          transition: none !important;
        }

        /* Light Theme Hero Vignette Overrides - Protect face & natural skin tones while blending into #F4F0E8 */
        [data-theme="light"] .hero-portrait-fade-left {
          background: linear-gradient(
            to right,
            #F4F0E8 0%,
            rgba(244, 240, 232, 0.90) 8%,
            rgba(244, 240, 232, 0.55) 18%,
            rgba(244, 240, 232, 0.18) 28%,
            transparent 35%
          ) !important;
        }

        [data-theme="light"] .hero-portrait-fade-bottom {
          height: 32% !important;
          background: linear-gradient(
            to top,
            #F4F0E8 0%,
            rgba(244, 240, 232, 0.88) 22%,
            rgba(244, 240, 232, 0.35) 60%,
            transparent 100%
          ) !important;
        }

        [data-theme="light"] .hero-portrait-fade-top {
          height: 9% !important;
          background: linear-gradient(
            to bottom,
            rgba(244, 240, 232, 0.55) 0%,
            transparent 100%
          ) !important;
        }

        /* Mobile Light Theme Hero Portrait Vignette Overrides */
        [data-theme="light"] .hero-mobile-portrait-fade-bottom {
          height: 36% !important;
          background: linear-gradient(
            to top,
            #F4F0E8 0%,
            rgba(244, 240, 232, 0.92) 25%,
            rgba(244, 240, 232, 0.45) 65%,
            transparent 100%
          ) !important;
        }

        [data-theme="light"] .hero-mobile-portrait-fade-top {
          height: 10% !important;
          background: linear-gradient(
            to bottom,
            rgba(244, 240, 232, 0.60) 0%,
            transparent 100%
          ) !important;
        }
      `}</style>
    </section>
  );
};
