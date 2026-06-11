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
    org: "Arizona State University",
    role: "Research Assistant — AI & HCI",
    start: "2024",
    end: "Present",
    location: "Tempe, AZ",
    type: "RESEARCH",
    bullets: [
      "Designing and implementing AI-assisted tools for human-computer interaction research.",
      "Building data pipelines that process and analyze large interaction datasets.",
      "Collaborating with faculty to prototype and evaluate novel interface paradigms.",
    ],
    stack: ["Python", "PyTorch", "React", "PostgreSQL"],
  },
  {
    org: "Out There Social Club",
    role: "Co-founder & iOS Lead",
    start: "2023",
    end: "2024",
    location: "Tempe, AZ",
    type: "STARTUP",
    bullets: [
      "Co-founded and led engineering for a hyperlocal iOS app serving the Tempe community.",
      "Architected native SwiftUI application from zero to App Store launch.",
      "Built the Node.js backend, PostgreSQL schema, and AWS infrastructure.",
      "Grew to initial user base through community partnerships and grassroots outreach.",
    ],
    stack: ["Swift", "SwiftUI", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    org: "Freelance",
    role: "Software Engineer",
    start: "2022",
    end: "Present",
    location: "Remote",
    type: "FREELANCE",
    bullets: [
      "Built automation tools and internal dashboards for small businesses.",
      "Delivered AI-powered document processing systems reducing manual work by 60%+.",
      "Developed full-stack web applications for clients across various industries.",
    ],
    stack: ["Python", "React", "FastAPI", "PostgreSQL", "OpenAI"],
  },
];

export const education = {
  institution: "Arizona State University",
  degree: "B.S. Computer Science",
  start: "2021",
  end: "2025",
  location: "Tempe, AZ",
  notes: "Focus: AI Systems, Human-Computer Interaction",
};
