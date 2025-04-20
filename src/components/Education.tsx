import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { educationData } from '../data/educationData';
import { Calendar, Award, GraduationCap } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="education" className="py-20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.span variants={itemVariants} className="text-sm font-mono text-primary mb-2 block">
            MY BACKGROUND
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title inline-block">
            Education & Certifications
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto mt-6 text-foreground/80">
            My academic background and professional certifications have provided me with a strong foundation in mechanical engineering principles and specialized knowledge in my areas of expertise.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={24} className="text-primary" />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            
            <div className="relative border-l-2 border-primary/30 pl-8 ml-3 space-y-8">
              {educationData.education.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-background border-2 border-primary rounded-full"></div>
                  <div className="border border-primary/30 p-5 rounded-lg bg-background/40 backdrop-blur hover:shadow-neon transition-shadow">
                    <span className="inline-flex items-center gap-2 text-sm font-mono text-primary mb-2">
                      <Calendar size={14} />
                      {item.period}
                    </span>
                    <h4 className="text-lg font-bold">{item.degree}</h4>
                    <p className="text-foreground/70">{item.institution}</p>
                    {item.description && (
                      <p className="mt-2 text-foreground/80">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award size={24} className="text-secondary" />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {educationData.certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="border border-secondary/30 p-5 rounded-lg bg-background/40 backdrop-blur hover:shadow-neon-secondary transition-shadow"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex justify-between">
                    <h4 className="font-bold">{cert.name}</h4>
                    <span className="text-xs font-mono text-secondary">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-foreground/70 mt-1">{cert.issuer}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {cert.skills && cert.skills.map((skill, j) => (
                      <span 
                        key={j}
                        className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Continued Education */}
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-6">
                <Award size={24} className="text-accent" />
                <h3 className="text-xl font-bold">Continued Education</h3>
              </div>
              
              <div className="space-y-4">
                {educationData.continuedEducation.map((course, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="border border-accent/30 p-4 rounded-lg bg-background/40 backdrop-blur hover:shadow-neon-accent transition-shadow"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between">
                      <h4 className="font-bold">{course.name}</h4>
                      <span className="text-xs font-mono text-accent">
                        {course.year}
                      </span>
                    </div>
                    <p className="text-foreground/70 text-sm mt-1">{course.provider}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;