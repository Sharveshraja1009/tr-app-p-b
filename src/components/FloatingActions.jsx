import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Plus, Bike, Hotel, Map, X } from "lucide-react";
import { Link } from "react-router-dom";

const quickActions = [
  { icon: Map, label: "Explore", path: "/explore", color: "from-pondy-500 to-pondy-600" },
  { icon: Bike, label: "Rent Bike", path: "/rentals", color: "from-ocean-500 to-ocean-600" },
  { icon: Hotel, label: "Find Stay", path: "/stays", color: "from-sunset-500 to-sunset-600" },
];

export function FloatingActionButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 safe-right safe-bottom">
      <AnimatePresence>
        {open &&
          quickActions.map((action, i) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
            >
              <Link
                to={action.path}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 group"
              >
                <span className="px-3 py-1.5 rounded-lg bg-gray-900/80 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {action.label}
                </span>
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
              </Link>
            </motion.div>
          ))}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-pondy-500 to-ocean-600 flex items-center justify-center shadow-lg shadow-pondy-500/30 hover:shadow-pondy-500/50 transition-shadow"
      >
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          {open ? <X className="w-6 h-6 text-white" /> : <Plus className="w-6 h-6 text-white" />}
        </motion.div>
      </motion.button>
    </div>
  );
}

export function ChatbotIcon() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-sunset-500 to-sunset-600 flex items-center justify-center shadow-lg shadow-sunset-500/30 hover:shadow-sunset-500/50 transition-shadow safe-right safe-bottom"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
    </motion.button>
  );
}
