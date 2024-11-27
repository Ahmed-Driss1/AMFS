import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import aboutimage1 from "@/assets/images/about1.jpg";
import aboutimage2 from "@/assets/images/about2.jpg";

export default function About() {
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((tiltRef) => {
      if (tiltRef) {
        VanillaTilt.init(tiltRef, {
          max: 10, // Subtle tilt effect
          speed: 700, // Smooth transition speed
          glare: true,
          "max-glare": 0.2,
          easing: "cubic-bezier(.03,.98,.52,.99)", // Smooth easing
        });
      }
    });

    return () => {
      tiltRefs.current.forEach((tiltRef) => tiltRef?.vanillaTilt?.destroy());
    };
  }, []);

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen bg-light flex flex-col items-center gap-20 lg:gap-36 lg:py-24 lg:pb-9">
      {/* Title */}
      <motion.h2
        className="text-accent text-center mt-9 font-Shrikhand text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible" // Triggers animation when in view
        viewport={{ once: true, amount: 0.5 }} // Plays animation once, when 50% of element is visible
      >
        More than a surf club
      </motion.h2>

      {/* First Row */}
      <div className="h-auto flex flex-col sm:flex-row items-center gap-8 lg:gap-30 lg:mx-20 sm:mx-8">
        <motion.div
          className="lg:text-2xl sm:texl-l md:text-xl text-m text-center md:text-left sm:w-1/2 mx-7"
          variants={fadeInFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="pb-3 text-accent font-Shrikhand">hello</h3>
          <p className="font-switzer text-dark opacity-85">
            Based in Rabat, Morocco, Morocco Association of Free Surfers is a welcoming community where surfers of all
            levels can learn, grow, and connect through a shared love for the ocean AAAA AAA AAAAAA AAA AAAAA AAA AAAAA AAAA A AAA AAA AAAAA.
          </p>
        </motion.div>
        <motion.div
          className=""
          variants={fadeInFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            ref={(el) => (tiltRefs.current[0] = el)}
            src={aboutimage1}
            alt="group of surfers"
            className="w-auto lg:h-80 object-cover rounded-xl h-48"
          />
        </motion.div>
      </div>

     
      <motion.div className="h-auto flex flex-col sm:flex-row-reverse items-center gap-8 lg:gap-30 lg:mx-20 sm:mx-8 lg:mb-10 lg:text-2xl lg:pt-28 lg:border-t-2 border-dark"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          className=" sm:texl-l md:text-xl text-m text-center md:text-left lg:w-1/2 mx-7 sm:w-1/2"
          variants={fadeInFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="pb-3 text-accent font-Shrikhand">hello</h3>
          <p className="font-switzer text-dark opa">
            Our mission is to promote surfing in Morocco and help everyone excel on the waves. With Morocco’s stunning
            coastline, we provide a supportive space for surfers of all levels AAAA AAA AAAAAA AAA AAAAA AAA AAAAA AAAA A AAA AAA AAAAA.
          </p>
        </motion.div>
        <motion.div
          className=""
          variants={fadeInFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            ref={(el) => (tiltRefs.current[1] = el)}
            src={aboutimage2}
            alt="group of surfers"
            className="w-auto lg:h-80 object-cover rounded-xl h-48 mb-10"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
