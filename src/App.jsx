import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingActionButton, ChatbotIcon } from "@/components/FloatingActions";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import ExplorePage from "@/pages/ExplorePage";
import RentalsPage from "@/pages/RentalsPage";
import StaysPage from "@/pages/StaysPage";
import ItineraryPage from "@/pages/ItineraryPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/explore"
            element={
              <PageTransition>
                <ExplorePage />
              </PageTransition>
            }
          />
          <Route
            path="/rentals"
            element={
              <PageTransition>
                <RentalsPage />
              </PageTransition>
            }
          />
          <Route
            path="/stays"
            element={
              <PageTransition>
                <StaysPage />
              </PageTransition>
            }
          />
          <Route
            path="/itinerary"
            element={
              <PageTransition>
                <ItineraryPage />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
      <FloatingActionButton />
      <ChatbotIcon />
    </div>
  );
}
