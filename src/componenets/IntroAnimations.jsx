import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const hackerLines = [
  "root@zaib:~$ initializing secure environment...",
  "[SYSTEM] scanning available resources...",
  "[OK] CPU architecture detected",
  "[OK] Memory allocation verified",
  "[OK] Node.js runtime detected",
  "root@zaib:~$ npm install",
  "npm info using npm@11.6.0",
  "npm info using node@24.x",
  "[INSTALL] react......................... OK",
  "[INSTALL] react-dom..................... OK",
  "[INSTALL] react-router-dom.............. OK",
  "[INSTALL] framer-motion................. OK",
  "[INSTALL] tailwindcss................... OK",
  "[SYSTEM] resolving dependencies...",
  "[SYSTEM] compiling interface...",
  "[SYSTEM] loading visual engine...",
  "[SYSTEM] initializing components...",
  "[SECURITY] connection encrypted",
  "[NETWORK] secure tunnel established",
  "[SYSTEM] checking portfolio modules...",
  "[OK] NAVIGATION",
  "[OK] HERO",
  "[OK] SKILLS",
  "[OK] EDUCATION",
  "[OK] PROJECTS",
  "[OK] TESTIMONIALS",
  "[OK] CONTACT",
  "[OK] FOOTER",
  "root@zaib:~$ npm run dev",
  "starting development server...",
  "localhost:5173",
  "BUILD COMPLETE",
];

const matrixChars =
  "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>[]{}$#@%&*+=-/\\|";

const randomCode = () => {
  let result = "";

  for (let i = 0; i < 35; i++) {
    result += matrixChars[Math.floor(Math.random() * matrixChars.length)];
  }

  return result;
};

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(true);
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // Generate Matrix columns only once
    const generatedColumns = Array.from({ length: 24 }, (_, index) => ({
      id: index,
      left: `${index * 4.4 + Math.random() * 2}%`,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 5,
      characters: Array.from({ length: 18 }, () => randomCode()),
    }));

    setColumns(generatedColumns);
  }, []);

  useEffect(() => {
    // Show terminal lines one by one
    let current = 0;

    const lineInterval = setInterval(() => {
      setVisibleLines((prev) => {
        if (current >= hackerLines.length) {
          clearInterval(lineInterval);
          return prev;
        }

        const next = [...prev, hackerLines[current]];
        current++;

        // Keep only latest lines visible
        return next.slice(-9);
      });
    }, 125);

    return () => clearInterval(lineInterval);
  }, []);

  useEffect(() => {
    // Progress animation
    let value = 0;

    const progressInterval = setInterval(() => {
      value += Math.floor(Math.random() * 4) + 1;

      if (value >= 100) {
        value = 100;
        clearInterval(progressInterval);
      }

      setProgress(value);
    }, 105);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Close intro after boot sequence
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[99999] overflow-hidden bg-black text-green-500"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          {/* ================= MATRIX BACKGROUND ================= */}

          <div className="absolute inset-0 overflow-hidden opacity-30">
            {columns.map((column) => (
              <motion.div
                key={column.id}
                className="absolute top-[-500px] flex flex-col font-mono text-[10px] leading-[14px] text-green-500"
                style={{
                  left: column.left,
                }}
                animate={{
                  y: ["0vh", "180vh"],
                }}
                transition={{
                  duration: column.duration,
                  delay: column.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {column.characters.map((char, index) => (
                  <span
                    key={index}
                    className={
                      index === 0
                        ? "text-green-200 drop-shadow-[0_0_8px_rgba(34,197,94,0.9)]"
                        : ""
                    }
                  >
                    {char}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>

          {/* ================= GREEN GLOW ================= */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/10 blur-[140px]" />

          {/* ================= CRT SCANLINES ================= */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,255,100,0.7) 4px)",
            }}
          />

          {/* ================= NOISE ================= */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
            }}
          />

          {/* ================= MAIN CONTENT ================= */}

          <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-5xl"
            >
              {/* TOP TERMINAL BAR */}

              <div className="mb-2 flex items-center justify-between border border-green-500/30 bg-black/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(34,197,94,0.08)] sm:text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_10px_#22c55e]" />

                  <span className="text-green-400">ZAIB_OS // SECURE_BOOT</span>
                </div>

                <span className="hidden text-green-700 sm:block">
                  SYSTEM_ID: 0xZA1B
                </span>
              </div>

              {/* TERMINAL */}

              <div className="relative overflow-hidden border border-green-500/40 bg-black/90 shadow-[0_0_50px_rgba(34,197,94,0.12)]">
                {/* Terminal glow border */}

                <div className="pointer-events-none absolute inset-0 border border-green-400/10" />

                {/* Terminal header */}

                <div className="flex items-center gap-2 border-b border-green-500/20 bg-green-500/[0.03] px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />

                  <span className="ml-3 font-mono text-[10px] text-green-700 sm:text-xs">
                    root@zaib-portfolio: ~
                  </span>
                </div>

                {/* Terminal body */}

                <div className="h-[330px] overflow-hidden px-4 py-4 font-mono text-[10px] leading-[1.7] sm:h-[390px] sm:px-6 sm:py-5 sm:text-xs md:text-sm">
                  {visibleLines.map((line, index) => {
                    const isCommand = line.includes("root@");
                    const isOk =
                      line.includes("[OK]") || line.includes("BUILD COMPLETE");

                    return (
                      <motion.div
                        key={`${line}-${index}`}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.15,
                        }}
                        className={`whitespace-nowrap ${
                          isCommand
                            ? "text-green-300"
                            : isOk
                              ? "text-green-400"
                              : "text-green-600"
                        }`}
                      >
                        {line}
                      </motion.div>
                    );
                  })}

                  {/* Cursor */}

                  <motion.span
                    className="ml-1 inline-block h-3 w-2 bg-green-400 shadow-[0_0_8px_#22c55e]"
                    animate={{
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                    }}
                  />
                </div>

                {/* Bottom progress */}

                <div className="border-t border-green-500/20 bg-black px-4 py-3 sm:px-6">
                  <div className="mb-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-green-700 sm:text-[10px]">
                    <span>Initializing interface</span>

                    <span className="text-green-400">{progress}%</span>
                  </div>

                  <div className="h-[3px] w-full overflow-hidden bg-green-950">
                    <motion.div
                      className="h-full bg-green-400 shadow-[0_0_12px_#22c55e]"
                      animate={{
                        width: `${progress}%`,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* BOTTOM STATUS */}

              <div className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-green-800 sm:text-[10px]">
                <span>
                  connection: <span className="text-green-500">secure</span>
                </span>

                <span className="hidden sm:block">encryption: AES-256</span>

                <span>
                  status:{" "}
                  <span className="animate-pulse text-green-400">online</span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* ================= CORNER HUD ================= */}

          <div className="absolute left-4 top-4 font-mono text-[8px] tracking-[0.2em] text-green-900 sm:text-[9px]">
            <div>SYS://BOOT</div>
            <div>ACCESS://LOCAL</div>
          </div>

          <div className="absolute bottom-4 right-4 font-mono text-[8px] tracking-[0.2em] text-green-900 sm:text-[9px]">
            <div>PORTFOLIO.EXE</div>
            <div>BUILD_2026</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
