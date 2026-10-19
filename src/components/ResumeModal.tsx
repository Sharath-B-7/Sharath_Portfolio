import React, { useEffect, useRef } from "react";
import { Download, ExternalLink, X, FileText, ShieldCheck } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Handle native cancel (Esc key)
  const handleCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };

  // Light dismiss: Click on backdrop closes dialog
  const handleClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (!isInDialog) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleClick}
      aria-labelledby="resume-modal-title"
      style={{
        width: "92vw",
        maxWidth: "960px",
        height: "88vh",
        background: "var(--bg-surface-elevated)",
        border: "1px solid var(--border-default)",
        borderRadius: "8px",
        boxShadow: "0 25px 60px rgba(0, 0, 0, 0.95)",
        overflow: "hidden",
        display: isOpen ? "flex" : "none",
        flexDirection: "column",
      }}
    >
      {/* Modal Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-subtle)",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              padding: "0.4rem",
              border: "1px solid var(--border-subtle)",
              borderRadius: "4px",
              color: "var(--accent-cyan)",
              display: "flex",
              background: "var(--accent-cyan-subtle)",
            }}
          >
            <FileText size={18} />
          </div>
          <div>
            <h2
              id="resume-modal-title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.0625rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: 1.2,
              }}
            >
              {personalInfo.name} — Curriculum Vitae
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.71875rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
                marginTop: "0.15rem",
              }}
            >
              <ShieldCheck size={13} color="var(--accent-emerald)" />
              <span>Official Resume PDF · CIT Chennai</span>
            </div>
          </div>
        </div>

        {/* Modal Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <a
            href={personalInfo.assets.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial-secondary"
            style={{ padding: "0.4rem 0.8rem", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}
            title="Open PDF in new browser tab"
          >
            <ExternalLink size={13} />
            <span>NEW TAB</span>
          </a>
          <a
            href={personalInfo.assets.resumePdf}
            download="Sharath_B_Resume.pdf"
            className="btn-editorial-primary"
            style={{ padding: "0.4rem 0.8rem", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}
            title="Download PDF"
          >
            <Download size={13} />
            <span>DOWNLOAD</span>
          </a>
          <button
            onClick={onClose}
            aria-label="Close resume viewer"
            style={{
              padding: "0.4rem",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid var(--border-default)",
              borderRadius: "4px",
              color: "var(--text-secondary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.borderColor = "var(--border-strong)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.borderColor = "var(--border-default)";
            }}
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Embedded PDF Viewer */}
      <div
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          background: "var(--bg-canvas)",
          position: "relative",
        }}
      >
        <iframe
          src={`${personalInfo.assets.resumePdf}#toolbar=1&navpanes=0`}
          title={`${personalInfo.name} Resume`}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
          }}
        />
      </div>
    </dialog>
  );
};
