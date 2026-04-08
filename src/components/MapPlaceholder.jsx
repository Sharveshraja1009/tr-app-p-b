import { useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ZoomIn, ZoomOut, Layers } from "lucide-react";
import { useGsapScroll } from "@/hooks/useGsapScroll";

const markers = [
  { name: "Paradise Beach", x: "35%", y: "40%" },
  { name: "White Town", x: "55%", y: "30%" },
  { name: "Auroville", x: "70%", y: "55%" },
  { name: "Promenade", x: "48%", y: "65%" },
];

export default function MapPlaceholder() {
  const ref = useRef(null);
  useGsapScroll(ref);

  return (
    <div ref={ref} className="py-12 sm:py-24" data-gsap="fadeUp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-ocean-900/50 to-pondy-900/50 h-[250px] sm:h-[350px] md:h-[500px]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

          {markers.map((marker, i) => (
            <motion.div
              key={marker.name}
              className="absolute z-10 group cursor-pointer"
              style={{ left: marker.x, top: marker.y }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-pondy-500/20 rounded-full animate-ping" />
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-pondy-500 flex items-center justify-center shadow-lg shadow-pondy-500/40 relative">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-gray-900/90 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {marker.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900/90" />
                </div>
              </div>
            </motion.div>
          ))}

          <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
            {[ZoomIn, ZoomOut, Layers, Navigation].map((Icon, i) => (
              <button
                key={i}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>

          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl glass text-white text-xs sm:text-sm z-20">
            <span className="text-gray-400 hidden sm:inline">Map Integration</span>
            <span className="mx-2 text-white/20 hidden sm:inline">|</span>
            <span className="text-pondy-400 font-medium">Pondicherry, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
