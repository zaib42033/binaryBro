import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "Nova Elec",
    type: "E-Commerce",
    description:
      "A modern electronics shopping experience with a clean and interactive interface.",
    image: "src/assets/project-1.png",
    image2: "src/assets/project-1.1.png",
    color: "#22d3ee",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://novaelec.netlify.app/",
  },
  {
    id: "02",
    title: "Resturant",
    type: "Web Application",
    description:
      "A modern restaurant ordering system with a user-friendly interface.",
    image: "src/assets/project-2.png",
    image2: "src/assets/project-2.1.png",
    color: "#a78bfa",
    tech: ["React", "API", "CSS"],
    link: "#",
  },
  {
    id: "03",
    title: "Creative Portfolio",
    type: "Portfolio",
    description:
      "A personal portfolio focused on clean design, typography and subtle interaction.",
    image: "src/assets/project-3.png",
    image2: "src/assets/project-3.1.png",
    color: "#f472b6",
    tech: ["React", "Framer Motion", "Tailwind"],
    link: "#",
  },
  {
    id: "04",
    title: "Dashboard",
    type: "Web Application",
    description:
      "A responsive dashboard designed around clarity and simple interaction.",
    image: "src/assets/project-4.png",
    image2: "src/assets/project-4.1.png",
    color: "#f59e0b",
    tech: ["React", "Charts", "Tailwind"],
    link: "#",
  },
  {
    id: "05",
    title: "Landing Page",
    type: "Frontend",
    description:
      "A polished responsive landing page with strong visual hierarchy.",
    image: "src/assets/project-5.png",
    image2: "src/assets/project-5.1.png",
    color: "#4ade80",
    tech: ["React", "CSS", "JavaScript"],
    link: "#",
  },
];

/* =====================================================
   PROJECT CARD
===================================================== */

function ProjectCard({ project }) {
  return (
    <div className="relative h-full w-full md:pb-4">
      {/* CARD */}
      <div className="relative h-full md:h-full w-full overflow-hidden bg-cover rounded-[22px] border border-white/10 bg-[#080b14]">
        {/* IMAGE */}

        <img
          src={project.image}
          alt={project.title}
          className="hidden md:flex absolute inset-0 h-full w-full object-cover"
        />
        <img
          src={project.image2}
          alt={project.title}
          className="flex md:hidden absolute inset-0 h-full w-full object-cover"
        />

        {/* IMAGE OVERLAY */}

        <div className="absolute inset-0 bg-[#050816]/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/55 to-transparent" />

        {/* CONTENT */}

        <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-8 lg:p-10">
          {/* TOP */}

          <div className="flex items-end justify-end">
            <span className="text-2xl font-bold text-white/[0.8] sm:text-5xl">
              {project.id}
            </span>
          </div>

          {/* BOTTOM */}

          <div>
            <h3 className="text-3xl text-slate-200 font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {project.title}
            </h3>

            <div className="mt-2">
              <span
                className="rounded-full border px-3 py-1 font-semibold text-[12px] uppercase tracking-[0.18em]"
                style={{
                  color: project.color,
                  borderColor: `${project.color}55`,
                  backgroundColor: `${project.color}12`,
                }}
              >
                {project.type}
              </span>
            </div>

            <p className="mt-2 max-w-xl text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
              {project.description}
            </p>

            {/* TECHNOLOGIES */}

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[8px] text-slate-300 sm:text-[10px]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BUTTONS */}

            <div className="mt-4 flex gap-2 sm:mt-5">
              <a
                href={project.link}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-[9px] font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5 sm:px-4 sm:py-2.5 sm:text-xs"
                style={{
                  backgroundColor: project.color,
                }}
              >
                View Project
                <FaArrowRight />
              </a>

              <a
                href="#"
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[9px] font-semibold text-white transition duration-300 hover:border-white/30 sm:px-4 sm:py-2.5 sm:text-xs"
              >
                <FaGithub />
                Code
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}

        <div
          className="absolute bottom-0 left-[8%] right-[8%] h-px"
          style={{
            background: `linear-gradient(
              90deg,
              transparent,
              ${project.color},
              transparent
            )`,
          }}
        />
      </div>
    </div>
  );
}

