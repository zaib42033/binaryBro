import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#050816] px-5 pb-6 pt-10 text-white sm:px-8 lg:px-12">
      {/* Top Aura Line */}

      <div className="footer-aura-line" />

      {/* Soft Background Glow */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =========================================
            MAIN FOOTER
        ========================================= */}

        <div className="grid gap-10 pb-12 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* BRAND */}

          <div>
            <motion.a
              href="#home"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
              className="inline-block text-2xl font-bold tracking-tight"
            >
              Zaib<span className="text-cyan-400">.</span>
            </motion.a>

            <p className="mt-4 max-w-sm text-xs leading-6 text-slate-500 sm:text-sm">
              A web developer focused on building clean, modern and meaningful
              digital experiences.
            </p>

            {/* Socials */}

            <div className="mt-6 flex gap-2">
              <a href="#" aria-label="GitHub" className="footer-social">
                <FaGithub />
              </a>

              <a href="#" aria-label="LinkedIn" className="footer-social">
                <FaLinkedinIn />
              </a>

              <a href="#" aria-label="Instagram" className="footer-social">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a href="#home" className="footer-link">
                Home
              </a>

              <a href="#about" className="footer-link">
                About
              </a>

              <a href="#skills" className="footer-link">
                Skills
              </a>

              <a href="#projects" className="footer-link">
                Projects
              </a>

              <a href="#testimonials" className="footer-link">
                Testimonials
              </a>

              <a href="#contact" className="footer-link">
                Contact
              </a>
            </div>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Let's Connect
            </h3>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Have a project or idea in mind?
            </p>

            <a
              href="#contact"
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                text-xs
                font-medium
                text-cyan-400
                transition-all
                duration-300
                hover:gap-3
                hover:text-cyan-300
              "
            >
              Start a conversation
              <span>→</span>
            </a>
          </div>
        </div>

        {/* =========================================
            DIVIDER
        ========================================= */}

        <div className="h-px w-full bg-white/[0.07]" />

        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="flex flex-col items-center justify-between gap-5 pt-6 sm:flex-row">
          <p className="text-[10px] text-slate-600 sm:text-xs">
            © {currentYear} Zaib. All rights reserved.
          </p>

          <p className="text-[10px] text-slate-600 sm:text-xs">
            Designed & built with <span className="text-cyan-400">♥</span>
          </p>

          {/* Back To Top */}

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="footer-top-button"
          >
            <FaArrowUp className="text-[10px]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
