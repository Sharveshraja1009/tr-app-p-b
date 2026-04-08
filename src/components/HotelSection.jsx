import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, Wifi, Waves, UtensilsCrossed, Dumbbell, IndianRupee, Phone, Eye } from "lucide-react";
import { hotels } from "@/data/places";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useGsapScroll } from "@/hooks/useGsapScroll";
import { useToast } from "@/components/ui/Toast";

const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹3000", min: 0, max: 3000 },
  { label: "₹3000–₹5000", min: 3000, max: 5000 },
  { label: "₹5000+", min: 5000, max: Infinity },
];

const ratingOptions = [
  { label: "All", min: 0 },
  { label: "4.5+", min: 4.5 },
  { label: "4.7+", min: 4.7 },
];

export default function HotelSection() {
  const [priceFilter, setPriceFilter] = useState(0);
  const [ratingFilter, setRatingFilter] = useState(0);
  const sectionRef = useRef(null);
  const { addToast } = useToast();
  useGsapScroll(sectionRef);

  const filtered = hotels.filter((h) => {
    const pRange = priceRanges[priceFilter];
    const rMin = ratingOptions[ratingFilter].min;
    return h.price >= pRange.min && h.price <= pRange.max && h.rating >= rMin;
  });

  return (
    <section ref={sectionRef} className="py-12 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-14" data-gsap="fadeUp">
          <Badge variant="sunset" className="mb-3 sm:mb-4">Premium Stays</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-3 sm:mb-4">
            Find Your <span className="text-gradient">Dream Stay</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Heritage boutiques to beachfront resorts — handpicked accommodations
            for every budget
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2" data-gsap="fadeUp">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">Price:</span>
            <div className="flex gap-1 sm:gap-1.5 flex-wrap justify-center">
              {priceRanges.map((range, i) => (
                <button
                  key={range.label}
                  onClick={() => setPriceFilter(i)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                    priceFilter === i
                      ? "bg-sunset-500 text-white shadow-lg shadow-sunset-500/25"
                      : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">Rating:</span>
            <div className="flex gap-1 sm:gap-1.5 flex-wrap justify-center">
              {ratingOptions.map((opt, i) => (
                <button
                  key={opt.label}
                  onClick={() => setRatingFilter(i)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                    ratingFilter === i
                      ? "bg-yellow-500 text-white shadow-lg shadow-yellow-500/25"
                      : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((hotel) => (
              <motion.div
                key={hotel.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group h-full">
                  <div className="relative">
                    <CardImage src={hotel.image} alt={hotel.name} className="h-52" />
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg glass text-white text-sm font-semibold">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        {hotel.rating}
                      </div>
                    </div>
                  </div>
                  <CardContent>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-pondy-600 dark:group-hover:text-pondy-400 transition-colors">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      {hotel.location}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {hotel.amenities.map((a) => (
                        <span
                          key={a}
                          className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-xs text-gray-500 dark:text-gray-400"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3">
                      <div className="flex items-center text-lg sm:text-xl font-bold text-pondy-600 dark:text-pondy-400">
                        <IndianRupee className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        {hotel.price.toLocaleString()}
                        <span className="text-xs text-gray-400 font-normal ml-1">/night</span>
                      </div>
                      <div className="flex gap-2 w-full xs:w-auto">
                        <Button variant="outline" size="sm" className="min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0">
                          <Eye className="w-3.5 h-3.5" />
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          className="flex-1 xs:flex-initial min-h-[44px] sm:min-h-0"
                          onClick={() => addToast(`Contacting ${hotel.name}...`, "info")}
                        >
                          <Phone className="w-3.5 h-3.5" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">No hotels match your filters. Try adjusting them!</p>
          </div>
        )}
      </div>
    </section>
  );
}
