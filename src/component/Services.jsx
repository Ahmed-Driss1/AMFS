import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import serviceImage1 from "@/assets/images/about1.jpg";
import serviceImage2 from "@/assets/images/about2.jpg";
import serviceImage3 from "@/assets/images/about1.jpg";

const services = [
  {
    id: 1,
    title: "Surf Lessons & Coaching",
    description: "Whether you're a beginner or looking to advance, our surf lessons and coaching are tailored to your needs, with experienced instructors helping you progress at your own pace.",
    image: serviceImage1,
    imagealt: "Surf Lessons & Coaching",
  },
  {
    id: 2,
    title: "Surf Equipment Rentals",
    description: "We offer high-quality surfboards, wetsuits, and other gear for rent, so you can enjoy your surf experience without the hassle of bringing your own equipment.",
    image: serviceImage2,
    imagealt: "Surf Equipment Rentals",
  },
  {
    id: 3,
    title: "Surf Camp",
    description: "Our Surf Camp offers a fully immersive experience with daily lessons, comfortable accommodations, and access to Morocco's best waves—a perfect way to improve your surfing while exploring the beautiful coastline.",
    image: serviceImage3,
    imagealt: "Surf Camp",
  },
 
];

export default function ServiceSection() {
  const [selectedService, setSelectedService] = useState(null);
  const tiltRefs = useRef([]);

  const handleClick = (id) => {
    setSelectedService(selectedService === id ? null : id);
  };

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

    // Clean up effect
    return () => {
      tiltRefs.current.forEach((tiltRef) => tiltRef?.vanillaTilt?.destroy());
    };
  }, []);

  return (
    <section className="flex flex-col items-center gap-6 lg:gap-4 p-6 bg-light min-h-screen lg:max-h-screen">
      <h2 className="font-amulya text-center text-accent text-4xl lg:text-3xl pt-8 lg:pt-4 ">What we offer</h2>

      <div className="w-full lg:grid lg:grid-cols-3 gap-4 lg:h-2/3">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (tiltRefs.current[index] = el)}
            className="flex flex-col items-center cursor-pointer transition-transform duration-500"
            onClick={() => handleClick(service.id)}
          >
            <img
              src={service.image}
              alt={service.imagealt}
              className={`w-full rounded-lg transition-transform duration-500 shadow-lg ${
                selectedService === null
                  ? "scale-100"
                  : selectedService === service.id
                  ? "scale-105"
                  : "scale-90"
              }`}
            />
            <h3 className="mt-3 text-lg lg:text-base font-bold text-accent font-amulya">{service.title}</h3>

            {/* Conditionally render description based on screen size */}
            <p
              className={`my-8 pb-6 text-center text-dark font-synonym lg:pb-10 ${
                selectedService === service.id || window.innerWidth < 1024
                  ? "block"
                  : "hidden"
              } lg:hidden`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Display selected description on larger screens */}
    
      <div className="font-synonym text-lg text-dark hidden lg:block text-center max-w-2xl pb-12 pt-6 border-t-0 border-dark">
        {selectedService === null ? "we offer a variaty of shit test us out" :
          services.find((service) => service.id === selectedService)?.description}
      </div>
    </section>
  );
}
