import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  { name: "VS Code", icon: "💻" },
  { name: "Git", icon: "🔀" },
  { name: "GitHub", icon: "🐙" },
  { name: "Figma", icon: "🎨" },
  { name: "Postman", icon: "📬" },
  { name: "Docker", icon: "🐳" },
  { name: "npm", icon: "📦" },
  { name: "Terminal", icon: "⌨️" },
];

const Tools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase font-medium mb-2 text-center">Toolkit</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-12">
            Tools I <span className="text-gradient">Use</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors cursor-default"
              >
                <span className="text-xl">{tool.icon}</span>
                <span className="text-sm font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
