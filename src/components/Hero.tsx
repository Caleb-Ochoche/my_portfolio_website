import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const developerName = "Caleb Mkaane";
const developerTitle = "Front-End Web Developer";
const developerBio = "I craft beautiful, responsive, and performant web experiences that bring ideas to life.";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left">
          
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-4">
            {developerName.split(" ")[0]}{" "}
            <span className="text-gradient">{developerName.split(" ")[1]}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-heading mb-4">
            {developerTitle}
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
            {developerBio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-primary">
              
              View My Work <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors">
              
              Contact Me <Mail size={16} />
            </a>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-shrink-0">
          
          <div className="relative">
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-primary/30 glow-primary animate-pulse_glow">
              <img

                alt="Caleb Mkaane"
                className="w-full h-full object-cover object-top" src="/lovable-uploads/53d72957-8a31-47ec-be1d-a6a4bedbf0af.png" />
              
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent rounded-full flex items-center justify-center animate-float">
              <span className="text-accent-foreground font-bold text-lg">⚡</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Hero;