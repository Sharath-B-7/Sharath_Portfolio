export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  badge?: string;
}

export const quickStats: StatItem[] = [
  {
    value: "2nd Year",
    label: "Undergraduate",
    sublabel: "Computer Science & Cyber Security",
    badge: "CIT Chennai",
  },
  {
    value: "8.5",
    label: "CGPA",
    sublabel: "Academic Consistency",
    badge: "Top Tier",
  },
  {
    value: "450+",
    label: "LeetCode Solved",
    sublabel: "DSA & Problem Solving",
    badge: "Active Practice",
  },
  {
    value: "5+",
    label: "Certifications",
    sublabel: "Networking & Security Credentials",
    badge: "Verified",
  },
];
