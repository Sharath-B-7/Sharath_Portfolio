export interface PersonalInfo {
  name: string;
  tagline: string;
  headline: string;
  title: string;
  heroDescription: string;
  education: {
    degree: string;
    college: string;
    year: string;
    cgpa: string;
    location: string;
  };
  languages: string[];
  primaryInterest: string;
  secondaryInterests: string[];
  statusBadge: string;
  social: {
    github: string;
    githubAlt: string;
    linkedin: string;
    leetcode: string;
    email: string;
    phone: string;
  };
  assets: {
    profilePhoto: string;
    resumePdf: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Sharath B",
  tagline: "Cybersecurity | Software Development | AI/ML",
  headline: "Building Secure Systems. Solving Real Problems.",
  title: "Cybersecurity | Software Development | AI/ML",
  heroDescription:
    "Computer Science and Engineering student specializing in Cyber Security at Chennai Institute of Technology, Chennai, with interests in cybersecurity, SOC analysis, AI, machine learning, and software development. Strong problem-solving skills with an interest in AI-assisted coding and rapid prototyping.",
  education: {
    degree: "B.E. Computer Science and Engineering — Cyber Security",
    college: "Chennai Institute of Technology, Chennai",
    year: "2025 – 2029",
    cgpa: "8.5 / 10",
    location: "Chennai, Tamil Nadu",
  },

  languages: ["English", "Tamil"],
  primaryInterest: "Cybersecurity",
  secondaryInterests: [
    "Cybersecurity & SOC Analysis",
    "AI & Machine Learning",
    "Software Development",
    "AI-assisted Coding & Rapid Prototyping",
    "Problem Solving (450+ LeetCode)",
  ],
  statusBadge: "Currently Learning & Building",
  social: {
    github: "https://github.com/Sharath-B-7",
    githubAlt: "https://github.com/Sharath-B-7",
    linkedin: "https://linkedin.com/in/sharath-b-719a26383",
    leetcode: "https://leetcode.com/u/Sharathbcs",
    email: "sharathabsg7@gmail.com",
    phone: "+91 95979 35746",
  },
  assets: {
    profilePhoto: "/profile/sharath-profile-photo.png",
    resumePdf: "/resume/sharath-resume.pdf",
  },
};
