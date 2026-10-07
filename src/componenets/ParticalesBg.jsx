import { motion } from "framer-motion";

const random = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const particles = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  size: random(i + 1) * 4 + 2,
  x: random(i + 10) * 100,
  y: random(i + 20) * 100,
  moveX: random(i + 30) * 400 - 200,
  moveY: random(i + 40) * 400 - 200,
  duration: random(i + 50) * 15 + 25,
}));

const ParticlesBg = () => {
  return (
    <div className="fixed inset-0  overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: `
              0 0 6px rgba(255,255,255,0.9),
              0 0 14px rgba(255,255,255,0.7),
              0 0 24px rgba(255,255,255,0.4)
            `,
          }}
          animate={{
            x: [0, particle.moveX, -particle.moveX, 0],
            y: [0, particle.moveY, -particle.moveY, 0],
            opacity: [0.3, 1, 0.5, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBg;
