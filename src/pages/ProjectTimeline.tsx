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
    title: "Hyper Local Socialization App",
    description: "An app that allows users to find events or activities happening in their area. \n I built this app using Flutter and Firebase.",
    date: "December 2024",
    link: "https://github.com/rishabhrajphx/hyperlocal_socialization_app-flutter",
    tags: ["Firebase", "Flutter", "Dart", "AI"],
  },
  {
    title: "Java Based Access Control System",
    description: "An access control system that allows users to manage access to resources based on their roles. \n Built as part of my curriculum with classmates. \n I was the Team Lead and used Agile methodologies to manage the project.",
    date: "September - November 2024",
    link: "https://github.com/rishabhrajphx/Java-Access-Control-Software",
    tags: ["Java", "Spring Boot", "MySQL"],
  },
  //{
    //title: "Blockchain Explorer",
    //description: "A clean and intuitive blockchain explorer for tracking transactions.",
    //date: "2023",
    //link: "#",
    //tags: ["Web3", "React", "GraphQL"],
  //},
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