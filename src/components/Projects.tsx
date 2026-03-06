import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A responsive admin dashboard for managing products, orders, and analytics with real-time data visualization.",
    image: "https://placehold.co/600x400/0d1117/00b4d8?text=E-Commerce+Dashboard",
    liveUrl: "#",
    githubUrl: "#",
    tags: ["React", "Tailwind", "Chart.js"],
  },
  {
    title: "Task Management App",
    description: "A full-stack task manager with drag-and-drop, team collaboration, and deadline tracking features.",
    image: "https://placehold.co/600x400/0d1117/10b981?text=Task+Manager",
    liveUrl: "#",
    githubUrl: "#",
    tags: ["Django", "React", "PostgreSQL"],
  },
  {
    title: "Weather Forecast App",
    description: "A beautiful weather application with location search, 7-day forecasts, and animated weather icons.",
    image: "https://placehold.co/600x400/0d1117/8b5cf6?text=Weather+App",
    liveUrl: "#",
    githubUrl: "#",
    tags: ["JavaScript", "API", "CSS3"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase font-medium mb-2 text-center">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group rounded-xl overflow-hidden bg-card border border-border card-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:opacity-80 transition-opacity"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