/* =====================================================
   PROJECTS
===================================================== */

export default function Projects() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.7,
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative h-[500vh] w-full bg-[#050816]"
    >
      {/* STICKY SCREEN */}

      <div className="sticky top-10 md:top-2 gap-0 h-screen w-full overflow-hidden bg-[#050816]">
        {/* =================================================
            HEADING
        ================================================= */}

        <div className=" left-0 right-0 top-0 z-100 text-center">
          <div className="lg:mt-0 mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-cyan-400/50" />

            <span className="text-[9px] uppercase tracking-[0.3em] text-cyan-400">
              Selected Work
            </span>

            <span className="h-px w-7 bg-cyan-400/50" />
          </div>

          <h2 className="mt-1 text-3xl bg-gradient-to-tr from-cyan-400 to-blue-600 bg-clip-text text-transparent font-bold tracking-tight sm:text-5xl">
            PROJECTS
          </h2>
        </div>

        {/* =================================================
            DESKTOP
        ================================================= */}

        <div className="absolute inset-0 hidden items-center justify-center px-6 pt-[15vh] md:flex">
          <div className="relative aspect-video w-[72vw] max-w-[900px]">
            {projects.map((project, index) => {
              const isFirst = index === 0;
              const isLast = index === projects.length - 1;

              const center = index / (projects.length - 1);

              let input;
              let output;

              /*
               * FIRST CARD
               */

              if (isFirst) {
                input = [0, 0.1, 0.25];
                output = ["0vw", "0vw", "-105vw"];
              } else if (isLast) {
                /*
                 * LAST CARD
                 *
                 * IMPORTANT:
                 * After reaching center it NEVER
                 * moves away again.
                 */
                input = [0.75, 0.9, 1];
                output = ["105vw", "0vw", "0vw"];
              } else {
                /*
                 * MIDDLE CARDS
                 */
                input = [center - 0.25, center, center + 0.25];

                output = ["105vw", "0vw", "-105vw"];
              }

              const x = useTransform(smoothProgress, input, output);

              return (
                <motion.div
                  key={project.id}
                  style={{ x }}
                  className="absolute inset-0"
                >
                  <ProjectCard project={project} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =================================================
            MOBILE
        ================================================= */}

        <div className="absolute inset-0 flex items-center justify-center px-4 pb-20 pt-[10vh] md:hidden">
          <div className="relative h-[70vh] w-full max-w-[390px]">
            {projects.map((project, index) => {
              const isFirst = index === 0;
              const isLast = index === projects.length - 1;

              const center = index / (projects.length - 1);

              let input;
              let output;

              /*
               * FIRST CARD
               */

              if (isFirst) {
                input = [0, 0.1, 0.25];
                output = ["0vw", "0vw", "-105vw"];
              } else if (isLast) {
                /*
                 * LAST CARD
                 */
                input = [0.75, 0.9, 1];
                output = ["105vw", "0vw", "0vw"];
              } else {
                /*
                 * MIDDLE CARDS
                 */
                input = [center - 0.25, center, center + 0.25];

                output = ["105vw", "0vw", "-105vw"];
              }

              const x = useTransform(smoothProgress, input, output);

              return (
                <motion.div
                  key={project.id}
                  style={{ x }}
                  className="absolute inset-0"
                >
                  <ProjectCard project={project} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =================================================
            INDICATORS
        ================================================= */}

        <div className="absolute bottom-[10vh] lg:bottom-[5vh] left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 ">
          {projects.map((project, index) => {
            const center = index / (projects.length - 1);

            const width = useTransform(
              smoothProgress,
              [Math.max(0, center - 0.1), center, Math.min(1, center + 0.1)],
              [7, 25, 7],
            );

            return (
              <motion.span
                key={project.id}
                style={{
                  width,
                  backgroundColor: project.color,
                }}
                className="h-1 rounded-full opacity-70"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

