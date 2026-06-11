export type Project = {
  id: string;
  number: string;
  type: "SYSTEM" | "TOOL" | "INTERFACE" | "INFRA" | "APP";
  name: string;
  summary: string;
  description: string;
  tags: string[];
  stack: string[];
  role: string;
  status: "ACTIVE" | "SHIPPED" | "ONGOING" | "ARCHIVED";
  links: { label: string; href: string }[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "mnemosyne",
    number: "01",
    type: "SYSTEM",
    name: "MNEMOSYNE",
    summary: "Voice AI assistant with live tools for weather, stocks, search, and canvas control.",
    description:
      "A real-time voice AI assistant powered by OpenAI's speech and tool-calling APIs. Handles multi-turn conversations with live tool invocations — querying weather, fetching stock prices, running web searches, and controlling a shared canvas. Built around a persistent session model with low-latency audio pipelines.",
    tags: ["OPENAI", "SPEECH", "TOOL CALLING", "REAL-TIME"],
    stack: ["OpenAI", "Python", "WebSockets", "React", "FastAPI"],
    role: "Solo — Architecture, Backend, Frontend",
    status: "SHIPPED",
    links: [{ label: "GitHub", href: "https://github.com/rraj31" }],
    featured: true,
  },
  {
    id: "approvemate",
    number: "02",
    type: "TOOL",
    name: "APPROVEMATE",
    summary: "AI agent for receipt and document automation — extract, validate, route.",
    description:
      "An AI-powered document automation agent that ingests receipts, invoices, and expense reports, extracts structured data via OCR and language models, validates against business rules, and routes for approval. Reduces manual document processing time significantly.",
    tags: ["PYTHON", "OCR", "AI AGENTS", "AUTOMATION"],
    stack: ["Python", "LangChain", "Tesseract", "PostgreSQL", "FastAPI"],
    role: "Solo — Full Stack",
    status: "SHIPPED",
    links: [{ label: "GitHub", href: "https://github.com/rraj31" }],
    featured: true,
  },
  {
    id: "out-there-social-club",
    number: "03",
    type: "APP",
    name: "OUT THERE SOCIAL CLUB",
    summary: "iOS app connecting Tempe residents with local deals and community events.",
    description:
      "A native iOS application built to surface hyperlocal deals, events, and community activity in Tempe, AZ. Connects local businesses with residents through a curated feed, location-aware discovery, and push notifications. Built with Swift and SwiftUI with a Node.js backend.",
    tags: ["SWIFT", "IOS", "STARTUP", "LOCAL"],
    stack: ["Swift", "SwiftUI", "Node.js", "PostgreSQL", "AWS"],
    role: "Co-founder, iOS Lead",
    status: "SHIPPED",
    links: [{ label: "GitHub", href: "https://github.com/rraj31" }],
    featured: true,
  },
  {
    id: "homelab",
    number: "04",
    type: "INFRA",
    name: "HOMELAB",
    summary: "Private cloud, GPU resources, and self-hosted infrastructure for personal projects.",
    description:
      "A self-hosted private cloud built on consumer hardware — running containerized workloads, GPU-accelerated ML experiments, and internal tooling. Includes a Kubernetes cluster, GPU node for inference, self-hosted Gitea, monitoring stack, and VPN layer. Used as a proving ground for infrastructure patterns before applying them at scale.",
    tags: ["LINUX", "DOCKER", "GPU", "K8S", "SELF-HOSTED"],
    stack: ["Kubernetes", "Docker", "Linux", "Prometheus", "Grafana", "Tailscale"],
    role: "Solo — Architecture, Ops",
    status: "ONGOING",
    links: [{ label: "GitHub", href: "https://github.com/rraj31" }],
    featured: true,
  },
];
