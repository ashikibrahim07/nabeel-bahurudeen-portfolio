import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectsData } from '../data/projectsData';
import { ExternalLink, X } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.span variants={itemVariants} className="text-sm font-mono text-primary mb-2 block">
            MY WORK
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title inline-block">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto mt-6 text-foreground/80">
            Below are some of the key projects I've been involved in throughout my career. Each one presented unique challenges that required innovative engineering solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg bg-background/40 backdrop-blur border border-primary/30 hover:shadow-neon transition-all duration-300"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(idx)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block px-3 py-1 text-xs font-mono bg-primary text-background rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-foreground/80 line-clamp-3 mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-pill">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <button className="w-full mt-4 text-center p-2 border border-primary/50 text-primary rounded hover:bg-primary/10 transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="relative bg-background border border-primary max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-neon"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/80 text-foreground hover:text-primary z-10"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={20} />
                </button>

                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img 
                    src={projectsData[selectedProject].image} 
                    alt={projectsData[selectedProject].title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block px-3 py-1 text-xs font-mono bg-primary text-background rounded-full mb-2">
                      {projectsData[selectedProject].category}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">{projectsData[selectedProject].title}</h3>
                    <p className="text-foreground/80 mt-1">{projectsData[selectedProject].date}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-2">Project Overview</h4>
                    <p className="text-foreground/80">{projectsData[selectedProject].description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-2">Challenges & Solutions</h4>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                      {projectsData[selectedProject].challenges.map((challenge, i) => (
                        <li key={i}>{challenge}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-2">Results</h4>
                    <p className="text-foreground/80">{projectsData[selectedProject].results}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-2">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {projectsData[selectedProject].technologies.map((tech, i) => (
                        <span key={i} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {projectsData[selectedProject].link && (
                    <a 
                      href={projectsData[selectedProject].link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>View More Information</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;