import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { partnersData } from "../data/partnersData";

const Partners = () => {
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

  const duplicatedPartners = [
    ...partnersData,
    ...partnersData,
    ...partnersData,
    ...partnersData,
    ...partnersData,
  ];

  return (
    <section id="partners" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="text-sm font-mono text-primary mb-2 block"
          >
            TRUSTED BY
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="section-title inline-block"
          >
            Industry Partners
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto mt-6 text-foreground/80"
          >
            I have had the privilege of working with a diverse range of
            companies, from industry leaders to innovative startups.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden py-8"
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10"></div> */}

          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -216 * partnersData.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            style={{
              width: `${216 * duplicatedPartners.length}px`,
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-primary/30 min-w-[200px] hover:bg-primary/10">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white text-center">
                      {partner.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
