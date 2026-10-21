import React, { useState } from "react";
import { Lock, ShieldCheck, Key, Link as LinkIcon, RefreshCw } from "lucide-react";

interface LedgerBlock {
  height: number;
  timestamp: string;
  mutation: string;
  author: string;
  prevHash: string;
  currHash: string;
  valid: boolean;
}

const initialBlocks: LedgerBlock[] = [
  {
    height: 1426,
    timestamp: "10:14:02 UTC",
    mutation: "GRADE_SUBMIT: Course CS401 -> Student CIT89 (Score: 94)",
    author: "faculty.dept_cs@cit.edu",
    prevHash: "7f83b1657ff1...44a9",
    currHash: "b391a0c82de9...18fa",
    valid: true,
  },
  {
    height: 1427,
    timestamp: "10:15:33 UTC",
    mutation: "GRADE_SUBMIT: Course CS402 -> Student CIT90 (Score: 88)",
    author: "faculty.dept_cs@cit.edu",
    prevHash: "b391a0c82de9...18fa",
    currHash: "0a41bc90ff44...901e",
    valid: true,
  },
  {
    height: 1428,
    timestamp: "10:18:49 UTC",
    mutation: "AUDIT_VERIFY: Department End-of-Term Snapshot Finalized",
    author: "admin.controller@cit.edu",
    prevHash: "0a41bc90ff44...901e",
    currHash: "6c2e40993ba1...f802",
    valid: true,
  },
];

export const AetherGradePreview: React.FC = () => {
  const [blocks, setBlocks] = useState<LedgerBlock[]>(initialBlocks);
  const [tampered, setTampered] = useState(false);
  const [activeRole, setActiveRole] = useState<"FACULTY" | "STUDENT" | "ADMIN">("FACULTY");

  const toggleTamper = () => {
    if (!tampered) {
      // Simulate single-byte edit on block 1427
      const updated = [...blocks];
      updated[1] = {
        ...updated[1],
        mutation: "GRADE_MODIFIED [TAMPER]: Score altered from 88 to 99",
        currHash: "INVALID_HASH_CORRUPTED",
        valid: false,
      };
      updated[2] = {
        ...updated[2],
        prevHash: "INVALID_HASH_CORRUPTED",
        valid: false,
      };
      setBlocks(updated);
      setTampered(true);
    } else {
      setBlocks(initialBlocks);
      setTampered(false);
    }
  };

  return (
    <div
      style={{
        border: "1px solid var(--border-default)",
        background: "var(--bg-surface-elevated)",
        borderRadius: "8px",
        padding: "clamp(1.15rem, 2vw, 1.5rem)",
        fontFamily: "var(--font-mono)",
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
      }}
    >
      {/* Telemetry Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "0.75rem",
          borderBottom: "1px solid var(--border-subtle)",
          fontSize: "0.71875rem",
          color: "var(--text-muted)",
          flexWrap: "wrap",
          gap: "0.4rem",
        }}
      >
        <span style={{ letterSpacing: "0.04em" }}>AETHERGRADE · CRYPTOGRAPHIC LEDGER</span>
        <span style={{ color: tampered ? "var(--accent-terracotta)" : "var(--accent-emerald)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: tampered ? "var(--accent-terracotta)" : "var(--accent-emerald)",
              display: "inline-block",
            }}
          />
          {tampered ? "TAMPER DETECTED" : "LEDGER INTEGRITY VERIFIED"}
        </span>
      </div>

      {/* Role Access Test Bar */}
      <div>
        <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)", marginBottom: "0.4rem", letterSpacing: "0.05em" }}>
          TEST RBAC PRINCIPAL (JWT AUTH):
        </div>
        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
          {(["FACULTY", "STUDENT", "ADMIN"] as const).map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setActiveRole(role)}
              style={{
                background: activeRole === role ? "var(--accent-terracotta-subtle)" : "var(--bg-surface-subtle)",
                border: activeRole === role ? "1px solid var(--accent-terracotta-border)" : "1px solid var(--border-subtle)",
                borderRadius: "4px",
                padding: "0.3rem 0.6rem",
                color: activeRole === role ? "var(--text-primary)" : "var(--text-secondary)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.71875rem",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Permissions for selected role */}
      <div
        style={{
          padding: "0.55rem 0.75rem",
          background: "var(--bg-surface-subtle)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.71875rem",
          flexWrap: "wrap",
          gap: "0.35rem",
        }}
      >
        <span style={{ color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <Key size={12} style={{ color: "var(--accent-terracotta)" }} />
          ROLE: {activeRole}
        </span>
        <span style={{ color: "var(--text-muted)" }}>
          {activeRole === "ADMIN" && "Full Ledger Audit & User Management"}
          {activeRole === "FACULTY" && "Grade Mutation & Ledger Appending"}
          {activeRole === "STUDENT" && "Read-Only Transcript Verification"}
        </span>
      </div>

      {/* Cryptographic Ledger Block View */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.35rem" }}>
          <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
            SHA-256 HASH-CHAIN BLOCKS:
          </span>
          <button
            type="button"
            onClick={toggleTamper}
            style={{
              background: tampered ? "var(--accent-emerald)" : "var(--accent-terracotta-subtle)",
              border: tampered ? "1px solid var(--accent-emerald-border)" : "1px solid var(--accent-terracotta-border)",
              color: tampered ? "#0E100F" : "var(--accent-terracotta)",
              fontWeight: tampered ? 600 : 500,
              fontSize: "0.65625rem",
              padding: "0.2rem 0.5rem",
              borderRadius: "4px",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <RefreshCw size={10} />
            {tampered ? "Reset Clean Ledger" : "Simulate DB Tampering"}
          </button>
        </div>

        {blocks.map((block) => (
          <div
            key={block.height}
            style={{
              border: block.valid ? "1px solid var(--border-default)" : "1px solid var(--accent-terracotta)",
              background: block.valid ? "var(--bg-surface-subtle)" : "var(--accent-terracotta-subtle)",
              borderRadius: "5px",
              padding: "0.6rem 0.75rem",
              fontSize: "0.6875rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.3rem" }}>
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                BLOCK #{block.height} · {block.timestamp}
              </span>
              <span
                style={{
                  color: block.valid ? "var(--accent-emerald)" : "var(--accent-terracotta)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  fontWeight: 600,
                }}
              >
                {block.valid ? <ShieldCheck size={11} /> : <Lock size={11} />}
                {block.valid ? "VALID" : "CHAIN BROKEN"}
              </span>
            </div>

            <div style={{ color: "var(--text-secondary)", wordBreak: "break-all" }}>
              {block.mutation}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.625rem", paddingTop: "0.2rem", flexWrap: "wrap" }}>
              <LinkIcon size={10} />
              <span>PREV: {block.prevHash}</span>
              <span>→</span>
              <span>CURR: {block.currHash}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid var(--border-subtle)",
          paddingTop: "0.65rem",
          fontSize: "0.65625rem",
          color: "var(--text-muted)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.35rem",
        }}
      >
        <span>Java SE 21 · Cryptographic Tamper-Evident Ledger</span>
        <span>SHA-256 / AES-256 / MySQL</span>
      </div>
    </div>
  );
};
