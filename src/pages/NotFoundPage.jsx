import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <img
          src="/assets/web_logo.png"
          alt="Pondy Belle"
          className="w-20 h-20 rounded-2xl object-cover mx-auto mb-6 shadow-lg shadow-pondy-500/30"
        />
        <h1 className="text-6xl sm:text-7xl font-extrabold font-display text-gradient mb-4">404</h1>
        <p className="text-lg sm:text-xl font-semibold mb-2">Page Not Found</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Looks like you wandered off the map. Let&apos;s get you back to exploring Pondicherry!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/">
            <Button variant="glow" size="lg">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Link to="/explore">
            <Button variant="outline" size="lg">
              <ArrowLeft className="w-4 h-4" />
              Explore Spots
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
