import { useRef } from "react";
import { motion } from "framer-motion";
import { Bike, IndianRupee, CheckCircle, XCircle } from "lucide-react";
import { bikes } from "@/data/places";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useGsapScroll } from "@/hooks/useGsapScroll";
import { useToast } from "@/components/ui/Toast";

export default function BikeRentalSection() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const { addToast } = useToast();
  useGsapScroll(sectionRef);

  const handleBook = (bike) => {
    if (bike.available) {
      addToast(`Booking request sent for ${bike.name}!`, "success");
    } else {
      addToast(`${bike.name} is currently unavailable`, "error");
    }
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-24 relative bg-gray-50/50 dark:bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pondy-500/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14" data-gsap="fadeUp">
          <Badge variant="ocean" className="mb-4">
            <Bike className="w-3.5 h-3.5 mr-1" />
            Ride Pondicherry
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-3 sm:mb-4">
            Rent Your <span className="text-gradient">Perfect Ride</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2">
            From scooters to cruisers — explore Pondy at your own pace with our
            handpicked fleet
          </p>
        </div>

        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {bikes.map((bike, i) => (
            <motion.div
              key={bike.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full"
            >
              <Card className="group h-full relative overflow-visible">
                {!bike.available && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-red-500/90 text-white text-xs">Unavailable</Badge>
                  </div>
                )}
                <CardImage src={bike.image} alt={bike.name} className="h-48" />
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="ocean">{bike.type}</Badge>
                    <div className="flex items-center gap-0.5 text-sm font-semibold text-pondy-600 dark:text-pondy-400">
                      <IndianRupee className="w-3.5 h-3.5" />
                      {bike.price}
                      <span className="text-xs text-gray-400 font-normal">/day</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{bike.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    {bike.available ? (
                      <span className="flex items-center gap-1 text-green-500 text-xs font-medium">
                        <CheckCircle className="w-3.5 h-3.5" /> Available
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-400 text-xs font-medium">
                        <XCircle className="w-3.5 h-3.5" /> Booked Out
                      </span>
                    )}
                  </div>
                  <Button
                    variant={bike.available ? "glow" : "outline"}
                    size="sm"
                    className="w-full"
                    onClick={() => handleBook(bike)}
                    disabled={!bike.available}
                  >
                    {bike.available ? "Book Now" : "Notify Me"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
