import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import serviceImage1 from "@/assets/images/about1.jpg";
import serviceImage2 from "@/assets/images/about2.jpg";
import serviceImage3 from "@/assets/images/about1.jpg";

const services = [
  {
    id: 1,
    title: "Lessons & Coaching",
    description:
      "Whether you're a beginner or looking to advance, our surf lessons and coaching are tailored to your needs, with experienced instructors helping you progress at your own pace.",
    image: serviceImage1,
    imagealt: "Surf Lessons & Coaching",
  },
  {
    id: 2,
    title: "Equipment Rentals",
    description:
      "We offer high-quality surfboards, wetsuits, and other gear for rent, so you can enjoy your surf experience without the hassle of bringing your own equipment.",
    image: serviceImage2,
    imagealt: "Surf Equipment Rentals",
  },
  {
    id: 3,
    title: "Surf Camp",
    description:
      "Our Surf Camp offers a fully immersive experience with daily lessons, comfortable accommodations, and access to Morocco's best waves—a perfect way to improve your surfing while exploring the beautiful coastline.",
    image: serviceImage3,
    imagealt: "Surf Camp",
  },
];

export default function ServiceSection() {
  const [hoveredService, setHoveredService] = useState(null);
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((tiltRef) => {
      if (tiltRef) {
        VanillaTilt.init(tiltRef, {
          max: 10,
          speed: 700,
          glare: true,
          "max-glare": 0.2,
          easing: "cubic-bezier(.03,.98,.52,.99)",
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInOut = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="bg-dark min-h-screen">
      <div className="flex flex-col items-center gap-10 pt-10 pb-48">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <h2 className="text-darkaccent text-center mt-9 mb-20 font-Shrikhand text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
            More than a surf club
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="flex gap-20 flex-col lg:flex-row items-center px-7 mb-20 cursor-pointer">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="flex flex-col gap-4 md:flex-row lg:flex-col items-center lg:gap-8"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div
                className={`md:w-1/2 lg:w-auto transition-transform duration-500 ${
                  hoveredService === null
                    ? "scale-100"
                    : hoveredService === service.id
                    ? "scale-105 shadow-lg"
                    : "scale-90 opacity-85"
                }`}
              >
                <motion.img
                  ref={(el) => (tiltRefs.current[index] = el)}
                  src={service.image}
                  alt={service.imagealt}
                  className="w-full rounded-lg shadow-lg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                />
              </div>

              <motion.div
                className="md:w-1/2 lg:w-auto flex flex-col md:gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
              >
                <h3 className="text-center text-xl md:text-2xl text-darkaccent font-Shrikhand lg:text-3xl">
                  {service.title}
                </h3>
                <p className="text-light font-switzer text-center lg:hidden text-m md:text-xl">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Animated Last Text Section */}
        <div className="hidden lg:block mx-52 text-center text-2xl text-light font-switzer transition-transform duration-500">
          <AnimatePresence mode="wait">
            <motion.p
              key={hoveredService} // Dynamic key to trigger animation on hover change
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeInOut}
            >
              {hoveredService === null
                ? "We offer high-quality surfboards, wetsuits, and other gear for rent, so you can enjoy your surf experience without the hassle of bringing your own equipment."
                : services.find((service) => service.id === hoveredService).description}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
