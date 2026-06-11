import { NextResponse } from "next/server";
import { projects } from "@/data/projects";

export function GET() {
  return NextResponse.json(projects, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
