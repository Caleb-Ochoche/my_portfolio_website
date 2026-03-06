import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ──────────────────────────────────────────────
 * EDITABLE SKILLS ARRAY
 * Add or remove skills here. Each skill needs a name and a color (Tailwind-safe HSL token or class).
 * ──────────────────────────────────────────────*/
const skills = [
  { name: "HTML5", icon: "🌐", level: 95 },
  { name: "CSS3", icon: "🎨", level: 90 },
  { name: "JavaScript", icon: "⚡", level: 88 },
  { name: "React.js", icon: "⚛️", level: 85 },
  { name: "Django", icon: "🐍", level: 75 },
  { name: "Python", icon: "🐍", level: 78 },
  { name: "TypeScript", icon: "📘", level: 80 },
  { name: "Tailwind CSS", icon: "💨", level: 90 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase font-medium mb-2 text-center">What I Know</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-12">
            My <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 rounded-xl bg-card border border-border card-hover text-center"
              >
                <span className="text-3xl mb-3 block">{skill.icon}</span>
                <h3 className="font-heading font-semibold text-sm mb-3">{skill.name}</h3>
                <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 0.8, delay: i * 0.08 + 0.3 }}
                  />
                </div>
                <span className="text-xs text-muted-foreground mt-2 block">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
