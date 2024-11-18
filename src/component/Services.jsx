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
    <section className="bg-light min-h-screen">
      <div className="flex flex-col items-center gap-20 pt-10 pb-48">
        <div>
          <h2 className="text-accent text-center mt-9 font-Shrikhand text-2xl sm:text-3xl md:text-4xl lg:text-6xl">More than a surf club</h2>
        </div> 
    
        <div className="flex gap-20 flex-col lg:flex-row items-center px-7 mb-20 cursor-pointer">
          {services.map((service, index) => (
              <div className="flex flex-col gap-4 md:flex-row lg:flex-col items-center" 
              onClick={()=> handleClick(service.id)}
              key={service.id}>

                <div className={`md:w-1/2 lg:w-auto transition-transform duration-500
                  ${
                    selectedService === null
                      ? "scale-100"
                      : selectedService === service.id
                      ? "scale-105 shadow-lg"
                      : "scale-90 opacity-85"
                  }`} >
                <img
                ref={(el) => (tiltRefs.current[index] = el)}
                  src={service.image}
                  alt={service.imagealt}
                  className={`w-full rounded-lg  shadow-lg `} 
              />
                </div>

                <div className="md:w-1/2 lg:w-auto flex flex-col md:gap-3">
                    <h3 className="text-center text-xl md:text-2xl text-accent font-amulya">{service.title}</h3>
                    <p className="text-dark text-center lg:hidden text-m md:text-xl">{service.description}</p>
                </div>

              </div>
          ))}
        </div>
        <div>
          {selectedService }
        </div>
        
    </div>
    </section>
  );
}
