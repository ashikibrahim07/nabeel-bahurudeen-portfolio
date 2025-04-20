import { motion } from "framer-motion";

const Loader = () => {
  const gearVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Outer gear */}
        <motion.div
          className="w-32 h-32 border-4 border-primary rounded-full"
          variants={gearVariants}
          animate="animate"
        >
          <div className="absolute top-0 left-1/2 w-4 h-10 -ml-2 -mt-6 bg-primary"></div>
          <div className="absolute bottom-0 left-1/2 w-4 h-10 -ml-2 -mb-6 bg-primary"></div>
          <div className="absolute left-0 top-1/2 w-10 h-4 -ml-6 -mt-2 bg-primary"></div>
          <div className="absolute right-0 top-1/2 w-10 h-4 -mr-6 -mt-2 bg-primary"></div>
        </motion.div>
      </div>

      <motion.p
        className="mt-8 text-primary text-xl font-mono"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        INITIALIZING...
      </motion.p>
    </motion.div>
  );
};

export default Loader;
