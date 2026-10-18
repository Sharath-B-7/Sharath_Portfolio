import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top of page"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 90,
        width: "40px",
        height: "40px",
        borderRadius: "var(--radius-full)",
        background: "rgba(12, 16, 26, 0.88)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        color: "#f8fafc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        backdropFilter: "blur(10px)",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.4)";
        e.currentTarget.style.color = "var(--accent-blue)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
        e.currentTarget.style.color = "#f8fafc";
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
};
