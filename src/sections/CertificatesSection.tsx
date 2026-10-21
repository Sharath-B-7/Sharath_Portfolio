import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Maximize2,
  FileText,
  Award,
  ShieldCheck,
  X,
  Download,
} from "lucide-react";
import { certificationsData } from "../data/certifications";
import type { CertificationItem } from "../data/certifications";

export const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // Manage modal open / close
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedCert) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [selectedCert]);

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  const handleDialogCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleCloseModal();
  };

  // Light dismiss: click outside modal content
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (!isInDialog) {
      handleCloseModal();
    }
  };

  // Duplicate items within each group to ensure full seamless coverage across all viewport widths
  const baseCertificates = certificationsData;
  const groupItems = [...baseCertificates, ...baseCertificates];

  return (
    <section
      id="certificates"
      className="editorial-section"
      style={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="container" style={{ marginBottom: "2.5rem" }}>
        {/* Section Header */}
        <div>
          <div className="section-label">Verified Documents &amp; Accreditations</div>
          <h2 className="section-heading-editorial">
            Official Certificates &amp; Accreditations
          </h2>
          <p className="section-subheading-editorial">
            Continuously moving showcase of verified technical credentials in cloud architecture, networking fundamentals, Python development, multimodal AI, and defensive security operations.
          </p>
        </div>
      </div>

      {/* Continuously Moving Horizontal Carousel Container */}
      <div
        className="certificates-marquee-container"
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          padding: "1rem 0 2rem",
        }}
      >
        {/* Left Edge Architectural Gradient Fade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "clamp(32px, 8vw, 120px)",
            background: "linear-gradient(to right, var(--bg-canvas), transparent)",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />

        {/* Right Edge Architectural Gradient Fade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "clamp(32px, 8vw, 120px)",
            background: "linear-gradient(to left, var(--bg-canvas), transparent)",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />

        {/* Animated Marquee Track */}
        <div
          className="certificates-marquee-track"
          style={{
            display: "flex",
            width: "max-content",
            willChange: "transform",
          }}
        >
          {/* Group 1 (Primary Set) */}
          <div className="certificates-marquee-group">
            {groupItems.map((cert, index) => (
              <CertificateCard
                key={`group1-${cert.id}-${index}`}
                cert={cert}
                onInspect={() => setSelectedCert(cert)}
              />
            ))}
          </div>

          {/* Group 2 (Exact Duplicate for Seamless Infinite Loop) */}
          <div className="certificates-marquee-group" aria-hidden="true">
            {groupItems.map((cert, index) => (
              <CertificateCard
                key={`group2-${cert.id}-${index}`}
                cert={cert}
                onInspect={() => setSelectedCert(cert)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enlarged High-Resolution Certificate Modal */}
      <dialog
        ref={dialogRef}
        onCancel={handleDialogCancel}
        onClick={handleDialogClick}
        aria-labelledby="cert-modal-title"
        style={{
          width: "min(94vw, 920px)",
          maxHeight: "92vh",
          background: "var(--bg-surface-elevated)",
          border: "1px solid var(--border-default)",
          borderRadius: "10px",
          boxShadow: "var(--shadow-lg)",
          overflow: "hidden",
          display: selectedCert ? "flex" : "none",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        {selectedCert && (
          <>
            {/* Modal Header Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "clamp(0.75rem, 2vw, 1rem) clamp(0.85rem, 2.5vw, 1.5rem)",
                background: "var(--bg-surface)",
                borderBottom: "1px solid var(--border-subtle)",
                flexShrink: 0,
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", minWidth: 0, flex: "1 1 auto" }}>
                <div
                  style={{
                    padding: "0.4rem",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "4px",
                    color: "var(--accent-terracotta)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--accent-terracotta-subtle)",
                    flexShrink: 0,
                  }}
                >
                  <Award size={18} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h3
                    id="cert-modal-title"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(0.95rem, 2vw, 1.125rem)",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.25,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {selectedCert.title}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.6875rem",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                      marginTop: "0.15rem",
                    }}
                  >
                    <ShieldCheck size={12} color="var(--accent-emerald)" />
                    <span>{selectedCert.issuer} · Verified Original Asset</span>
                  </div>
                </div>
              </div>

              {/* Modal Controls */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <a
                  href={selectedCert.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-secondary"
                  style={{
                    padding: "0.4rem 0.75rem",
                    fontSize: "0.71875rem",
                    fontFamily: "var(--font-mono)",
                    minHeight: "36px",
                  }}
                  title="Open original file directly in a new tab"
                >
                  <ExternalLink size={13} />
                  <span>OPEN ORIGINAL</span>
                </a>
                <a
                  href={selectedCert.filePath}
                  download={selectedCert.filename}
                  className="btn-editorial-primary"
                  style={{
                    padding: "0.4rem 0.75rem",
                    fontSize: "0.71875rem",
                    fontFamily: "var(--font-mono)",
                    minHeight: "36px",
                  }}
                  title="Download certificate"
                >
                  <Download size={13} />
                  <span>DOWNLOAD</span>
                </a>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  aria-label="Close certificate preview"
                  style={{
                    background: "transparent",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                    cursor: "pointer",
                    padding: "0.45rem",
                    borderRadius: "4px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "36px",
                    minHeight: "36px",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                  }}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Modal Body: Uncropped High-Resolution Certificate View */}
            <div
              style={{
                flex: 1,
                padding: "clamp(1rem, 2.5vw, 1.75rem)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--bg-canvas)",
                overflowY: "auto",
              }}
            >
              {selectedCert.format === "image" ? (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={selectedCert.filePath}
                    alt={selectedCert.title}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "68vh",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      borderRadius: "6px",
                      boxShadow: "var(--shadow-md)",
                      border: "1px solid var(--border-default)",
                      backgroundColor: "#0d0f0e",
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    padding: "3rem 2rem",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <FileText size={48} color="var(--accent-terracotta)" />
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    {selectedCert.filename}
                  </div>
                  <a
                    href={selectedCert.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-primary"
                  >
                    <ExternalLink size={14} />
                    <span>View PDF Document</span>
                  </a>
                </div>
              )}

              {/* Filename & Issuer Caption */}
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  paddingTop: "0.75rem",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.71875rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Source Asset: public/certificates/{selectedCert.filename}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.71875rem",
                    color: "var(--accent-terracotta)",
                  }}
                >
                  {selectedCert.category}
                </span>
              </div>
            </div>
          </>
        )}
      </dialog>

      {/* Section-Scoped Styles for Marquee Animation & Responsive Layout */}
      <style>{`
        /* Continuous Marquee Animation */
        @keyframes marqueeContinuous {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .certificates-marquee-track {
          animation: marqueeContinuous 42s linear infinite;
        }

        /* Pause on Hover */
        .certificates-marquee-container:hover .certificates-marquee-track,
        .certificates-marquee-track:hover {
          animation-play-state: paused;
        }

        .certificates-marquee-group {
          display: flex;
          align-items: stretch;
          gap: 1.5rem;
          padding-right: 1.5rem;
          flex-shrink: 0;
        }

        /* Certificate Card Interactive Styling */
        .cert-carousel-card {
          width: clamp(290px, 25vw, 360px);
          flex-shrink: 0;
          background: var(--bg-surface);
          border: 1px solid var(--border-default);
          border-radius: 10px;
          padding: 1.15rem;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          box-shadow: var(--shadow-sm);
          transition-property: transform, border-color, background-color, box-shadow;
          transition-duration: 0.22s, 450ms, 450ms, 450ms;
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1), ease-in-out, ease-in-out, ease-in-out;
          cursor: pointer;
        }

        .cert-carousel-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-terracotta-border);
          box-shadow: var(--shadow-md);
          background: var(--bg-surface-elevated);
        }

        .cert-carousel-card:focus-visible {
          outline: 2px solid var(--accent-terracotta);
          outline-offset: 2px;
        }

        /* Image Preview Box */
        .cert-img-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 11;
          background: var(--bg-canvas);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.9rem;
          padding: 0.4rem;
        }

        .cert-img-container img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 4px;
          display: block;
        }

        .cert-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(23, 26, 25, 0.65);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          opacity: 0;
          transition: opacity 0.2s ease;
          color: #ffffff;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          border-radius: 5px;
        }

        .cert-carousel-card:hover .cert-img-overlay {
          opacity: 1;
        }

        /* Accessibility: Prefers-Reduced-Motion */
        @media (prefers-reduced-motion: reduce) {
          .certificates-marquee-track {
            animation: none !important;
          }
          .certificates-marquee-container {
            overflow-x: auto !important;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
          .cert-carousel-card {
            scroll-snap-align: start;
          }
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .cert-carousel-card {
            width: clamp(260px, 78vw, 310px);
            padding: 1rem;
          }
          .certificates-marquee-group {
            gap: 1rem;
            padding-right: 1rem;
          }
          .certificates-marquee-track {
            animation-duration: 34s;
          }
        }
      `}</style>
    </section>
  );
};

interface CertificateCardProps {
  cert: CertificationItem;
  onInspect: () => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ cert, onInspect }) => {
  const isImage = cert.format === "image";

  return (
    <article
      className="cert-carousel-card"
      tabIndex={0}
      role="button"
      aria-label={`View ${cert.title} certificate`}
      onClick={onInspect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onInspect();
        }
      }}
    >
      <div>
        {/* Certificate Preview Image Box */}
        <div className="cert-img-container">
          {isImage ? (
            <img
              src={cert.filePath}
              alt={cert.title}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                color: "var(--accent-terracotta)",
              }}
            >
              <FileText size={36} />
              <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>
                PDF DOCUMENT
              </span>
            </div>
          )}

          {/* Hover Overlay Hint */}
          <div className="cert-img-overlay">
            <Maximize2 size={14} />
            <span>ENLARGE</span>
          </div>
        </div>

        {/* Issuer and Category Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.45rem",
            gap: "0.4rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.71875rem",
              color: "var(--accent-terracotta)",
              letterSpacing: "0.02em",
              fontWeight: 600,
            }}
          >
            {cert.issuer}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.625rem",
              color: "var(--text-muted)",
              background: "var(--bg-surface-subtle)",
              border: "1px solid var(--border-subtle)",
              padding: "0.15rem 0.45rem",
              borderRadius: "4px",
              textTransform: "uppercase",
            }}
          >
            {cert.filename.split(".").pop()}
          </span>
        </div>

        {/* Certificate Title */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.0625rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            lineHeight: 1.32,
            marginBottom: "0.45rem",
          }}
        >
          {cert.title}
        </h3>

        {/* Description snippet */}
        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--text-secondary)",
            lineHeight: 1.5,
            marginBottom: "0.9rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {cert.description}
        </p>
      </div>

      {/* Card Footer: Filename Monospace Tag + Direct Link Button */}
      <div
        style={{
          borderTop: "1px solid var(--border-subtle)",
          paddingTop: "0.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65625rem",
            color: "var(--text-muted)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "160px",
          }}
          title={cert.filename}
        >
          {cert.filename}
        </div>

        <a
          href={cert.filePath}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-editorial-secondary"
          style={{
            padding: "0.28rem 0.65rem",
            fontSize: "0.6875rem",
            fontFamily: "var(--font-mono)",
            minHeight: "30px",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            flexShrink: 0,
          }}
          title={`Open original ${cert.filename} in a new tab`}
        >
          <span>VIEW</span>
          <ArrowUpRight size={11} />
        </a>
      </div>
    </article>
  );
};
