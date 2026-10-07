import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaLaptopCode,
  FaBookOpen,
} from "react-icons/fa";

const educationData = [
  {
    id: 1,
    place: "Hamza Public High School",
    period: "Primary Education",
    icon: <FaSchool />,
    color: "#38bdf8",
    side: "bottom",
  },
  {
    id: 2,
    place: "As A Private Candidate",
    period: "Matriculation",
    icon: <FaBookOpen />,
    color: "#a78bfa",
    side: "top",
  },
  {
    id: 3,
    place: "Master Science College",
    period: "Intermediate in Computer",
    icon: <FaLaptopCode />,
    color: "#22d3ee",
    side: "bottom",
  },
  {
    id: 4,
    place: "Sheryians Coding School & Etc..",
    period: "Web_Development",
    icon: <FaLaptopCode />,
    color: "#a78bfa",
    side: "top",
  },
];

const lineVariants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const verticalLineVariants = {
  hidden: {
    scaleY: 0,
    opacity: 0,
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const nodeVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const EducationCard = ({ item }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="education-card group relative w-full max-w-[330px]"
      style={{
        "--card-color": item.color,
      }}
    >
      {/* Aura */}
      <div
        className="education-aura absolute -inset-4 rounded-[28px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle, ${item.color}30, transparent 70%)`,
        }}
      />

      {/* Card */}
      <div className="flex flex-col ducation-box relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d16]/90 px-6 py-5 backdrop-blur-md transition-all duration-400 group-hover:-translate-y-1 group-hover:border-white/25 ">
        {/* Top colored line */}
        <div
          className="absolute left-0 top-0 h-[2px] w-full opacity-70"
          style={{
            background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
          }}
        />

        {/* Small glow */}
        <div
          className="absolute -right-10 -top-10 h-24 w-24 rounded-full blur-3xl"
          style={{
            backgroundColor: `${item.color}18`,
          }}
        />

        <div className="relative z-10 flex flex-col gap-4">
          {/* Icon */}
          <div className="flex items-center gap-2">
            <div
              className="education-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
              style={{
                color: item.color,
                borderColor: `${item.color}35`,
                backgroundColor: `${item.color}10`,
                boxShadow: `0 0 22px ${item.color}12`,
              }}
            >
              <span className="text-lg">{item.icon}</span>
            </div>
            <div>
              <h1
                className="mb-1 text-[13px] font-medium uppercase tracking-[0.18em]"
                style={{ color: item.color }}
              >
                {item.period}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0">
            <p className="mt-1 text-sm leading-relaxed text-slate-400">
              {item.place}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section
      id="education"
      className="education-section relative w-full overflow-hidden bg-[#050816] px-5 py-5 text-white sm:px-8 lg:min-h-screen lg:px-10 lg:py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="education-bg-glow absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-cyan-400/[0.035] blur-[100px]" />

        <div className="education-bg-glow absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-fuchsia-500/[0.035] blur-[110px]" />
      </div>

      {/* ================= HEADING ================= */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto mb-5 md:mb-10 lg:mb-20 max-w-3xl text-center"
      >
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-cyan-400/60" />

          <span className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            My Journey
          </span>

          <span className="h-px w-8 bg-cyan-400/60" />
        </div>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-tr from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          EDUCATION
        </h2>
      </motion.div>

      {/* =====================================================
          DESKTOP TIMELINE
      ====================================================== */}

      <div className="relative z-10 mx-auto hidden max-w-6xl lg:block">
        {/* Main horizontal line */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
          }}
          variants={lineVariants}
          className="education-main-line absolute left-[8%] right-[8%] top-1/2 h-px origin-left bg-gradient-to-r from-cyan-400/20 via-cyan-300/60 to-fuchsia-400/30"
        />

        {/* Education label */}

        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2"
        >
          <div className="flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-[#080b14] px-5 py-3 shadow-[0_0_25px_rgba(34,211,238,0.06)]">
            <FaGraduationCap className="text-cyan-400" />

            <span className="text-sm font-semibold tracking-wide">
              Education
            </span>
          </div>
        </motion.div>

        {/* Timeline */}

        <div className="relative ml-[8%] mr-[8%] grid grid-cols-4">
          {educationData.map((item, index) => {
            const isTop = item.side === "top";

            return (
              <div
                key={item.id}
                className="relative flex h-[430px] justify-center"
              >
                {/* Node */}

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  variants={nodeVariants}
                  transition={{
                    delay: index * 0.65 + 0.35,
                  }}
                  className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
                >
                  <div
                    className="education-node h-4 w-4 rounded-full border-2 border-[#050816]"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: `0 0 0 4px ${item.color}18, 0 0 18px ${item.color}70`,
                    }}
                  />
                </motion.div>

                {/* Vertical connector */}

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  variants={verticalLineVariants}
                  transition={{
                    delay: index * 0.65 + 0.55,
                  }}
                  className={`absolute left-1/2 z-10 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent ${
                    isTop
                      ? "bottom-1/2 h-[145px] origin-bottom"
                      : "top-1/2 h-[145px] origin-top"
                  }`}
                  style={{
                    background: `linear-gradient(
                      ${isTop ? "to top" : "to bottom"},
                      transparent,
                      ${item.color}70,
                      transparent
                    )`,
                  }}
                />

                {/* Card */}

                <div
                  className={`absolute left-1/2 -translate-x-1/2 ${
                    isTop ? "bottom-[calc(50%+145px)]" : "top-[calc(50%+145px)]"
                  }`}
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.4,
                    }}
                    variants={cardVariants}
                    transition={{
                      delay: index * 0.65 + 0.7,
                    }}
                  >
                    <EducationCard item={item} />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          MOBILE TIMELINE
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-xl lg:hidden">
        {/* Vertical timeline */}

        <div className="absolute bottom-4 left-[18px] top-4 w-px bg-gradient-to-b from-cyan-400/10 via-cyan-400/50 to-fuchsia-400/10" />

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              className="relative pl-12"
            >
              {/* Node */}

              <div
                className="absolute left-[11px] top-6 z-20 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-[#050816]"
                style={{
                  backgroundColor: item.color,
                  boxShadow: `0 0 0 5px ${item.color}15, 0 0 18px ${item.color}60`,
                }}
              />

              {/* Card */}

              <EducationCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
