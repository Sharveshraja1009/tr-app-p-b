import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Bike, Hotel, CalendarDays, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const features = [
  {
    icon: MapPin,
    title: "Hidden Spots",
    description: "Discover secret beaches, charming cafés, and temples that only locals know about.",
    link: "/explore",
    cta: "Explore Now",
    gradient: "from-pondy-500 to-pondy-600",
    shadow: "shadow-pondy-500/20",
  },
  {
    icon: Bike,
    title: "Bike Rentals",
    description: "Rent scooters, cruisers, and sport bikes to explore Pondicherry at your own pace.",
    link: "/rentals",
    cta: "View Bikes",
    gradient: "from-ocean-500 to-ocean-600",
    shadow: "shadow-ocean-500/20",
  },
  {
    icon: Hotel,
    title: "Premium Stays",
    description: "Heritage boutiques to beachfront resorts — find your perfect accommodation.",
    link: "/stays",
    cta: "Find Stays",
    gradient: "from-sunset-500 to-sunset-600",
    shadow: "shadow-sunset-500/20",
  },
  {
    icon: CalendarDays,
    title: "Itinerary Planner",
    description: "Build a day-wise plan with drag-and-drop. Craft the perfect Pondy trip.",
    link: "/itinerary",
    cta: "Plan Trip",
    gradient: "from-purple-500 to-purple-600",
    shadow: "shadow-purple-500/20",
  },
];

const highlights = [
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    title: "Paradise Beach",
    tag: "Beach",
  },
  {
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    title: "French Quarter Cafés",
    tag: "Cafe",
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    title: "Heritage Stays",
    tag: "Hotel",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="py-10 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-14"
          >
            <Badge className="mb-3 sm:mb-4">Everything You Need</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-3 sm:mb-4">
              Your Pondy <span className="text-gradient">Adventure Hub</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2">
              Plan every part of your Pondicherry trip from one place
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={feature.link} className="block group">
                  <div className="p-5 sm:p-6 rounded-2xl glass-light dark:glass border border-white/10 hover:border-pondy-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 ${feature.shadow} shadow-lg`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-pondy-600 dark:group-hover:text-pondy-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-pondy-600 dark:text-pondy-400">
                      {feature.cta}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-gray-50/50 dark:bg-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pondy-500/3 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-3">
              A Glimpse of <span className="text-gradient">Pondicherry</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative rounded-2xl overflow-hidden group h-52 sm:h-64"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="mb-2 bg-white/20 text-white backdrop-blur-sm border-0">{item.tag}</Badge>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/explore">
              <Button variant="glow" size="lg" className="group">
                Explore All Spots
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
