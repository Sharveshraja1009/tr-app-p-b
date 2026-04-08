import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bike, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/Button";

const floatingElements = [
  { emoji: "🏖️", x: "10%", y: "20%", delay: 0, size: "text-2xl sm:text-4xl" },
  { emoji: "🛵", x: "85%", y: "30%", delay: 1, size: "text-xl sm:text-3xl" },
  { emoji: "☕", x: "75%", y: "70%", delay: 2, size: "text-xl sm:text-3xl" },
  { emoji: "🌅", x: "15%", y: "75%", delay: 0.5, size: "text-2xl sm:text-4xl" },
  { emoji: "🐚", x: "50%", y: "15%", delay: 1.5, size: "text-lg sm:text-2xl" },
];

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-gradient-orb",
        { scale: 0.8, opacity: 0.3 },
        {
          scale: 1.2,
          opacity: 0.6,
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 1,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] sm:min-h-screen flex items-start pt-24 sm:pt-0 sm:items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-ocean-900 to-gray-950" />

      <div className="hero-gradient-orb absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-pondy-500/20 rounded-full blur-3xl" />
      <div className="hero-gradient-orb absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-ocean-500/20 rounded-full blur-3xl" />
      <div className="hero-gradient-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] bg-sunset-500/10 rounded-full blur-3xl" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute ${el.size} pointer-events-none select-none opacity-20`}
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {el.emoji}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass mb-6 sm:mb-8 text-xs sm:text-sm text-pondy-300"
        >
          <Sparkles className="w-4 h-4" />
          <span>Your Pondicherry Adventure Awaits</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-display leading-tight mb-4 sm:mb-6"
        >
          <span className="text-white">Discover Hidden</span>
          <br />
          <span className="text-gradient">Pondicherry</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
        >
          Plan, Ride, Stay — All in One Place. Uncover secret beaches, rent the
          perfect ride, and find your dream stay in the French Riviera of the
          East.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/explore">
            <Button variant="glow" size="lg" className="group">
              Explore Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/rentals">
            <Button variant="glass" size="lg" className="group">
              <Bike className="w-4 h-4" />
              Rent a Bike
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10 sm:mt-16 flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div>Hidden Spots</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">20+</div>
            <div>Bike Options</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">30+</div>
            <div>Premium Stays</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
