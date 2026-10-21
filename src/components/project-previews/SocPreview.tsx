import React, { useState } from "react";
import { ShieldAlert, ShieldCheck, Terminal, AlertTriangle, CheckCircle } from "lucide-react";

interface LogEvent {
  id: string;
  timestamp: string;
  source: string;
  ip: string;
  event: string;
  severity: "HIGH" | "MEDIUM" | "INFO";
}

const rawLogs: LogEvent[] = [
  { id: "1", timestamp: "14:22:01", source: "sshd[4102]", ip: "198.51.100.44", event: "Failed password for invalid user admin", severity: "HIGH" },
  { id: "2", timestamp: "14:22:03", source: "sshd[4105]", ip: "198.51.100.44", event: "Failed password for invalid user root", severity: "HIGH" },
  { id: "3", timestamp: "14:22:07", source: "sshd[4110]", ip: "198.51.100.44", event: "Failed password for invalid user postgres", severity: "HIGH" },
  { id: "4", timestamp: "14:22:15", source: "iptables", ip: "198.51.100.44", event: "SYN packet surge port 22 (Threshold: 50/min exceeded)", severity: "HIGH" },
  { id: "5", timestamp: "14:22:20", source: "suricata", ip: "198.51.100.44", event: "ET SCAN Potential SSH Brute-force Inbound", severity: "HIGH" },
];

export const SocPreview: React.FC = () => {
  const [isolated, setIsolated] = useState(false);
  const [ticketCreated, setTicketCreated] = useState(false);

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
        }}
      >
        <span style={{ letterSpacing: "0.06em" }}>SYS // SOC_SIEM_CORRELATOR</span>
        <span style={{ color: isolated ? "var(--accent-emerald)" : "var(--accent-cyan-light)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: isolated ? "var(--accent-emerald)" : "var(--accent-cyan-light)",
              display: "inline-block",
            }}
          />
          {isolated ? "THREAT MITIGATED & ISOLATED" : "TIER-2 ACTIVE ALERT"}
        </span>
      </div>

      {/* Alert Banner */}
      <div
        style={{
          padding: "0.65rem 0.85rem",
          background: isolated ? "rgba(16, 185, 129, 0.08)" : "rgba(6, 182, 212, 0.08)",
          border: isolated ? "1px solid rgba(16, 185, 129, 0.3)" : "1px solid rgba(6, 182, 212, 0.3)",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.71875rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {isolated ? <ShieldCheck size={14} style={{ color: "var(--accent-emerald)" }} /> : <ShieldAlert size={14} style={{ color: "var(--accent-cyan-light)" }} />}
          <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
            {isolated ? "FIREWALL RULE ENFORCED: IP 198.51.100.44 BLOCKED" : "BRUTE-FORCE CORRELATION DETECTED: IP 198.51.100.44"}
          </span>
        </div>
        <span style={{ color: isolated ? "var(--accent-emerald)" : "var(--accent-cyan-light)", fontSize: "0.6875rem" }}>
          {isolated ? "RESOLVED" : "ACTION REQUIRED"}
        </span>
      </div>

      {/* Log Feed */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
        <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
          CORRELATED LOG STREAM (/var/log/auth.log):
        </div>
        <div
          style={{
            background: "var(--bg-canvas)",
            border: "1px solid var(--border-default)",
            borderRadius: "5px",
            padding: "0.65rem",
            fontSize: "0.65625rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
            maxHeight: "130px",
            overflowY: "auto",
          }}
        >
          {rawLogs.map((log) => (
            <div key={log.id} style={{ display: "flex", gap: "0.5rem", color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>{log.timestamp}</span>
              <span style={{ color: "var(--accent-cyan)", flexShrink: 0 }}>[{log.source}]</span>
              <span style={{ color: "var(--text-primary)", wordBreak: "break-all" }}>{log.event}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Incident Triage Controls */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={() => setIsolated(!isolated)}
          style={{
            background: isolated ? "var(--accent-emerald)" : "var(--accent-cyan)",
            color: "#000",
            border: "none",
            borderRadius: "4px",
            padding: "0.4rem 0.8rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.71875rem",
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
          }}
        >
          <Terminal size={12} />
          {isolated ? "Remove iptables Block" : "Deploy iptables Isolation Rule"}
        </button>

        <button
          type="button"
          onClick={() => setTicketCreated(!ticketCreated)}
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid var(--border-subtle)",
            color: ticketCreated ? "var(--accent-emerald)" : "var(--text-secondary)",
            borderRadius: "4px",
            padding: "0.4rem 0.8rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.71875rem",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
          }}
        >
          {ticketCreated ? <CheckCircle size={12} /> : <AlertTriangle size={12} />}
          {ticketCreated ? "Ticket #SEC-809 Dispatched" : "Generate Tier-2 Escalation Ticket"}
        </button>
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
        }}
      >
        <span>SOC Practical Triage Simulation · Elevance Training</span>
        <span>Ubuntu / Syslog / Suricata</span>
      </div>
    </div>
  );
};
