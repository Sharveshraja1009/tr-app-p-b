import { useState, useRef } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { Clock, GripVertical, Plus, Trash2, Sunrise, Coffee, Compass, Waves, Map, UtensilsCrossed, CheckCircle } from "lucide-react";
import { itinerarySpots } from "@/data/places";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useGsapScroll } from "@/hooks/useGsapScroll";
import { useToast } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";

const iconMap = {
  sunrise: Sunrise,
  coffee: Coffee,
  compass: Compass,
  waves: Waves,
  map: Map,
  utensils: UtensilsCrossed,
};

const dayTabs = ["Day 1", "Day 2", "Day 3"];

export default function ItineraryPlanner() {
  const [activeDay, setActiveDay] = useState(0);
  const [items, setItems] = useState(itinerarySpots);
  const [selected, setSelected] = useState(new Set(itinerarySpots.map((s) => s.id)));
  const sectionRef = useRef(null);
  const { addToast } = useToast();
  useGsapScroll(sectionRef);

  const toggleSelect = (id) => {
    const next = new Set(selected);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelected(next);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    selected.delete(id);
    setSelected(new Set(selected));
    addToast("Spot removed from itinerary", "info");
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-14" data-gsap="fadeUp">
          <Badge className="mb-3 sm:mb-4">Plan Your Trip</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-3 sm:mb-4">
            Craft Your <span className="text-gradient">Perfect Day</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Drag and reorder spots to build your dream itinerary. Toggle places
            on or off to customize your trip.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-10" data-gsap="fadeUp">
          {dayTabs.map((day, i) => (
            <button
              key={day}
              onClick={() => setActiveDay(i)}
              className={cn(
                "px-4 py-2.5 sm:px-5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 min-h-[44px]",
                activeDay === i
                  ? "bg-pondy-500 text-white shadow-lg shadow-pondy-500/25"
                  : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
              )}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="relative" data-gsap="fadeUp">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pondy-500 via-ocean-500 to-sunset-500 rounded-full hidden sm:block" />

          <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-4">
            <AnimatePresence>
              {items.map((spot, index) => {
                const Icon = iconMap[spot.icon] || Compass;
                const isSelected = selected.has(spot.id);

                return (
                  <Reorder.Item
                    key={spot.id}
                    value={spot}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20, height: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      "relative flex items-center gap-2 sm:gap-4 p-3 sm:p-4 sm:pl-16 rounded-2xl transition-all duration-300 cursor-grab active:cursor-grabbing",
                      isSelected
                        ? "glass-light dark:glass border border-pondy-500/20"
                        : "bg-gray-50 dark:bg-white/3 opacity-50"
                    )}
                  >
                    <div className="absolute left-6 w-4 h-4 rounded-full bg-pondy-500 border-4 border-white dark:border-gray-900 shadow-lg hidden sm:block" />

                    <div className="text-gray-300 dark:text-gray-600 hover:text-gray-500 transition-colors">
                      <GripVertical className="w-5 h-5" />
                    </div>

                    <div className={cn(
                      "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                      isSelected
                        ? "bg-pondy-500/10 text-pondy-600 dark:text-pondy-400"
                        : "bg-gray-100 dark:bg-white/5 text-gray-400"
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base truncate">{spot.name}</h4>
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {spot.time}
                        </span>
                        <span>{spot.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                      <button
                        onClick={() => toggleSelect(spot.id)}
                        className={cn(
                          "w-10 h-10 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all",
                          isSelected
                            ? "bg-pondy-500 text-white"
                            : "bg-gray-100 dark:bg-white/5 text-gray-400"
                        )}
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeItem(spot.id)}
                        className="w-10 h-10 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </Reorder.Item>
                );
              })}
            </AnimatePresence>
          </Reorder.Group>

          {items.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p>No spots in your itinerary. Start adding some!</p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center" data-gsap="fadeUp">
          <Button
            variant="glow"
            size="lg"
            onClick={() => addToast("Itinerary saved! You can share it with friends.", "success")}
          >
            Save Itinerary
          </Button>
        </div>
      </div>
    </section>
  );
}
