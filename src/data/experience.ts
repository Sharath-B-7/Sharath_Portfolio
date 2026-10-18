export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  label: string;
  timeline: string;
  location: string;
  description: string;
  focusAreas: string[];
  takeaways: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "soc-training-exp",
    role: "Security Operations Center (SOC) Training",
    organization: "Elevance Skills",
    label: "Training / Internship Experience",
    timeline: "Completed",
    location: "Practical Training / Virtual Lab",
    description:
      "Focused practical training on real-time security operations center methodology, telemetry inspection, incident monitoring, and defensive investigation workflows. Structured to understand real-world blue team operations without portraying full-time employment.",
    focusAreas: [
      "Real-time Security Operations Center (SOC) concepts and architecture",
      "Security Event Monitoring and anomaly detection in telemetry",
      "Incident Monitoring, triage guidelines, and ticket escalation",
      "Syslog, authentication log, and network flow analysis",
      "Security Operations workflows and defense-in-depth principles",
    ],
    takeaways: [
      "Gained working understanding of security event life cycles from initial trigger to containment",
      "Practiced analyzing log files to identify suspicious authentication patterns and anomalous traffic",
      "Learned standard incident documentation and severity classification protocols",
    ],
  },
];
