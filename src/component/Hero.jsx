import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <section
        className="min-h-screen bg-light bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1672509995777-ede97d83c304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <motion.h1
          className="font-Shrikhand text-dark shadow-lg lg:text-8xl text-5xl md:text-5xl text-left pb-10 lg:pl-10 pl-8 absolute bottom-0 w-full max-w-full"
          initial={{y: 100 }} // Start slightly below and hidden
          animate={{y: 0 }} // Animate to fully visible and at original position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
        >
          Ride waves, <br /> create memories.
        </motion.h1>
      </section>
    </>
  );
}
