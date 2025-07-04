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
import { aboutData } from "../data/aboutData";

const About = () => {
  const [experience, setExperience] = useState("0+");

  const calculateExperience = () => {
    const startDate = new Date("2024-02-26");
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
    {
      icon: <Clock size={24} />,
      label: "Years of Experience in MEP",
      value: experience,
    },
    {
      icon: <Briefcase size={24} />,
      label: "Projects Completed",
      value: "16",
    },
    { icon: <Wrench size={24} />, label: "Design Solutions", value: "10+" },
    { icon: <MapPin size={24} />, label: "Countries Worked In", value: "2", isCountry: true },
  ];

  const countryDetails = [
    { country: "India", flag: "https://flagcdn.com/w320/in.png" },
    { country: "Saudi Arabia", flag: "https://flagcdn.com/w320/sa.png" },
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
              {aboutData.aboutMe.map((item, index) => (
                <p key={index} className="mb-6 text-foreground/80">
                  {item}
                </p>
              ))}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
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
              <span>View Full Resume</span>
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
              className="border border-primary/30 bg-background/80 backdrop-blur p-6 rounded-lg flex flex-col items-center text-center hover:border-primary/60 transition-shadow duration-300 neon-border group"
              whileHover={{ y: -5 }}
            >
              <div className="text-primary mb-3">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-1 text-foreground">
                {stat.value}
              </h3>
              <p className="text-foreground/70 mb-2">{stat.label}</p>

              {stat.isCountry && (
                <div className="flex gap-2 mt-2">
                  {countryDetails.map((country, idx) => (
                    <motion.img
                      key={idx}
                      src={country.flag}
                      alt={country.country}
                      title={country.country}
                      className="w-6 h-4 rounded shadow-md"
                      // whileHover={{ x: 10 }}
                      // transition={{ type: "spring", stiffness: 300 }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
