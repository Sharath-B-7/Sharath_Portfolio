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
    "B.E. Computer Science and Engineering — Cyber Security student at Chennai Institute of Technology (CIT Chennai), interested in cybersecurity, software development, problem-solving, and AI/ML.",
  education: {
    degree: "B.E. Computer Science and Engineering — Cyber Security",
    college: "Chennai Institute of Technology (CIT Chennai)",
    year: "2025 – 2029 (2nd Year)",
    cgpa: "8.5 / 10",
    location: "Chennai, Tamil Nadu",
  },

  languages: ["English", "Tamil"],
  primaryInterest: "Cybersecurity",
  secondaryInterests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Software Development",
    "Data Structures & Algorithms",
    "Problem Solving",
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
