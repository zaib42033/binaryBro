import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    color: "text-[#61DAFB]",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-[#F7DF1E]",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-[#E34F26]",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "text-[#1572B6]",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "text-[#38BDF8]",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    color: "text-[#7952B3]",
  },
  {
    name: "REST API",
    icon: <SiPostman />,
    color: "text-[#FF6C37]",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-[#68A063]",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "text-white",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-[#47A248]",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-white",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-[#F05032]",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex w-full items-center justify-center overflow-hidden bg-[#050816] px-4 py-10 text-white min-h-[70vh] lg:min-h-screen lg:py-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[55vw] max-h-[500px] w-[55vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[100px]" />

      {/* Responsive Orbit Container */}
      <div className="relative aspect-square w-[94vw] max-w-[650px]">
        {/* ================= CENTER ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute left-1/2 top-1/2 z-20 flex h-[29%] w-[29%] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        >
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-cyan-400/30 " />

          {/* Inner ring */}
          <div className="absolute inset-[8%] rounded-full border border-white/10 bg-[#080b14]" />

          {/* Center glow */}
          <div className="absolute inset-[20%] rounded-full bg-cyan-400/10 blur-2xl" />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center ">
            <span className="mb-1 text-[9px] font-medium uppercase tracking-[0.25em] text-cyan-400 sm:text-xs">
              My
            </span>

            <h2 className="text-[clamp(1.2rem,4vw,2.2rem)] font-bold leading-none bg-gradient-to-tr from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Web
            </h2>

            <h2 className="text-[clamp(1.2rem,4vw,2.2rem)] font-bold leading-none bg-gradient-to-bl from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Skills
            </h2>

            <div className="mt-2 h-[2px] w-7 rounded-full bg-cyan-400 sm:w-10" />
          </div>
        </motion.div>

        {/* ================= ROTATING ORBIT ================= */}

        <div className="skills-orbit absolute inset-[5%] rounded-full border border-white/[0.08]">
          {/* Inner orbit */}
          <div className="absolute inset-[12%] rounded-full border border-white/[0.035]" />

          {skills.map((skill, index) => {
            const angle = (360 / skills.length) * index;
            const radians = (angle * Math.PI) / 180;

            const x = Math.sin(radians) * 43;
            const y = -Math.cos(radians) * 43;

            return (
              <div
                key={skill.name}
                className="absolute left-1/2 top-1/2 h-[clamp(48px,10vw,76px)] w-[clamp(48px,10vw,76px)] -translate-x-1/2 -translate-y-1/2"
                style={{
                  marginLeft: `${x}%`,
                  marginTop: `${y}%`,
                }}
              >
                {/* Counter rotation */}
                <div className="skills-counter h-full w-full">
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      y: -3,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="group flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-full border border-white/15 bg-[#080b14] shadow-[0_5px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#0c1220] hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]"
                  >
                    <span
                      className={`text-[clamp(1.1rem,3vw,1.7rem)] ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      {skill.icon}
                    </span>

                    <span className="mt-1 max-w-[90%] truncate text-[8px] font-medium text-slate-400 sm:text-[10px]">
                      {skill.name}
                    </span>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
