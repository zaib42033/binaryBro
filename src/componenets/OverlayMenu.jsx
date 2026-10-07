import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

const menuItems = [
  { name: "Home", href: "#home", number: "01" },
  { name: "Skills", href: "#skills", number: "02" },
  { name: "Education", href: "#education", number: "03" },
  { name: "Projects", href: "#projects", number: "04" },
  { name: "Testimonials", href: "#testimonials", number: "05" },
  { name: "Contact", href: "#contact", number: "06" },
];

export default function OverlayMenu({ isOpen, setIsOpen }) {
  const handleNavigate = (href) => {
    setIsOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9997] md:hidden overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Background */}
          <motion.div
            className="absolute inset-0 bg-[#030712]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Cyan glow */}
          <div className="absolute -top-32 -right-32 w-[300px] h-[300px] rounded-full bg-cyan-400/10 blur-[100px]" />

          {/* Pink glow */}
          <div className="absolute bottom-[-100px] -left-32 w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-[100px]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "35px 35px",
            }}
          />

          <div className="relative z-10 flex h-full flex-col px-6 pt-6 pb-5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold tracking-wide">
                <span className="text-white">Zaib</span>
                <span className="text-cyan-400">.</span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="
                  w-11 h-11
                  rounded-full
                  border border-white/10
                  bg-white/[0.04]
                  flex items-center justify-center
                  text-white
                  hover:border-cyan-400/50
                  hover:text-cyan-400
                  transition-all duration-300
                "
              >
                <X size={22} />
              </button>
            </div>

            {/* Menu */}
            <nav className="flex-1 flex flex-col justify-center">
              <div className="mb-6">
                <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-400/70">
                  Navigation
                </p>
              </div>

              <div className="space-y-1">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigate(item.href)}
                    className="
                      group
                      w-full
                      flex
                      items-center
                      gap-4
                      py-3
                      text-left
                    "
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.35,
                    }}
                  >
                    {/* Number */}
                    <span
                      className="
                        w-7
                        text-[10px]
                        font-mono
                        text-white/25
                        group-hover:text-cyan-400
                        transition-colors
                      "
                    >
                      {item.number}
                    </span>

                    {/* Name */}
                    <span
                      className="
                        text-[30px]
                        leading-none
                        font-medium
                        text-white/80
                        group-hover:text-white
                        group-hover:translate-x-2
                        transition-all duration-300
                      "
                    >
                      {item.name}
                    </span>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={18}
                      className="
                        opacity-0
                        -translate-x-2
                        text-cyan-400
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all duration-300
                      "
                    />
                  </motion.button>
                ))}
              </div>
            </nav>

            {/* Bottom */}
            <motion.div
              className="border-t border-white/10 pt-4 flex items-center justify-between"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div>
                <p className="text-xs text-white/40">Available for freelance</p>

                <p className="text-sm text-white/80 mt-1">
                  Let's build something.
                </p>
              </div>

              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                <span className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_10px_#f472b6]" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
