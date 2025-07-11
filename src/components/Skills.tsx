import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillsData } from "../data/skillsData";
import { toolsGroups } from "../data/toolsData";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20">
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
            MY EXPERTISE
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="section-title inline-block"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto mt-6 text-foreground/80"
          >
            Through continuous learning and practical application across various
            projects, I've developed a diverse set of technical skills that
            enable me to tackle complex engineering challenges.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="border border-primary/30 rounded-lg p-6 bg-background/40 backdrop-blur hover:shadow-neon transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => {
                  const percent = skill.level;

                  return (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground/90">{skill.name}</span>
                        <span className="text-xs font-mono text-primary">
                          {percent}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${percent}%` } : { width: 0 }
                          }
                          transition={{ duration: 1, delay: i * 0.1 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl font-bold mb-8 text-center"
          >
            Tools & Technologies
          </motion.h3>
          <div className="space-y-12">
            {toolsGroups.map((group, idx) => {
              const tools = group.tools;
              const rows = [];
              let remaining = tools.length;
              let startIndex = 0;
              let rowTools = 5; // Start with 5 tools in first row on desktop

              while (remaining > 0 && rowTools > 0) {
                const currentRow = tools.slice(
                  startIndex,
                  startIndex + rowTools
                );
                if (currentRow.length > 0) {
                  rows.push(currentRow);
                }
                startIndex += rowTools;
                remaining -= rowTools;
                rowTools -= 1;
              }

              // For mobile fallback: break tools into 2 per row
              const mobileRows = [];
              for (let i = 0; i < tools.length; i += 2) {
                mobileRows.push(tools.slice(i, i + 2));
              }

              return (
                <div key={idx}>
                  <h4 className="text-lg font-semibold mb-4 text-center">
                    {group.group}
                  </h4>

                  {/* Mobile layout */}
                  <div className="flex flex-col items-center space-y-6 md:hidden">
                    {mobileRows.map((row, rowIdx) => (
                      <div
                        key={rowIdx}
                        className="flex justify-center space-x-6"
                      >
                        {row.map((tool, i) => (
                          <div
                            key={i}
                            className="flex flex-col items-center text-center group relative w-32"
                          >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-background border border-primary/30 mb-3 group-hover:shadow-neon transition-shadow duration-300">
                              <div className="text-primary text-2xl">
                                {tool.icon}
                              </div>
                            </div>
                            <span className="text-sm font-medium">
                              {tool.name}
                            </span>
                            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 bg-background border border-primary/30 text-xs text-foreground px-3 py-2 rounded shadow-lg z-10 w-48">
                              {tool.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:flex flex-col items-center space-y-6">
                    {rows.map((row, rowIdx) => (
                      <div
                        key={rowIdx}
                        className="flex justify-center space-x-6"
                      >
                        {row.map((tool, i) => (
                          <div
                            key={i}
                            className="flex flex-col items-center text-center group relative w-32"
                          >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-background border border-primary/30 mb-3 group-hover:shadow-neon transition-shadow duration-300">
                              <div className="text-primary text-2xl">
                                {tool.icon}
                              </div>
                            </div>
                            <span className="text-sm font-medium">
                              {tool.name}
                            </span>
                            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 bg-background border border-primary/30 text-xs text-foreground px-3 py-2 rounded shadow-lg z-10 w-48">
                              {tool.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
