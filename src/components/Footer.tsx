import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background py-12 border-t border-primary/20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.div
              className="text-xl font-bold font-mono text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="cursor-pointer" onClick={handleScrollToTop}>Nabeel Bahurudeen</span>
            </motion.div>
            <p className="mt-2 text-foreground/60 max-w-md">
              Mechanical engineering excellence with a focus on innovation,
              precision, and sustainable solutions.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={handleScrollToTop}
              className="mb-4 p-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Nabeel Bahurudeen. All rights
              reserved.
            </p>
            <p className="mt-1 text-foreground/50 text-xs">
              Design and developed by <a href="https://ashik-ibrahim.vercel.app/" target="_blank" rel="noopener noreferrer">Ashik Ibrahim S</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
