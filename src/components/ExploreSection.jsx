import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { places, categories } from "@/data/places";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useGsapScroll } from "@/hooks/useGsapScroll";

export default function ExploreSection({ limit }) {
  const [active, setActive] = useState("All");
  const sectionRef = useRef(null);
  useGsapScroll(sectionRef);

  const filtered = active === "All" ? places : places.filter((p) => p.category === active);
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section ref={sectionRef} className="py-12 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-14" data-gsap="fadeUp">
          <Badge className="mb-3 sm:mb-4">Hidden Gems of Pondy</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-3 sm:mb-4">
            Explore <span className="text-gradient">Secret Spots</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Discover the places locals love — from hidden beaches to charming
            French-quarter cafés
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12 px-2" data-gsap="fadeUp">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3.5 py-2 sm:px-5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-pondy-500 text-white shadow-lg shadow-pondy-500/25"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {displayed.map((place) => (
              <motion.div
                key={place.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group h-full">
                  <CardImage src={place.image} alt={place.title} className="h-48" />
                  <CardContent>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={place.category === "Beach" ? "ocean" : place.category === "Cafe" ? "sunset" : "default"}>
                        {place.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-yellow-500 text-sm">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        {place.rating}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-1.5 group-hover:text-pondy-600 dark:group-hover:text-pondy-400 transition-colors">
                      {place.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                      {place.description}
                    </p>
                    <Link to="/explore" className="inline-flex items-center gap-1 text-pondy-600 dark:text-pondy-400 text-sm font-medium group/link">
                      <MapPin className="w-3.5 h-3.5" />
                      View More
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
