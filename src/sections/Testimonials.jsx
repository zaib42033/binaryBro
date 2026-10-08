import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaCheckCircle } from "react-icons/fa";
import person1 from "../assets/person-1.jpg";
import person2 from "../assets/person-2.jpg";
import person3 from "../assets/person-3.jpg";
import person4 from "../assets/person-4.jpg";

const testimonials = [
  {
    id: 1,
    name: "Mr Saud",
    role: "Client",
    image: person1,
    message:
      "Working with him was a smooth experience. He understood the idea quickly and turned it into a clean website.",
    color: "#22d3ee",
  },
  {
    id: 2,
    name: "Mr Abid",
    role: "Client",
    image: person2,
    message:
      "The design was clean, modern and responsive. The final result was much better than I expected.",
    color: "#8b5cf6",
  },
  {
    id: 3,
    name: "Mr Ali",
    role: "Client",
    image: person3,
    message:
      "Very creative work with great attention to detail. Everything felt natural and easy to use.",
    color: "#ec4899",
  },
  {
    id: 4,
    name: "Mr Khan",
    role: "Client",
    image: person4,
    message:
      "Communication was easy and the final website looked professional on both desktop and mobile.",
    color: "#22c55e",
  },
];

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="group relative w-full"
    >

      {/* Main Card */}
      <div
        className="
          testimonial-card
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#090d16]
          p-5
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:border-white/20
        "
      >
        {/* Soft background glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-32
            w-32
            rounded-full
            opacity-10
            blur-3xl
            transition-opacity
            duration-500
            group-hover:opacity-25
          "
          style={{
            backgroundColor: testimonial.color,
          }}
        />

        {/* Top Section */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Profile */}
            <div
              className="h-12 w-12 overflow-hidden rounded-full border-2 bg-slate-800"
              style={{
                borderColor: testimonial.color,
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Name */}
            <div>
              <h3 className="text-sm font-bold text-slate-200 sm:text-base">
                {testimonial.name}
              </h3>

              <p className="mt-0.5 text-[10px] text-slate-500">
                {testimonial.role}
              </p>
            </div>
          </div>

          {/* Quote */}
          <FaQuoteLeft
            className="text-lg opacity-40"
            style={{
              color: testimonial.color,
            }}
          />
        </div>

        {/* Stars */}
        <div className="relative z-10 mt-4 flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className="text-[10px]"
              style={{
                color: testimonial.color,
              }}
            />
          ))}
        </div>

        {/* Message */}
        <p className="relative z-10 mt-3 text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
          "{testimonial.message}"
        </p>

        {/* Footer */}
        <div className="relative z-10 mt-5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <FaCheckCircle
              className="text-[10px]"
              style={{
                color: testimonial.color,
              }}
            />

            <span className="text-[9px] uppercase tracking-widest text-slate-600">
              Verified
            </span>
          </div>

          <span
            className="h-px w-10 transition-all duration-300 group-hover:w-16"
            style={{
              backgroundColor: testimonial.color,
            }}
          />
        </div>

        {/* Bottom Glow Line */}
        <div
          className="absolute bottom-0 left-[10%] right-[10%] h-px"
          style={{
            background: `linear-gradient(
              90deg,
              transparent,
              ${testimonial.color},
              transparent
            )`,
          }}
        />
      </div>
    </motion.div>
  );
};

/* =========================================================
   CENTER CIRCLE
========================================================= */

const ReactionCircle = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Aura */}
      <div className="reaction-ring reaction-ring-one" />
      <div className="reaction-ring reaction-ring-two" />
      {/* Circle */}
      <div
        className="
          hidden
          relative
          z-10
          lg:flex
          h-56
          w-56
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/30
          bg-[#07101a]
          shadow-[0_0_60px_rgba(34,211,238,0.08)]
        "
      >
        {/* Inner Circle */}
        <div
          className="
            absolute
            inset-3
            rounded-full
            border
            border-white/5
          "
        />

        <div className="relative z-10 text-center">
          <FaQuoteLeft className="mx-auto mb-4 text-xl text-cyan-400/60" />

          <h2 className="text-2xl font-bold leading-tight bg-gradient-to-tr from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            People's
          </h2>

          <h2 className="text-2xl font-bold leading-tight bg-gradient-to-bl from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Reaction
          </h2>

          <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-slate-600">
            What they say
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   MAIN TESTIMONIAL SECTION
========================================================= */

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="
        relative
        min-h-screen
        sm:h-fit
        md:min-h-screen
        w-full
        overflow-hidden
        bg-[#050816]
        px-6
        py-2
        sm:py-10
        text-white
        md:py-2
        sm:px-8
        lg:px-6
      "
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <div className="mx-auto mb-2 max-w-xl text-center lg:mb-5">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-cyan-400/50" />

          <span className="text-[9px] uppercase tracking-[0.3em] text-cyan-400">
            Testimonials
          </span>

          <span className="h-px w-8 bg-cyan-400/50" />
        </div>

        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-tr from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          WHAT PEOPLE SAY
        </h1>

        <p className="mt-3 text-xs leading-5 text-slate-500 sm:text-sm">
          A few words from people I have worked with.
        </p>
      </div>

      {/* =================================================
          DESKTOP
      ================================================= */}

      <div className="mx-auto hidden max-w-6xl lg:block">
        <div
          className="
            grid
            grid-cols-[1fr_250px_1fr]
            grid-rows-[1fr_1fr]
            items-center
            gap-x-7
            gap-y-5
          "
        >
          {/* Top Left */}
          <TestimonialCard testimonial={testimonials[0]} index={0} />

          {/* Center Circle */}
          <div className="row-span-2 flex items-center justify-center">
            <ReactionCircle />
          </div>

          {/* Top Right */}
          <TestimonialCard testimonial={testimonials[1]} index={1} />

          {/* Bottom Left */}
          <TestimonialCard testimonial={testimonials[2]} index={2} />

          {/* Bottom Right */}
          <TestimonialCard testimonial={testimonials[3]} index={3} />
        </div>
      </div>

      {/* =================================================
          TABLET / MOBILE
      ================================================= */}

      <div className="mx-auto max-w-xl lg:hidden">
        {/* Center Circle */}
        <div className="mb-12 flex justify-center">
          <ReactionCircle />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
