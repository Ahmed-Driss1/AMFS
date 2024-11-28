import { motion, AnimatePresence } from "framer-motion";

export default function Calltoaction() {
    return (
      <>
        <section className="min-h-screen relative bg-dark">
          <h1 className="font-Shrikhand text-darkaccent lg:text-8xl text-6xl md:text-5xl text-left relative ml-10  pt-24">
            Join the Waves with<br /> Us!
          </h1>
          <p className="text-light text-left text-xs md:text-sm  lg:text-base absolute lg:w-2/6 lg:right-7 w-52 mt-20 right-2 opacity-85">
            Ready to experience the thrill of surfing and be part of a vibrant surf community?  Whether you're here to learn, improve, or explore Morocco’s stunning coastline, we’ve got everything you need to get started.
          </p>
  
          {/* Centered button container */}
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex justify-center lg:bottom-16">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }} // Apparition animation
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }} // Expand on hover
            whileTap={{ scale: 0.95 }} // Shrink on tap
            transition={{ type: "spring", stiffness: 300, damping: 15 }} // Smooth transitions
            className="mt-20 border-4 border-darkaccent bg-darkaccent text-dark text-xl font-Shrikhand p-4 rounded-xl shadow-lg "
          >
          Get in touch
        </motion.button>
          </div>
        </section>
      </>
    );
  }
  