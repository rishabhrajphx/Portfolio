export type Role = {
  org: string;
  role: string;
  start: string;
  end: string;
  location: string;
  type: string;
  bullets: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    org: "Out There Social Club",
    role: "Founding Engineer & CTO",
    start: "Spring 2024",
    end: "Dec 2025",
    location: "Tempe, AZ",
    type: "STARTUP",
    bullets: [
      "Co-founded a non-profit startup and led all technical decisions as CTO.",
      "Designed and launched an iOS app in Swift connecting Tempe residents with local deals and discounts.",
      "Built full-stack iOS app with real-time notifications, achieving 95% uptime, plus a website with access control.",
      "Secured $7k+ in sponsorships and funding from local businesses.",
    ],
    stack: ["Swift", "SwiftUI", "Firebase"],
  },
  {
    org: "AZPBS",
    role: "Software Engineer Intern",
    start: "May 2024",
    end: "Aug 2024",
    location: "Phoenix, AZ",
    type: "INTERNSHIP",
    bullets: [
      "Built a PowerShell + Python tool to grant/revoke temporary admin rights, eliminating 6 hrs/week of on-site IT travel.",
      "Identified and resolved the CrowdStrike outage at AZPBS and ASU Phoenix campus, restoring 100+ users.",
      "Managed hardware on Linux systems and debugged production issues with senior engineers using Git and unit testing.",
    ],
    stack: ["PowerShell", "Python", "Linux", "Git"],
  },
  {
    org: "ASU Alumni Association",
    role: "Assistant Office Manager",
    start: "Oct 2023",
    end: "Present",
    location: "Tempe, AZ",
    type: "PART-TIME",
    bullets: [
      "Automated three core office workflows using Python scripts, AI agents, and mobile apps, significantly cutting manual processing time.",
      "Organized tailgates, open houses, and events for foreign officials and AZ sports teams.",
    ],
    stack: ["Python"],
  },
  {
    org: "Arizona State University",
    role: "Teaching Assistant & Grader — Entrepreneurship",
    start: "2024",
    end: "2025",
    location: "Tempe, AZ",
    type: "ACADEMIC",
    bullets: [
      "Graded assignments and provided feedback for an undergraduate entrepreneurship course.",
      "Held office hours and supported students through coursework and project development.",
    ],
    stack: [],
  },
];

export const education = {
  institution: "Arizona State University",
  degree: "B.S. Computer Science",
  start: "Aug 2022",
  end: "Dec 2026",
  location: "Tempe, AZ",
  notes: "Data Structures & Algorithms, Logic in CS, Software Engineering, Information Assurance",
};
