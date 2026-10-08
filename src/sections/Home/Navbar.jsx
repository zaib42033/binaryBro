import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImage from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goToSection = (href) => {
    setMenuOpen(false);

    setTimeout(() => {
      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-[9990] px-6 py-1 sm:py-2 sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
          {/* LOGO */}

          <button
            type="button"
            onClick={() => goToSection("#home")}
            className="relative z-10 shrink-0 cursor-pointer"
          >
            <img
              src={"src/assets/logo.png"}
              alt="Orangzaib Malik"
              className="h-10 w-auto object-contain "
            />
          </button>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center md:flex">
            {links.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => goToSection(link.href)}
                className="
                  group
                  relative
                  rounded-lg
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-slate-400
                  transition-all
                  duration-300
                  hover:bg-gradient-to-bl from-cyan-600 to-blue-600
                 hover:text-slate-200                  
                  cursor-pointer
                "
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* DESKTOP CTA */}

          <button
            type="button"
            onClick={() => goToSection("#contact")}
            className="
              hidden
              rounded-lg
              border
              border-slate-700
              px-5
              py-2
              text-sm
              font-medium
              text-slate-200
              transition-all
              duration-300
              hover:border-slate-500
              hover:bg-slate-900
              cursor-pointer
              sm:block
            "
          >
            Let's Talk
          </button>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="
              group
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-white/[0.035]
              text-slate-200
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/60
              hover:text-cyan-300
              md:hidden
            "
          >
            <span
              className="
                absolute
                inset-0
                bg-cyan-400/10
                opacity-0
                blur-xl
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            <Menu size={22} strokeWidth={1.8} className="relative z-10" />
          </button>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[10000] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* MAIN BACKGROUND */}

            <div className="absolute inset-0 bg-[#02050b]" />

            {/* LARGE CYAN LIGHT */}

            <motion.div
              className="
                absolute
                -right-32
                -top-32
                h-[430px]
                w-[430px]
                rounded-full
                bg-cyan-400/20
                blur-[130px]
              "
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.45, 0.7, 0.45],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* PINK LIGHT */}

            <motion.div
              className="
                absolute
                -bottom-40
                -left-40
                h-[430px]
                w-[430px]
                rounded-full
                bg-pink-500/15
                blur-[130px]
              "
              animate={{
                scale: [1.1, 0.9, 1.1],
                opacity: [0.35, 0.6, 0.35],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* SUBTLE GRID */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.035]
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(255,255,255,0.8) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(255,255,255,0.8) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "42px 42px",
              }}
            />

            {/* CONTENT */}

            <div className="relative flex h-full flex-col px-5 py-5">
              {/* TOP */}

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => goToSection("#home")}
                  className="shrink-0"
                >
                  <img
                    src={logoImage}
                    alt="Orangzaib Malik"
                    className="h-10 w-auto object-contain"
                  />
                </button>

                {/* CLOSE */}

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="
                    group
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-cyan-400/60
                    hover:text-cyan-300
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-cyan-400/10
                      opacity-0
                      blur-lg
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <X
                    size={22}
                    strokeWidth={1.7}
                    className="
                      relative
                      z-10
                      transition-transform
                      duration-300
                      group-hover:rotate-90
                    "
                  />
                </button>
              </div>

              {/* NAV LINKS */}

              <nav className="flex flex-1 flex-col justify-center gap-3 px-1">
                {links.map((link, index) => (
                  <motion.button
                    key={link.name}
                    type="button"
                    onClick={() => goToSection(link.href)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.07,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative w-full text-left"
                  >
                    {/* Outer gradient border */}
                    <div
                      className="
                        absolute
                        -inset-[1px]
                        rounded-2xl
                        bg-gradient-to-r
                      from-cyan-400/50
                      via-blue-500/30
                      to-fuchsia-500/40
                        opacity-50
                        blur-[1px]
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        group-hover:blur-[3px]
                      "
                    />

                    {/* Card */}
                    <div
                      className="
                        relative
                        flex
                        h-[72px]
                        items-center
                        overflow-hidden
                        rounded-2xl
                        border
                      border-white/[0.08]
                        bg-gradient-to-r
                      from-cyan-400/[0.08]
                      via-blue-500/[0.035]
                      to-fuchsia-500/[0.07]
                        px-5
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                      group-hover:border-cyan-300/30
                      group-hover:from-cyan-400/[0.16]
                      group-hover:via-blue-500/[0.08]
                      group-hover:to-fuchsia-500/[0.14]
                        group-hover:shadow-[0_10px_35px_rgba(34,211,238,0.12)]
                      "
                    >
                      {/* Background glow */}
                      <span
                        className="
                          absolute
                          -left-20
                          top-1/2
                          h-32
                          w-32
                          -translate-y-1/2
                          rounded-full
                        bg-cyan-400/10
                          blur-3xl
                          transition-all
                          duration-500
                          group-hover:left-10
                        group-hover:bg-cyan-400/20
                        "
                      />

                      {/* Pink glow */}
                      <span
                        className="
                          absolute
                          -right-20
                          top-1/2
                          h-28
                          w-28
                          -translate-y-1/2
                          rounded-full
                        bg-fuchsia-500/10
                          blur-3xl
                          transition-all
                          duration-500
                          group-hover:right-10
                        group-hover:bg-fuchsia-500/20
                        "
                      />

                      {/* Small number */}
                      <span
                        className="
                          relative
                          z-10
                          mr-4
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                        border-cyan-400/20
                        bg-cyan-400/[0.07]
                          font-mono
                          text-[10px]
                        text-cyan-300/70
                          transition-all
                          duration-300
                        group-hover:border-cyan-300/50
                        group-hover:bg-cyan-300/10
                        group-hover:text-cyan-200
                        "
                      >
                        0{index + 1}
                      </span>

                      {/* Name */}
                      <span
                        className="
                          relative
                          z-10
                          text-[22px]
                          font-semibold
                          tracking-[-0.025em]
                        text-slate-200
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                        group-hover:text-white
                        "
                      >
                        {link.name}
                      </span>

                      {/* Arrow */}
                      <span
                        className="
                        relative
                        z-10
                        ml-auto
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                      border-white/10
                      bg-white/[0.03]
                        text-sm
                      text-slate-500
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                      group-hover:border-cyan-400/40
                      group-hover:bg-cyan-400/10
                      group-hover:text-cyan-300
                    "
                      >
                        ↗
                      </span>

                      {/* Bottom gradient line */}
                      <span
                        className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-0
                        bg-gradient-to-r
                      from-cyan-400
                      via-blue-500
                      to-fuchsia-500
                        shadow-[0_0_15px_rgba(34,211,238,0.8)]
                        transition-all
                        duration-500
                        group-hover:w-full
                        "
                      />
                    </div>
                  </motion.button>
                ))}
              </nav>

              {/* BOTTOM GLOW LINE */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="
                  h-px
                  w-full
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-400/50
                  to-transparent
                "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
