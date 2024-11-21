import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../component/Loading.jsx";
import Hero from "../component/Hero.jsx";
import Hero2 from "../component/Hero2.jsx";
import About from "../component/About.jsx";
import Services from "../component/Services.jsx";
import Staff from "../component/Staff.jsx";
import NavBar from "../component/navbar.tsx";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true); // Show loading screen
  const [showHome2, setShowHome2] = useState(false); // Delay rendering of Home2
  const [showNavBar, setShowNavBar] = useState(false); // Delay rendering of NavBar

  useEffect(() => {
    // Timer to remove loader
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
      // Timer to render Home2 after loader
      setTimeout(() => {
        setShowHome2(true);
        // Timer to render NavBar after Home2
        setTimeout(() => {
          setShowNavBar(true);
        }, 500); // Delay for NavBar
      }, 1500); // Longer delay for Home2
    }, 1000); // Duration of loading screen

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <div>
      {/* Loader with Slide-Out Animation */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="fixed inset-0 z-50 bg-light flex items-center justify-center"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      {/* NavBar with delayed rendering */}
      {showNavBar && (
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <NavBar />
        </motion.div>
      )}

      {/* Main Content */}
      <div>
        <Hero />

        {/* Hero2 with Slide-Up Animation */}
        {showHome2 && (
          <motion.div
            className="relative"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Hero2 />
          </motion.div>
        )}
      </div>

      <div>
        <About />
        <Services />
        <Staff />
      </div>
    </div>
  );
}
