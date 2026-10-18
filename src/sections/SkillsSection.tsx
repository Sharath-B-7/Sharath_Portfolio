import React from "react";

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      index: "01",
      category: "Programming",
      description: "Systems programming, algorithm implementations, and automation scripting.",
      skills: ["Python", "Java", "C", "C++", "JavaScript"],
    },
    {
      index: "02",
      category: "Cybersecurity",
      description: "Defensive telemetry, static malware triage, and incident monitoring.",
      skills: [
        "Cybersecurity Fundamentals",
        "Network Security",
        "SOC Fundamentals",
        "Log Analysis",
        "Incident Analysis",
        "Android Malware Static Analysis",
        "Security Event Monitoring",
      ],
    },
    {
      index: "03",
      category: "Web Development",
      description: "Modern frontend architectures, REST APIs, and application servers.",
      skills: ["HTML", "CSS", "React", "Node.js", "Express.js", "Vite"],
    },
    {
      index: "04",
      category: "AI / Machine Learning",
      description: "Predictive models, deep learning architectures, and data processing.",
      skills: ["Machine Learning", "Deep Learning", "CNN", "NumPy", "Pandas"],
    },
    {
      index: "05",
      category: "Databases",
      description: "Relational queries, schema modeling, and ORM abstractions.",
      skills: ["SQL", "SQLite", "MySQL", "MongoDB", "SQLAlchemy"],
    },
    {
      index: "06",
      category: "Tools & Environments",
      description: "Operating systems, version control, and developer toolchains.",
      skills: ["Git", "GitHub", "Linux", "Ubuntu", "VS Code", "FastAPI"],
    },
  ];

  return (
    <section id="skills" className="editorial-section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">03 // Technical Capabilities</div>
          <h2 className="section-heading-editorial">
            Disciplines & Core Toolchain
          </h2>
          <p className="section-subheading-editorial">
            Structured technical capabilities spanning systems programming, offensive-aware defensive security, and intelligent software engineering.
          </p>
        </div>

        {/* 6-Block Typographic Swiss Matrix */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid var(--bg-hairline)",
            borderLeft: "1px solid var(--bg-hairline)",
          }}
          className="capabilities-matrix"
        >
          {skillCategories.map((group) => (
            <div
              key={group.index}
              style={{
                padding: "2rem 1.75rem",
                borderRight: "1px solid var(--bg-hairline)",
                borderBottom: "1px solid var(--bg-hairline)",
                background: "var(--bg-surface)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* Index & Category Name */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.4rem" }}>
                  <span className="mono-tag" style={{ color: "var(--accent-cyan)" }}>
                    {group.index} //
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {group.category}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                    marginBottom: "1.5rem",
                  }}
                >
                  {group.description}
                </p>
              </div>

              {/* Text-based Technology Listing */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--bg-hairline-subtle)",
                }}
              >
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: "var(--text-faint)", fontSize: "0.6875rem" }}>—</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .capabilities-matrix {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .capabilities-matrix {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
