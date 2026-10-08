import { motion } from "framer-motion";
import dpImage2 from "../assets/dpimage.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-max lg:h-screen w-full overflow-hidden bg-[#050816] px-6 pt-5 sm:pt-10 md:pt-15 lg:pt-20  text-white sm:px-20 lg:px-16"
    >
      <div className="flex min-h-[calc(100vh-160px)] max-w-6xl items-center z-1">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-25">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative"
            >
              {/* subtle glow */}
              <div className="absolute -inset-2 rounded-2xl bg-cyan-400/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 cursor-pointer" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 transition-colors duration-300 group-hover:border-cyan-400/30 cursor-pointer">
                <img
                  src={dpImage2}
                  alt="Salim Malik"
                  className="h-64 w-52 rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-72 sm:w-56 lg:h-80 lg:w-64"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl flex flex-col items-center md:items-start"
          >
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-cyan-400/60" />

              <span className="text-lg font-medium uppercase tracking-[0.3em] text-cyan-400">
                About Me
              </span>

              <span className="h-px w-8 bg-cyan-400/60" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl self-start bg-linear-to-tr from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Salim Malik
            </h1>

            <h3 className="mt-2 text-xl font-medium text-slate-200 sm:text-2xl self-start">
              Frontend Web Developer
            </h3>

            <p className="mt-3 lg:mt-5 text-base font-medium leading-7 text-slate-400 sm:text-lg">
              Hi, I'm Salim Malik and I live in Ahmad Pur East and I am doing
              ICS. I am also a student of Islamic studies.And I am obsessed with
              coding from my childhood and that's why now I am a very passionate
              frontend web developer.
            </p>

            {/* Information Cards */}
            <div className="mt-8 mb-5 flex flex-col md:flex-row gap-3">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group px-27 md:px-16.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] cursor-pointer flex flex-col items-center"
              >
                <p className="text-sm text-slate-500 transition-colors group-hover:text-cyan-400">
                  Experience
                </p>
                <h3 className="mt-1 font-semibold text-slate-200">1+ Year</h3>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group px-27 md:px-16.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] cursor-pointer flex flex-col items-center"
              >
                <p className="text-sm text-slate-500 transition-colors group-hover:text-cyan-400">
                  Specialty
                </p>
                <h3 className="mt-1 font-semibold text-slate-200">Frontend</h3>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group px-27 md:px-16.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] cursor-pointer flex flex-col items-center"
              >
                <p className="text-sm text-slate-500 transition-colors group-hover:text-cyan-400">
                  Primary Focus
                </p>
                <h3 className="mt-1 font-semibold text-slate-200">
                  Performance
                </h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
