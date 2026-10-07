import { motion } from "framer-motion";
import TypingText from "./TypingText";
import { FaGithub, FaWhatsapp, FaInstagram, FaFacebook, } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-[calc(80vh-60px)] px-6 sm:px-10 lg:px-16 lg:pt-5">
      <div className="mx-auto flex flex-col-reverse md:flex-row min-h-[calc(80vh-60px)] max-w-6xl items-center justify-end gap-0 lg:gap-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:max-w-2xl"
        >
          <div className="pb-2 text-xl font-bold bg-gradient-to-br from-cyan-400 to-blue-600 bg-clip-text text-transparent sm:text-2xl md:text-3xl">
            <TypingText />
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-200 sm:text-5xl md:text-6xl">
            Hello, I'm
            <br />
            <span className="bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Orangzaib Malik
            </span>
          </h1>

          <p className="mt-1 md:mt-3 max-w-xl font-medium text-base leading-7 text-slate-400 sm:text-lg">
            My name is Orangzaib, I am a Frontend Developer and UI/UX Designer.
            I have a passion for creating beautiful and functional websites and
            applications.
          </p>

          <div className="mt-3 md:mt-5 flex flex-wrap items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg bg-gradient-to-bl from-cyan-600 to-blue-600  px-6 py-3 text-sm text-slate-100 hover:white font-semibold hover:bg-cyan-300 shadow-lg shadow-cyan-500/30 hover:from-cyan-600 hover:via-blue-400 hover:to-cyan-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]"
            >
              Hire Me
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg cursor-pointer border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-900"
            >
              View Projects
            </motion.a>
          </div>

          <div className="mt-3 mb-3  md:mt-5 flex gap-5">
            <a href="#" aria-label="GitHub" className="about-social">
              <FaGithub />
            </a>

            <a href="#" aria-label="LinkedIn" className="about-social">
              <FaWhatsapp />
            </a>

            <a href="#" aria-label="Instagram" className="about-social">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Instagram" className="about-social">
              <FaFacebook />
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-[300px] shrink-0 justify-center md:flex lg:w-[430px] "
        >
          <img
            src={"src/assets/Dpimg.png"}
            alt="Orangzaib Malik"
            className="w-full max-w-[410px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
