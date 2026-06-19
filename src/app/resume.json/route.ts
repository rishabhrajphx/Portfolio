import { NextResponse } from "next/server";
import { projects } from "@/data/projects";
import { experience, education } from "@/data/experience";

export function GET() {
  return NextResponse.json(
    {
      name: "Rishabh Raj",
      role: "Software Engineer",
      focus: ["AI Systems", "Full-Stack", "iOS", "Infrastructure"],
      location: "Tempe, AZ",
      contact: {
        email: "raj@rishabhraj.net",
        github: "https://github.com/rishabhrajphx",
        linkedin: "https://www.linkedin.com/in/rishabhrajcs/",
        letterboxd: "https://letterboxd.com",
      },
      bio: "Software engineer building practical tools for humans, teams, and machines — working across AI agents, mobile apps, automation, and infrastructure.",
      skills: {
        ai_ml: ["OpenAI APIs", "LangChain", "PyTorch", "Whisper", "Tool Calling", "RAG", "OCR"],
        languages: ["Python", "TypeScript", "Swift", "Go", "SQL", "Bash"],
        frontend: ["React", "Next.js", "SwiftUI", "Tailwind CSS"],
        backend: ["FastAPI", "Node.js", "PostgreSQL", "Redis", "WebSockets"],
        infrastructure: ["Kubernetes", "Docker", "AWS", "Linux", "Terraform", "Tailscale"],
        tooling: ["Git", "Grafana", "Prometheus", "Tesseract", "Jupyter"],
      },
      experience: experience.map((r) => ({
        org: r.org,
        role: r.role,
        start: r.start,
        end: r.end,
        location: r.location,
        type: r.type,
        bullets: r.bullets,
        stack: r.stack,
      })),
      education: {
        institution: education.institution,
        degree: education.degree,
        start: education.start,
        end: education.end,
        location: education.location,
        notes: education.notes,
      },
      projects: projects.map((p) => ({
        id: p.id,
        name: p.name,
        type: p.type,
        summary: p.summary,
        stack: p.stack,
        status: p.status,
      })),
      last_updated: "2026-05-18",
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}
