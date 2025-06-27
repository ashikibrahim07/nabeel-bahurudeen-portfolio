import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  AtSign,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Github as GitHub,
  Twitter,
} from "lucide-react";
import { SiCredly } from "react-icons/si";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const YOUR_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("access_key", YOUR_ACCESS_KEY);
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("subject", formState.subject);
      formData.append("message", formState.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        // Reset form after submission
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const contactItems = [
    {
      icon: <AtSign size={24} />,
      label: "Email",
      value: "nafeel7@outlook.com",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Dammam, Saudi Arabia",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background/30">
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
            GET IN TOUCH
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="section-title inline-block"
          >
            Contact Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto mt-6 text-foreground/80"
          >
            Interested in working together or have a question about my work? I'd
            love to hear from you. Use the form below or reach out through any
            of my contact channels.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="bg-background/40 backdrop-blur p-6 rounded-lg border border-primary/30 shadow-neon"
            >
              {submitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                    <Send size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-foreground/80">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-background/60 border border-primary/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-background/60 border border-primary/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/60 border border-primary/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-background/60 border border-primary/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    ></textarea>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-500 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-background"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </>
              )}
            </motion.form>
          </motion.div>

          {/* Contact information */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-primary/30 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium opacity-70">
                        {item.label}
                      </p>
                      <p className="text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/nabeelbahurudeen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-primary/30 text-primary hover:bg-primary hover:text-background transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:nafeel7@outlook.com"
                  className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-primary/30 text-primary hover:bg-primary hover:text-background transition-colors"
                >
                  <AtSign size={20} />
                </a>
                <a
                  href="https://www.credly.com/users/nabeel-bahurudeen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-primary/30 text-primary hover:bg-primary hover:text-background transition-colors"
                >
                  <SiCredly className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6">
              <h3 className="text-xl font-bold mb-6">Availability</h3>
              <p className="text-foreground/80 mb-4">
                I'm currently open to consulting opportunities and engineering
                collaborations on interesting projects. Feel free to reach out
                to discuss potential partnerships.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
