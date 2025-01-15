import { Card } from "@/components/ui/card";
import { useDarkMode } from '../context/DarkModeContext';

interface Project {
  title: string;
  description: string;
  date: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {title: "Credit Card ChargeAutomation",
    description: "Working on automating the credit card charge process for ASU, possibly sell this as SaaS. \n Used Tesseract OCR to exract text from receipts and regex to extract the data.",
    date: "2025",
    link: "https://github.com/rishabhrajphx/My-SaaS",
    tags: ["Python, HTML, CSS"], 
  },

  {title: "NLP Resume Extraction",
    description: "Currently working on training a Natural Language Processing model to extract information from Resumes, Reciepts for personal learning and use.",
    date: "2025",
    link: "https://github.com/rishabhrajphx/PDF-NLP",
    tags: ["Python"], 
  },

  {title: "X Timeout Redirect",
    description: "Lot of people in the tech side of X.com spend more time arguing and less time coding. \n So I made this to redirect them to the leetcode after 15 minutes.",
    date: "2025",
    link: "https://chromewebstore.google.com/detail/x-timeout-redirect/fkhhhghdkmimgamcannfnglilkooegjl",
    tags: ["JavaScript"],
  },
  {title: "Rishabh Raj Portfolio Website",
    description: "I built this website to showcase my projects and skills.",
    date: "December 2024 - Current",
    link: "https://github.com/rishabhrajphx/Portfolio",
    tags: ["TypeScript", "React", "Three.js"],
  },
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
  const { darkMode } = useDarkMode();

  return (
    <section className={`container mx-auto px-4 py-16 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <h2 className="mb-12 text-center text-3xl font-bold">Project Timeline</h2>
      <div className="mx-auto max-w-3xl">
        {projects.map((project, index) => (
          <div key={index} className="timeline-item">
            <Card className={`glass-card transform transition-all duration-300 hover:scale-[1.02] ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{project.date}</span>
                </div>
                <p className={`mb-4 ${
                  darkMode ? 'text-white' : 'text-white-600'
                }`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`rounded-full bg-primary/10 px-3 py-1 text-sm ${
                        darkMode ? 'text-white' : 'text-primary'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className={`mt-4 inline-block ${
                    darkMode ? 'text-white' : 'text-primary'
                  } hover:text-primary/80`}
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