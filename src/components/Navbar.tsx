import React, { useState, useEffect, useRef } from "react";
import {
  FolderGit2,
  Cpu,
  User,
  GraduationCap,
  Trophy,
  FileText,
  Mail,
  ChevronDown,
  Terminal,
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [matrixOpen, setMatrixOpen] = useState(
    typeof window !== "undefined" && window.location.search.includes("menu=open")
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState<string>("");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const matrixRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Sync initial theme from documentElement on mount
  useEffect(() => {
    const active = (document.documentElement.getAttribute("data-theme") as "dark" | "light") || "dark";
    setTheme(active);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem("theme-preference", next);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute("content", next === "light" ? "#f8fafc" : "#0c0f17");
      }
    } catch (e) {}
  };

  // Live real-time monospace clock matching reference screenshot
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTimeString(`${hours}:${minutes}:${seconds}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Click outside and Escape key handler to close the expandable matrix
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        matrixRef.current &&
        !matrixRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setMatrixOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMatrixOpen(false);
      }
    };

    if (matrixOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [matrixOpen]);

  const [activeSection, setActiveSection] = useState<string>("hero");

  // Track active section via IntersectionObserver for smooth scrollspy
  useEffect(() => {
    const sections = ["hero", "about", "projects", "skills", "education", "achievements", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const directoryHubs = [
    {
      id: "projects",
      name: "Projects",
      desc: "Selected software & security builds",
      href: "#projects",
      icon: <FolderGit2 size={16} color="var(--accent-cyan)" />,
    },
    {
      id: "skills",
      name: "Skills",
      desc: "Technical capabilities & core toolchains",
      href: "#skills",
      icon: <Cpu size={16} color="var(--accent-cyan)" />,
    },
    {
      id: "about",
      name: "About",
      desc: "Approach, background & engineering thesis",
      href: "#about",
      icon: <User size={16} color="var(--accent-cyan)" />,
    },
    {
      id: "education",
      name: "Education",
      desc: "CIT Chennai (B.E. CSE Cyber) & scholastic record",
      href: "#education",
      icon: <GraduationCap size={16} color="var(--accent-cyan)" />,
    },
    {
      id: "achievements",
      name: "Achievements",
      desc: "450+ LeetCode problems & credentials",
      href: "#achievements",
      icon: <Trophy size={16} color="var(--accent-cyan)" />,
    },
    {
      id: "resume",
      name: "Resume",
      desc: "View or download official PDF CV",
      href: "#",
      isAction: true,
      onClick: () => {
        setMatrixOpen(false);
        onOpenResume();
      },
      icon: <FileText size={16} color="var(--accent-cyan)" />,
    },
    {
      id: "contact",
      name: "Contact",
      desc: "Direct email inquiry & professional network",
      href: "#contact",
      icon: <Mail size={16} color="var(--accent-cyan)" />,
    },
  ];

  return (
    <>
      {/* Top Floating Header Row */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 120,
          padding: "1.25rem clamp(1.25rem, 4vw, 3.5rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pointerEvents: "none",
        }}
      >
        {/* Left: Monospace Real-Time Digital Clock */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8125rem",
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            pointerEvents: "auto",
          }}
          className="header-clock"
        >
          <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>{timeString || "11:00:00"}</span>
        </div>

        {/* Center: Floating Rounded Dark Pill Navigation */}
        <nav
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            background: "var(--nav-pill-bg)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid var(--border-default)",
            borderRadius: "9999px",
            padding: "0.32rem 0.55rem",
            boxShadow: "var(--shadow-md)",
          }}
          className="nav-center-pill"
        >
          {/* Home */}
          <a
            href="#hero"
            style={{
              textDecoration: "none",
              color: activeSection === "hero" ? "var(--accent-cyan)" : "var(--text-secondary)",
              background: activeSection === "hero" ? "var(--bg-surface-hover)" : "transparent",
              fontSize: "0.8125rem",
              fontWeight: 500,
              padding: "0.45rem 1rem",
              borderRadius: "9999px",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              if (activeSection !== "hero") {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "var(--bg-surface-hover)";
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== "hero") {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }
            }}
          >
            Home
          </a>

          {/* Interactive Explore Directory Button with Dropdown Trigger */}
          <button
            ref={buttonRef}
            onClick={() => setMatrixOpen(!matrixOpen)}
            aria-expanded={matrixOpen}
            aria-label="Toggle directory matrix menu"
            style={{
              background: matrixOpen ? "var(--accent-cyan-subtle)" : "var(--bg-surface-subtle)",
              border: matrixOpen ? "1px solid var(--accent-cyan-border)" : "1px solid var(--border-default)",
              color: "var(--text-primary)",
              fontSize: "0.78125rem",
              fontWeight: 600,
              fontFamily: "var(--font-sans)",
              padding: "0.42rem 0.95rem",
              borderRadius: "9999px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              letterSpacing: "0.02em",
              transition: "all 0.18s ease",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--accent-cyan)",
                display: "inline-block",
              }}
            />
            <Terminal size={12} color="var(--accent-cyan)" />
            <span>DIRECTORY</span>
            <ChevronDown
              size={13}
              style={{
                transition: "transform 0.2s ease",
                transform: matrixOpen ? "rotate(180deg)" : "rotate(0deg)",
                opacity: 0.7,
              }}
            />
          </button>

          {/* Contact */}
          <a
            href="#contact"
            style={{
              textDecoration: "none",
              color: activeSection === "contact" ? "var(--accent-cyan)" : "var(--text-secondary)",
              background: activeSection === "contact" ? "var(--bg-surface-hover)" : "transparent",
              fontSize: "0.8125rem",
              fontWeight: 500,
              padding: "0.45rem 1rem",
              borderRadius: "9999px",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              if (activeSection !== "contact") {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "var(--bg-surface-hover)";
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== "contact") {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }
            }}
          >
            Contact
          </a>
        </nav>

        {/* Right: Academic Status Badge, Desktop/Mobile Theme Toggle & Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", pointerEvents: "auto" }}>
          {/* Theme Toggle Button - Desktop */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-default)",
              borderRadius: "9999px",
              padding: "0.38rem 0.75rem",
              color: "var(--text-primary)",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              boxShadow: "var(--shadow-sm)",
              transition: "all 0.18s ease",
            }}
            className="theme-toggle-desktop"
          >
            {theme === "dark" ? (
              <>
                <Sun size={12} color="var(--accent-cyan)" />
                <span>LIGHT</span>
              </>
            ) : (
              <>
                <Moon size={12} color="var(--accent-cyan)" />
                <span>DARK</span>
              </>
            )}
          </button>

          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              color: "var(--text-muted)",
              border: "1px solid var(--border-subtle)",
              padding: "0.35rem 0.75rem",
              borderRadius: "9999px",
              background: "var(--bg-surface-subtle)",
            }}
            className="header-badge"
          >
            CIT // 2029
          </span>

          {/* Theme Toggle Button - Mobile (Quick 1-tap accessible) */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            style={{
              display: "none",
              background: "var(--bg-surface)",
              border: "1px solid var(--border-default)",
              color: "var(--text-primary)",
              padding: "0.45rem",
              borderRadius: "8px",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "42px",
              minHeight: "42px",
            }}
            className="theme-toggle-mobile"
          >
            {theme === "dark" ? <Sun size={18} color="var(--accent-cyan)" /> : <Moon size={18} color="var(--accent-cyan)" />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              background: "var(--bg-surface)",
              border: "1px solid var(--border-default)",
              color: "var(--text-primary)",
              padding: "0.45rem",
              borderRadius: "8px",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "42px",
              minHeight: "42px",
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Expandable Navigation Directory Panel */}
      {matrixOpen && (
        <>
          {/* Subtle Dim Backdrop for Focus */}
          <div
            onClick={() => setMatrixOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "var(--modal-backdrop-bg)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              zIndex: 100,
            }}
            aria-hidden="true"
          />

          <div
            ref={matrixRef}
            style={{
              position: "fixed",
              top: "76px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "calc(100% - 2.5rem)",
              maxWidth: "680px",
              backgroundColor: "var(--bg-surface-elevated)",
              border: "1px solid var(--border-default)",
              borderRadius: "16px",
              padding: "1.25rem 1.5rem",
              boxShadow: "var(--shadow-lg)",
              zIndex: 110,
              animation: "fadeInDown 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="matrix-dropdown-panel"
          >
          {/* Header Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "0.85rem",
              borderBottom: "1px solid var(--bg-hairline)",
              marginBottom: "1rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              letterSpacing: "0.05em",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-cyan)", fontWeight: 600 }}>
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-cyan)",
                  display: "inline-block",
                }}
              />
              <span>NAVIGATION DIRECTORY · SHARATH B</span>
            </div>
            <span style={{ color: "var(--text-muted)" }}>[ 07 SECTIONS ]</span>
          </div>

          {/* Directory Options Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.65rem",
            }}
            className="matrix-options-grid"
          >
            {directoryHubs.map((hub, idx) => {
              const isLast = idx === directoryHubs.length - 1;
              const isActive = hub.id === activeSection;

              if (hub.isAction) {
                return (
                  <button
                    key={hub.name}
                    onClick={hub.onClick}
                    style={{
                      background: "var(--bg-surface-subtle)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "10px",
                      padding: "0.75rem 1rem",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      textAlign: "left",
                      cursor: "pointer",
                      width: "100%",
                      gridColumn: isLast ? "span 2" : "auto",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--accent-cyan-subtle)";
                      e.currentTarget.style.borderColor = "var(--accent-cyan-border)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--bg-surface-subtle)";
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                    }}
                  >
                    <div style={{ marginTop: "2px" }}>{hub.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: "var(--text-primary)", fontSize: "0.875rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.35rem" }}>
                        <span>{hub.name}</span>
                        <ArrowUpRight size={11} style={{ opacity: 0.6 }} />
                      </div>
                      <div style={{ color: "var(--text-secondary)", fontSize: "0.71875rem", marginTop: "0.15rem", lineHeight: 1.4 }}>
                        {hub.desc}
                      </div>
                    </div>
                  </button>
                );
              }

              return (
                <a
                  key={hub.name}
                  href={hub.href}
                  onClick={() => setMatrixOpen(false)}
                  style={{
                    textDecoration: "none",
                    background: isActive ? "var(--accent-cyan-subtle)" : "var(--bg-surface-subtle)",
                    border: isActive ? "1px solid var(--accent-cyan-border)" : "1px solid var(--border-subtle)",
                    borderRadius: "10px",
                    padding: "0.75rem 1rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    gridColumn: isLast ? "span 2" : "auto",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--accent-cyan-subtle)";
                    e.currentTarget.style.borderColor = "var(--accent-cyan-border)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = isActive ? "var(--accent-cyan-subtle)" : "var(--bg-surface-subtle)";
                    e.currentTarget.style.borderColor = isActive ? "var(--accent-cyan-border)" : "var(--border-subtle)";
                  }}
                >
                  <div style={{ marginTop: "2px" }}>{hub.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "var(--text-primary)", fontSize: "0.875rem", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span>{hub.name}</span>
                      {isActive && (
                        <span style={{ fontSize: "0.625rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>
                          [CURRENT]
                        </span>
                      )}
                    </div>
                    <div style={{ color: "var(--text-secondary)", fontSize: "0.71875rem", marginTop: "0.15rem", lineHeight: 1.4 }}>
                      {hub.desc}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        </>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: "1rem",
            right: "1rem",
            background: "var(--bg-surface-elevated)",
            border: "1px solid var(--border-default)",
            borderRadius: "14px",
            padding: "1.25rem",
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            boxShadow: "var(--shadow-lg)",
            maxHeight: "calc(100vh - 90px)",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {directoryHubs.map((hub) => (
            <a
              key={hub.name}
              href={hub.href}
              onClick={() => {
                setMobileMenuOpen(false);
                if (hub.isAction && hub.onClick) hub.onClick();
              }}
              style={{
                color: "var(--text-primary)",
                textDecoration: "none",
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                padding: "0.6rem 0.25rem",
                minHeight: "44px",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              {hub.icon}
              <span>{hub.name}</span>
            </a>
          ))}

          {/* Mobile Drawer Appearance Switcher */}
          <div
            style={{
              paddingTop: "0.6rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}>
              Appearance
            </span>
            <button
              onClick={toggleTheme}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-default)",
                borderRadius: "6px",
                padding: "0.38rem 0.75rem",
                color: "var(--text-primary)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                cursor: "pointer",
              }}
            >
              {theme === "dark" ? (
                <>
                  <Sun size={13} color="var(--accent-cyan)" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={13} color="var(--accent-cyan)" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate(-50%, -10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        @media (max-width: 820px) {
          .nav-center-pill {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: inline-flex !important;
          }
          .theme-toggle-desktop {
            display: none !important;
          }
          .theme-toggle-mobile {
            display: inline-flex !important;
          }
        }
        @media (max-width: 600px) {
          .matrix-options-grid {
            grid-template-columns: 1fr !important;
          }
          .header-clock {
            font-size: 0.75rem !important;
          }
          .header-badge {
            display: none !important;
          }
        }
        @media (max-width: 380px) {
          .header-clock {
            font-size: 0.6875rem !important;
            letter-spacing: 0.04em !important;
          }
        }
      `}</style>
    </>
  );
};
