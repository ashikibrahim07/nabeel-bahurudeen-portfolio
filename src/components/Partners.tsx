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

  const duplicatedPartners = [...partnersData, ...partnersData];

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
        <div className="partners-marquee-outer py-8">
          <div className="partners-marquee-track">
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="partner-card group">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
