import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, ImagePlus } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Well-structured & maintainable" },
  { icon: Palette, label: "UI/UX Focus", desc: "User-centered design thinking" },
  { icon: Zap, label: "Performance", desc: "Fast & optimized applications" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase font-medium mb-2 text-center">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-12">
            Passionate About Building <span className="text-gradient">Great Web Experiences</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm Caleb Mkaane, a front-end web developer with a passion for creating elegant, 
                responsive, and user-friendly web applications. I specialize in modern JavaScript 
                frameworks and love turning complex problems into simple, beautiful designs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and building products that make a real impact.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
