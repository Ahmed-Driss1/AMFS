import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../component/Loading.jsx";
import Hero from "../component/Hero.jsx";
import About from "../component/About.jsx";
import Services from "../component/Services.jsx";
import Staff from "../component/Staff.jsx";
import Calltoaction from "../component/Calltoacition.jsx";
import NavBar from "../component/navbar.tsx";
import Footer from "../component/Footer.jsx";

export default function Home() {
  const [loading, setLoading] = useState(true); // Controls Loading visibility
  const [showNavBar, setShowNavBar] = useState(false); // Controls NavBar rendering

  useEffect(() => {
    // Simulate loading screen
    setTimeout(() => {
      setLoading(false); // Hide Loading
      setTimeout(() => setShowNavBar(true), 500); // Delay NavBar rendering
    }, 1300); // Duration of the loading animation
  }, []);

  return (
    <div className="scrollbar-hide">
      {/* Loading Component */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading"
            initial={{ y: 0, }}
            animate={{ y: 0,}}
            exit={{ y: "-100%",}} // Fade out and slide up
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-light flex items-center justify-center"
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      {/* NavBar with Fade-In Animation */}
      <AnimatePresence>
        {showNavBar && (
          <motion.div
            key="navbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Optional if NavBar needs to exit later
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="sticky top-0 z-50"
          >
            <NavBar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <div>
          <div className="sticky top-0 z-0 h-1vh">
            <Hero />
            
          </div>
          <div className="sticky z-10">
            <About />
            <Services />
            <Staff />
            <Calltoaction />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
