import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase as BriefcaseBusiness } from 'lucide-react';
import { experienceData } from '../data/experienceData';

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-background/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.span 
            variants={itemVariants}
            className="text-sm font-mono text-primary mb-2 block"
          >
            MY JOURNEY
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="section-title inline-block"
          >
            Professional Experience
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto mt-6 text-foreground/80"
          >
            My career path in mechanical engineering and design has equipped me with a diverse skill set and deep industry knowledge. Here's how my professional journey has unfolded:
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company list */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 flex flex-col space-y-1"
          >
            {experienceData.map((job, index) => (
              <motion.button
                key={index}
                className={`text-left px-4 py-4 border-l-2 hover:bg-primary/5 transition-colors ${
                  selectedJob === index 
                    ? 'border-l-primary text-primary bg-primary/5' 
                    : 'border-l-foreground/10 text-foreground/70'
                }`}
                onClick={() => setSelectedJob(index)}
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <h3 className="font-semibold">{job.company}</h3>
                <p className="text-sm opacity-80">{job.title}</p>
              </motion.button>
            ))}
          </motion.div>

          {/* Job details */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-8 relative"
          >
            <motion.div
              className="p-6 border border-primary/30 rounded-lg relative z-10 bg-background/40 backdrop-blur"
              key={selectedJob}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  {experienceData[selectedJob].title}
                </h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-primary/20 text-primary font-medium">
                  {experienceData[selectedJob].employmentType}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <BriefcaseBusiness size={16} className="text-primary" />
                  <span>{experienceData[selectedJob].company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <MapPin size={16} className="text-primary" />
                  <span>{experienceData[selectedJob].location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Calendar size={16} className="text-primary" />
                  <span>{experienceData[selectedJob].period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {experienceData[selectedJob].responsibilities.map((responsibility, i) => (
                  <motion.li 
                    key={i} 
                    className="flex gap-3 text-foreground/80"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>

              {experienceData[selectedJob].technologies && (
                <div className="mt-6">
                  <p className="text-sm font-medium mb-2">Technologies & Tools:</p>
                  <div className="flex flex-wrap gap-2">
                    {experienceData[selectedJob].technologies.map((tech, i) => (
                      <motion.span 
                        key={i}
                        className="tech-pill"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-secondary/30 rounded-lg z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;