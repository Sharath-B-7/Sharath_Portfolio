import React from "react";
import {
  ArrowDownRight,
  FileText,
  Mail,
  Shield,
  GraduationCap,
  Code,
  MapPin,
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
      {/* Subtle architectural ambient glow (restrained, non-blinding) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-15%",
          right: "5%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ==============================================================
          MAIN HERO CONTAINER (BALANCED TWO-COLUMN EDITORIAL COMPOSITION)
          ============================================================== */}
      <div
        className="container hero-container"
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "clamp(5.5rem, 10vh, 7.5rem)",
          paddingBottom: "clamp(2rem, 4vh, 3.5rem)",
        }}
      >
        <div className="hero-layout">
          {/* LEFT COLUMN: Narrative & Credentials */}
          <div className="hero-content-col">
            {/* Availability Status Pill */}
            <div className="hero-status-pill">
              <span className="hero-status-dot" aria-hidden="true" />
              <span>Available for Internships &amp; Research</span>
            </div>

            {/* Author Introduction Greeting */}
            <p className="hero-greeting">
              Hi, I'm <span className="hero-author-name">Sharath B</span>
            </p>

            {/* Primary Editorial Headline */}
            <h1 className="hero-headline">
              <span>Cybersecurity &amp;</span>
              <span className="hero-headline-accent">Software Engineer</span>
            </h1>

            {/* Role Tagline */}
            <p className="hero-tagline">
              Building secure systems, practical software, and applied AI/ML.
            </p>

            {/* Concise Authentic Introduction */}
            <p className="hero-bio">
              Computer Science &amp; Cyber Security undergraduate at{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                Chennai Institute of Technology
              </strong>
              . I focus on defensive security, threat modeling, and building
              resilient full-stack applications — reinforced by 450+ solved
              algorithmic challenges.
            </p>

            {/* Credibility & Focus Highlights Strip */}
            <div className="hero-cred-strip" aria-label="Key highlights">
              <div className="hero-cred-pill">
                <Shield size={13} color="var(--accent-cyan)" />
                <span>Defensive Security</span>
              </div>
              <div className="hero-cred-pill">
                <GraduationCap size={13} color="var(--accent-cyan)" />
                <span>CIT Chennai (8.5 CGPA)</span>
              </div>
              <div className="hero-cred-pill">
                <Code size={13} color="var(--accent-cyan)" />
                <span>450+ LeetCode Solved</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowDownRight size={15} />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="btn-secondary"
                title="Open verified resume PDF"
              >
                <FileText size={15} />
                <span>View Resume</span>
              </button>
            </div>

            {/* Connect & Social Links Row */}
            <div className="hero-social-row" aria-label="Social and contact links">
              <span className="hero-social-label">Connect:</span>

              <a
                href={`mailto:${personalInfo.social.email}`}
                className="hero-social-link"
                title="Send an email"
              >
                <Mail size={13} />
                <span>Email</span>
              </a>

              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="GitHub Profile"
              >
                <GithubIcon size={13} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={13} />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="LeetCode (450+ Solved)"
              >
                <LeetCodeIcon size={13} />
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Authentic Portrait Card Presentation */}
          <aside className="hero-portrait-col" aria-label="Author portrait">
            <div className="hero-portrait-card">
              <div className="hero-portrait-image-wrapper">
                <img
                  src={personalInfo.assets.profilePhoto}
                  alt="Sharath B — Cybersecurity & Software Engineer"
                  className="hero-portrait-image"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Integrated Card Caption / Identity Badge */}
              <div className="hero-portrait-caption">
                <div className="hero-portrait-caption-header">
                  <span className="hero-portrait-name">Sharath B</span>
                  <span className="hero-portrait-badge">CIT Chennai</span>
                </div>
                <p className="hero-portrait-detail">
                  B.E. Computer Science &amp; Engineering (Cyber Security)
                </p>
                <div className="hero-portrait-meta">
                  <MapPin size={11} color="var(--accent-cyan)" />
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ==============================================================
          GROUNDING FOOTER BAR (SLIM, CLEAN & RESTRAINED)
          ============================================================== */}
      <div className="hero-bottom-bar">
        <div className="container hero-bottom-container">
          <div className="hero-bottom-meta">
            <span className="hero-bottom-dot" aria-hidden="true" />
            <span>CHENNAI, INDIA</span>
            <span className="hero-bottom-sep" aria-hidden="true">/</span>
            <span>CIT CHENNAI CSE (CYBER SECURITY) · 2025–2029</span>
          </div>

          <a href="#about" className="hero-bottom-cue" title="Scroll to About section">
            <span>Explore background</span>
            <ArrowDownRight size={14} />
          </a>
        </div>
      </div>

      {/* Dedicated Scoped Styles for Hero Section */}
      <style>{`
        /* --- Grid & Layout --- */
        .hero-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.28fr) minmax(280px, 350px);
          gap: clamp(2.5rem, 5vw, 4.5rem);
          align-items: center;
          width: 100%;
        }

        .hero-content-col {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .hero-portrait-col {
          display: flex;
          justify-content: center;
          min-width: 0;
        }

        /* --- Status Pill --- */
        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.32rem 0.85rem;
          border-radius: 9999px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid var(--accent-emerald-border);
          width: fit-content;
          margin-bottom: 1.15rem;
          font-family: var(--font-sans);
          font-size: 0.8125rem;
          font-weight: 500;
          color: #34d399;
          letter-spacing: 0.01em;
        }

        .hero-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent-emerald);
          display: inline-block;
        }

        /* --- Typography Hierarchy --- */
        .hero-greeting {
          font-family: var(--font-sans);
          font-size: clamp(0.95rem, 1.2vw, 1.0625rem);
          color: var(--text-secondary);
          margin-bottom: 0.35rem;
          letter-spacing: -0.01em;
        }

        .hero-author-name {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-headline {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw + 0.5rem, 4.25rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1.1;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          overflow-wrap: break-word;
        }

        .hero-headline-accent {
          display: block;
          color: #ffffff;
        }

        .hero-tagline {
          font-family: var(--font-sans);
          font-size: clamp(1rem, 1.35vw, 1.1875rem);
          font-weight: 500;
          color: var(--accent-cyan-light);
          line-height: 1.45;
          margin-bottom: 1.15rem;
          max-width: 580px;
        }

        .hero-bio {
          font-family: var(--font-sans);
          font-size: clamp(0.9375rem, 1vw + 0.6rem, 1.05rem);
          color: var(--text-secondary);
          line-height: 1.68;
          max-width: 580px;
          margin-bottom: 1.5rem;
        }

        /* --- Highlights / Credibility Strip --- */
        .hero-cred-strip {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.75rem;
        }

        .hero-cred-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.32rem 0.7rem;
          border-radius: 6px;
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-default);
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.8125rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: border-color 0.15s ease;
        }

        .hero-cred-pill:hover {
          border-color: var(--border-strong);
          color: var(--text-primary);
        }

        /* --- CTA Group --- */
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
          margin-bottom: 1.75rem;
        }

        /* --- Social Links Row --- */
        .hero-social-row {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          flex-wrap: wrap;
        }

        .hero-social-label {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-muted);
          margin-right: 0.2rem;
        }

        .hero-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-default);
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.78125rem;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-social-link:hover {
          background: var(--accent-cyan-subtle);
          border-color: var(--accent-cyan-border);
          color: var(--text-primary);
          transform: translateY(-1px);
        }

        /* --- Desktop Portrait Card --- */
        .hero-portrait-card {
          width: 100%;
          max-width: 350px;
          background: var(--bg-surface);
          border: 1px solid var(--border-default);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .hero-portrait-card:hover {
          border-color: var(--border-strong);
        }

        .hero-portrait-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          background: #0f1422;
          overflow: hidden;
        }

        .hero-portrait-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          display: block;
          filter: contrast(102%) brightness(99%);
        }

        .hero-portrait-caption {
          padding: 1.1rem 1.25rem;
          border-top: 1px solid var(--border-subtle);
          background: var(--bg-surface-elevated);
        }

        .hero-portrait-caption-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
        }

        .hero-portrait-name {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .hero-portrait-badge {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 500;
          color: var(--accent-cyan-light);
          background: var(--accent-cyan-subtle);
          border: 1px solid var(--accent-cyan-border);
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
          letter-spacing: 0.04em;
        }

        .hero-portrait-detail {
          font-family: var(--font-sans);
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 0.5rem;
        }

        .hero-portrait-meta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.71875rem;
          color: var(--text-muted);
          letter-spacing: 0.03em;
        }

        /* --- Slim Grounding Footer Bar --- */
        .hero-bottom-bar {
          position: relative;
          z-index: 20;
          border-top: 1px solid var(--bg-hairline);
          background: rgba(12, 15, 23, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding-top: 0.85rem;
          padding-bottom: 0.95rem;
        }

        .hero-bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .hero-bottom-meta {
          font-family: var(--font-mono);
          font-size: 0.71875rem;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .hero-bottom-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-cyan);
          display: inline-block;
        }

        .hero-bottom-sep {
          opacity: 0.35;
        }

        .hero-bottom-cue {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-sans);
          font-size: 0.8125rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .hero-bottom-cue:hover {
          color: var(--text-primary);
        }

        /* --- Tablet & Mobile Responsiveness (< 960px) --- */
        @media (max-width: 960px) {
          .hero-section {
            min-height: auto !important;
          }

          .hero-container {
            padding-top: clamp(5.25rem, 8vh, 6.5rem) !important;
            padding-bottom: 2.5rem !important;
          }

          .hero-layout {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          /* Place the portrait card at the top as an intentional identity chip */
          .hero-portrait-col {
            order: -1;
            width: 100%;
            justify-content: flex-start;
          }

          .hero-portrait-card {
            width: fit-content;
            max-width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.95rem;
            padding: 0.7rem 1.1rem 0.7rem 0.7rem;
            border-radius: 14px;
            box-shadow: var(--shadow-sm);
          }

          .hero-portrait-image-wrapper {
            width: 76px;
            height: 95px;
            flex-shrink: 0;
            border-radius: 10px;
            aspect-ratio: auto;
          }

          .hero-portrait-caption {
            padding: 0;
            border-top: none;
            background: transparent;
          }

          .hero-portrait-caption-header {
            margin-bottom: 0.15rem;
            gap: 0.45rem;
          }

          .hero-portrait-name {
            font-size: 1rem;
          }

          .hero-portrait-detail {
            font-size: 0.78125rem;
            max-width: 230px;
            margin-bottom: 0.3rem;
          }

          .hero-portrait-meta {
            font-size: 0.7rem;
          }
        }

        /* --- Mobile Narrow Devices (<= 640px) --- */
        @media (max-width: 640px) {
          .hero-bottom-bar {
            display: none;
          }

          .hero-headline {
            font-size: clamp(1.9rem, 7.5vw, 2.75rem);
            line-height: 1.15;
          }

          .hero-cta-group {
            width: 100%;
          }

          .hero-cta-group > a,
          .hero-cta-group > button {
            flex: 1 1 140px;
            justify-content: center;
          }
        }

        /* --- Extremely Narrow Phones (<= 360px, e.g. iPhone SE 1st gen) --- */
        @media (max-width: 360px) {
          .hero-portrait-image-wrapper {
            width: 64px;
            height: 80px;
          }

          .hero-portrait-card {
            padding: 0.55rem 0.75rem 0.55rem 0.55rem;
            gap: 0.75rem;
          }

          .hero-portrait-detail {
            max-width: 175px;
            font-size: 0.71875rem;
          }

          .hero-headline {
            font-size: 1.75rem;
          }

          .hero-cred-pill {
            font-size: 0.75rem;
            padding: 0.28rem 0.55rem;
          }
        }
      `}</style>
    </section>
  );
};
