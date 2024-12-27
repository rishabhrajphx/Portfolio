import { Card } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  date: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Cryptographic Message System",
    description: "End-to-end encrypted messaging platform using modern cryptographic algorithms.",
    date: "2024",
    link: "#",
    tags: ["Cryptography", "React", "Node.js"],
  },
  {
    title: "3D Visualization Tool",
    description: "Interactive 3D data visualization tool for complex datasets.",
    date: "2023",
    link: "#",
    tags: ["Three.js", "WebGL", "TypeScript"],
  },
  {
    title: "Blockchain Explorer",
    description: "A clean and intuitive blockchain explorer for tracking transactions.",
    date: "2023",
    link: "#",
    tags: ["Web3", "React", "GraphQL"],
  },
];

export const ProjectTimeline = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold">Project Timeline</h2>
      <div className="mx-auto max-w-3xl">
        {projects.map((project, index) => (
          <div key={index} className="timeline-item">
            <Card className="glass-card transform transition-all duration-300 hover:scale-[1.02]">
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-primary hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};