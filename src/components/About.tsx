import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Check,
  FileText,
  MapPin,
  Briefcase,
  Clock,
  Wrench,
} from "lucide-react";
import nabeelBahurudeenResume from "../assets/Nabeel_Bahurudeen_Resume.pdf";
import { useEffect, useState } from "react";

const About = () => {
  const [experience, setExperience] = useState('0+');

  const calculateExperience = () => {
    const startDate = new Date('2024-02-01');
    const currentDate = new Date();
    
    const yearDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthDiff = currentDate.getMonth() - startDate.getMonth();
    
    const totalMonths = yearDiff * 12 + monthDiff;
    const years = totalMonths / 12;
    
    if (years < 1) {
      return `${totalMonths}+`;
    } else if (years < 2) {
      return `${years.toFixed(1)}+`;
    } else {
      return `${Math.floor(years)}+`;
    }
  };

  useEffect(() => {
    setExperience(calculateExperience());
    
    const interval = setInterval(() => {
      setExperience(calculateExperience());
    }, 24 * 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const profileImage =
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg";

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const statsItems = [
    { icon: <Clock size={24} />, label: "Years of Experience", value: experience },
    {
      icon: <Briefcase size={24} />,
      label: "Projects Completed",
      value: "15+",
    },
    { icon: <Wrench size={24} />, label: "Design Solutions", value: "10+" },
    { icon: <MapPin size={24} />, label: "Countries Worked In", value: "2" },
  ];

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1,
      boxShadow: "0 0 15px rgba(0, 255, 187, 0.7)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden">
              <motion.img
                src={profileImage}
                alt="Professional portrait of Nabeel Bahurudeen"
                className="w-full h-auto object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 border-2 border-primary rounded-lg"></div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border-2 border-secondary rounded-lg z-0"
              animate={{
                x: [0, 5, 0],
                y: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.div>
            <motion.div
              className="absolute -top-4 -left-4 w-32 h-32 border border-accent rounded-lg z-0"
              animate={{
                x: [0, -5, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5,
              }}
            ></motion.div>
          </motion.div>

          <div>
            <motion.span
              variants={itemVariants}
              className="text-sm font-mono text-primary mb-2 block"
            >
              ABOUT ME
            </motion.span>

            <motion.h2 variants={itemVariants} className="section-title">
              Transforming Ideas into Engineering Reality
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-6 text-foreground/80"
            >
              As a Mechanical Engineer with hands-on experience in HVAC,
              firefighting, plumbing, and infrastructure systems, I specialize
              in delivering efficient, code-compliant MEP solutions. I bring a
              deep understanding of international and regional standards,
              including NFPA, ASHRAE, SMACNA, IPC, UPC, IMC, ASPE, ASME, AWS,
              OSHA, SBC, IBC, SCDB, and British Standards.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mb-6 text-foreground/80"
            >
              My expertise lies in MEP system installation, testing,
              commissioning, and troubleshooting—ensuring projects are executed
              smoothly, on time, and within budget. I’m skilled in managing shop
              drawings, procurement, as-built documentation, and quantity
              surveying. From chiller plants to fire suppression systems,
              drainage networks, and BMS integration, I’m passionate about
              combining technical precision with practical efficiency to exceed
              project expectations.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="flex items-center gap-2">
                <Check size={18} className="text-primary" />
                <span>HVAC System Design & Execution</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} className="text-primary" />
                <span>Firefighting & Plumbing Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} className="text-primary" />
                <span>MEP Installation, Testing & Commissioning</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} className="text-primary" />
                <span>AutoCAD & Revit Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} className="text-primary" />
                <span>CAD Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} className="text-primary" />
                <span>Regulatory & Code Compliance</span>
              </div>
            </motion.div>

            <motion.a
              href={nabeelBahurudeenResume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={18} />
              <span>Download Resume</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {statsItems.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-primary/30 bg-background/80 backdrop-blur p-6 rounded-lg flex flex-col items-center text-center hover:border-primary/60 transition-all duration-300 neon-border"
              whileHover={{ y: -5 }}
            >
              <div className="text-primary mb-3">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-1 text-foreground">
                {stat.value}
              </h3>
              <p className="text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
