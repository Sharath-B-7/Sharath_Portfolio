export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  timeline: string;
  score: string;
  scoreLabel: string;
  location: string;
  rankBadge?: string;
  description: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "cit-chennai",
    institution: "Chennai Institute of Technology (CIT Chennai)",
    degree: "B.E. Computer Science and Engineering — Cyber Security",
    timeline: "2025 – 2029 (Currently in 2nd Year)",
    score: "8.5 / 10",
    scoreLabel: "Cumulative GPA",
    location: "Chennai, Tamil Nadu",
    rankBadge: "Consistently Strong Academic Record",
    description:
      "Pursuing specialized undergraduate engineering with core emphasis on Cybersecurity, Systems Programming, Networks, Data Structures & Algorithms, and Intelligent Computing.",
    highlights: [
      "Consistent 8.5 CGPA in rigorous Computer Science & Cyber Security coursework",
      "Actively developing practical projects in threat intelligence and static analysis",
      "Engaged in competitive programming with 450+ LeetCode problems solved",
    ],
  },
  {
    id: "little-angels-12",
    institution: "Little Angels Higher Secondary School",
    degree: "Higher Secondary Examination (Class 12)",
    timeline: "Completed",
    score: "97%",
    scoreLabel: "Board Exam Percentage",
    location: "Aniyapuram, Tamil Nadu",
    rankBadge: "Third Rank at School",
    description:
      "Excelled in Higher Secondary with top distinction in Science & Mathematics, demonstrating disciplined analytical rigor and problem-solving fundamentals.",
    highlights: [
      "Secured 97% overall in Class 12 Board Examinations",
      "Achieved Third Academic Rank across the institution",
      "Established foundational mathematical and logical problem-solving aptitude",
    ],
  },
  {
    id: "little-angels-10",
    institution: "Little Angels Matriculation School",
    degree: "Secondary School Leaving Certificate (Class 10)",
    timeline: "Completed",
    score: "98%",
    scoreLabel: "Board Exam Percentage",
    location: "Aniyapuram, Namakkal District",
    rankBadge: "First Rank at School (School Topper)",
    description:
      "Ranked First across the entire school with a near-perfect academic record of 98%, demonstrating an early work ethic and dedication to excellence.",
    highlights: [
      "Secured 98% overall in Class 10 Board Examinations",
      "Awarded First Rank (School Topper) for outstanding scholastic performance",
      "Recognized for academic leadership and scientific curiosity",
    ],
  },
];
