import { NextResponse } from "next/server";
import { projects } from "@/data/projects";

export function GET() {
  const base = "https://rishabhraj.com";
  const now = new Date().toISOString().split("T")[0];

  const staticRoutes = [
    { path: "/", priority: "1.0", freq: "monthly" },
    { path: "/work", priority: "0.9", freq: "monthly" },
    { path: "/experience", priority: "0.8", freq: "monthly" },
    { path: "/life", priority: "0.7", freq: "monthly" },
    { path: "/notes", priority: "0.7", freq: "weekly" },
    { path: "/machine", priority: "0.8", freq: "monthly" },
  ];

  const projectRoutes = projects.map((p) => ({
    path: `/work/${p.id}`,
    priority: "0.7",
    freq: "monthly",
  }));

  const allRoutes = [...staticRoutes, ...projectRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    ({ path, priority, freq }) => `  <url>
    <loc>${base}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
