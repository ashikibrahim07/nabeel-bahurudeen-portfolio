import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(0, 255, 187, 0.7)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-secondary/5"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/5 w-64 h-64 rounded-full bg-accent/5"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,187,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,187,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-2 text-foreground whitespace-nowrap"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <span className="text-sm md:text-base font-mono text-primary mb-2">Hi, I'm</span> Nabeel Bahurudeen.
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-6 text-foreground/80 whitespace-nowrap"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <span className="text-secondary">
              Mechanical Engineer | MEP Specialist
            </span>{" "}
            at{" "}
            <a
              href="https://sraco.com.sa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SRACO, Saudi Arabia
            </a>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg mb-8 text-foreground/70 max-w-2xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            I bring hands-on experience in HVAC, Fire protection, Plumbing, and Mechanical design — with a focus on large-scale construction and oil & gas infrastructure. I specialize in turning complex technical requirements into safe, efficient, and regulation-compliant engineering solutions. From shop drawings to system commissioning, I deliver precision, performance, and on-time execution. 
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <motion.a
              href="#projects"
              className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ChevronRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              className="btn-outline flex items-center justify-center gap-2 w-full sm:w-auto"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <ChevronRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 w-10 h-10 items-center justify-center text-primary border border-primary rounded-full"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default Hero;
