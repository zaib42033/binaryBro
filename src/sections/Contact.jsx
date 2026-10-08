import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import contactImage from "../assets/Contact.png";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    // Keep a stable reference to the form before the async request.
    // React's event currentTarget can become unavailable after await.
    const form = e.currentTarget;

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_fp32tcy",
        "template_rz1nxi6",
        form,
        "_I7VotOI0M0tLEM5i"
      );

      // EmailJS succeeded, so show success and then reset the form.
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#050816]
        px-5
        py-5
        text-white
        sm:px-8
        lg:px-12
      "
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute left-[8%] top-[25%] h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-72 w-72 rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Small stars */}

      <div className="contact-stars">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto mb-12 max-w-xl text-center lg:mb-14"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-cyan-400/50" />

          <span className="text-[9px] uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </span>

          <span className="h-px w-8 bg-cyan-400/50" />
        </div>

        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-tr from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          LET'S WORK TOGEHTER
        </h1>

        <p className="mt-3 text-xs leading-5 text-slate-500 sm:text-sm">
          Have an idea? Tell me about it and let's turn it into something
          meaningful.
        </p>
      </motion.div>

      {/* Main */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-6xl
          items-center
          gap-10
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-16
        "
      >
        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            flex
            flex-col
            items-center
            text-center
            lg:items-start
            lg:text-left
          "
        >
          {/* Illustration */}

          <div className="contact-visual relative">
            <div className="contact-orbit contact-orbit-one" />
            <div className="contact-orbit contact-orbit-two" />

            <div className="contact-image-glow" />

            <motion.img
              src={contactImage}
              alt="Let's work together"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                h-auto
                w-[240px]
                object-contain
                sm:w-[300px]
                lg:w-[360px]
              "
            />
          </div>

          {/* Text */}

          <div className="mt-2 max-w-md">
            <h2 className="text-xl font-bold sm:text-2xl text-slate-200">
              Got something in mind ?
            </h2>

            <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
              Whether it's a website, a creative idea or something completely
              new, I'm always open to interesting projects.
            </p>
          </div>

          {/* Social */}

          <div className="mt-6 flex gap-3">
            <a
              href="https://github.com/"
              className="
                contact-social
                group
              "
            >
              <FaGithub className="transition-transform duration-300 group-hover:scale-110" />
            </a>

            <a
              href="https://www.linkedin.com/in/orangzaib-malik-550584394"
              className="
                contact-social
                group
              "
            >
              <FaLinkedin className="transition-transform duration-300 group-hover:scale-110" />
            </a>

            <a
              href="mailto:salimxzaib@gmail.com"
              className="
                contact-social
                group
              "
            >
              <FaEnvelope className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </motion.div>

        {/* =================================================
            FORM
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative"
        >

          {/* Form Card */}

          <div
            className="
              relative
              rounded-2xl
              border
              border-white/10
              bg-[#090d16]/95
              p-5
              shadow-2xl
              backdrop-blur-xl
              sm:p-7
              lg:p-8
            "
          >
            {/* Form heading */}

            <div className="mb-6">
              <h2 className="text-xl font-bold sm:text-2xl text-slate-200">
                Send a Message
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={sendEmail} className="space-y-4">
              {/* Name */}

              <div>
                <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  Your Name
                  <span className="ml-1 text-cyan-400">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="contact-input"
                  required
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  Your Email
                  <span className="ml-1 text-cyan-400">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="contact-input"
                  required
                />
              </div>

              {/* Service */}

              <div>
                <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  Service Needed
                </label>

                <select name="subject" className="contact-input" required defaultValue="">
                  <option value="" disabled>Something in mind?</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Portfolio Website">Portfolio Website</option>
                  <option value="Frontend Development">Frontend Development</option>
                  <option value="Something Else">Something Else</option>
                </select>
              </div>

              {/* Message */}

              <div>
                <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  Explain Your Idea
                  <span className="ml-1 text-cyan-400">*</span>
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your idea..."
                  className="contact-input resize-none"
                  required
                />
              </div>

              {/* Button */}

              <button
                type="submit"
                disabled={sending}
                className="
                  contact-submit
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                <span>{sending ? "Sending..." : "Send Message"}</span>

                <FaPaperPlane className="text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              {status === "success" && (
                <p className="pt-1 text-center text-xs font-medium text-cyan-400">
                  Message sent successfully. I'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="pt-1 text-center text-xs font-medium text-rose-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
