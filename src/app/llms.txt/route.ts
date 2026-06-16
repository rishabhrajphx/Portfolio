import { NextResponse } from "next/server";

const content = `# Rishabh Raj — Portfolio

## Identity
Name: Rishabh Raj
Role: Software Engineer
Location: Tempe, AZ, USA
Email: rraj31@asu.edu
GitHub: https://github.com/rraj31
LinkedIn: https://linkedin.com/in/rishabhraj31

## Summary
Software engineer building practical tools for humans, teams, and machines.
Working across AI agents, mobile apps, automation, and infrastructure.
I turn messy workflows into practical systems people actually use.

## Technical Focus
- AI Systems: OpenAI APIs, LangChain, PyTorch, voice interfaces, tool calling, RAG
- Languages: Python, TypeScript, Swift, Go, SQL, Bash
- Frontend: React, Next.js, SwiftUI, Tailwind CSS
- Backend: FastAPI, Node.js, PostgreSQL, Redis, WebSockets
- Infrastructure: Kubernetes, Docker, AWS, Linux, Terraform, Tailscale

## Projects
1. MNEMOSYNE — Voice AI assistant with live tool calling (weather, stocks, search, canvas)
   Stack: OpenAI, Python, WebSockets, React, FastAPI

2. APPROVEMATE — AI agent for receipt and document automation
   Stack: Python, LangChain, Tesseract, PostgreSQL, FastAPI

3. OUT THERE SOCIAL CLUB — iOS app connecting Tempe residents with local deals
   Stack: Swift, SwiftUI, Node.js, PostgreSQL, AWS

4. HOMELAB — Private cloud and self-hosted infrastructure with GPU resources
   Stack: Kubernetes, Docker, Linux, Prometheus, Grafana, Tailscale

## Experience
- Research Assistant, ASU (AI & HCI) — 2024–Present
- Co-founder & iOS Lead, Out There Social Club — 2023–2024
- Freelance Software Engineer — 2022–Present

## Education
B.S. Computer Science, Arizona State University, 2021–2025
Focus: AI Systems, Human-Computer Interaction

## Outside the Terminal
Rock climbing, dragon boat racing, flint-knapping, cycling, film

## Machine-readable data
- /resume.json — full resume as JSON
- /projects.json — all projects as JSON
- /machine — human-readable machine profile page
- /sitemap.xml — sitemap

Last updated: 2026-05-18
`;

export function GET() {
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
