import React, { useState } from "react";
import serviceImage1 from "@/assets/images/about1.jpg";
import serviceImage2 from "@/assets/images/about2.jpg";
import serviceImage3 from "@/assets/images/about1.jpg";

const services = [
  {
    id: 1,
    title: "Surf Lessons & Coaching",
    description: "Whether you're just starting out or looking to improve your skills, our tailored surf lessons and coaching sessions are designed to meet your needs. Our experienced instructors will help you progress at your own pace.",
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
    description: "Join our Surf Camp for an immersive experience where you’ll receive daily surf lessons, stay in comfortable accommodations, and enjoy the best waves Morocco has to offer. It’s the perfect way to improve your surfing while exploring Morocco’s beautiful coastline.",
    image: serviceImage3,
    imagealt: "Surf Camp",
  },
];

export default function ServiceSection() {
  const [selectedService, setSelectedService] = useState(null);

  const handleClick = (id) => {
    setSelectedService(selectedService === id ? null : id);
  };

  return (
    <section className="flex flex-col items-center gap-6 lg:gap-4 p-6 bg-light min-h-screen lg:max-h-screen">
      <h2 className="font-amulya text-center text-accent text-4xl lg:text-3xl pt-8 lg:pt-4">What we offer</h2>

      <div className="w-full lg:grid lg:grid-cols-3 gap-4 lg:h-2/3">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center cursor-pointer transition-transform duration-500"
            onClick={() => handleClick(service.id)}
          >
            <img
              src={service.image}
              alt={service.imagealt}
              className={`w-full rounded-lg transition-transform duration-500 ${
                selectedService === service.id ? "scale-105" : "scale-90"
              }`}
            />
            <h3 className="mt-3 text-lg lg:text-base font-bold text-accent font-amulya">{service.title}</h3>

            {/* Conditionally render description based on screen size */}
            <p className={`my-8 pb-6 text-center text-dark font-synonym lg:pb-10 ${selectedService === service.id || window.innerWidth < 1024 ? "block" : "hidden"} lg:hidden`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Display selected description on larger screens */}
      <div className="hidden lg:block text-center max-w-2xl pb-12">
        {selectedService &&
          services.find((service) => service.id === selectedService)?.description}
      </div>
    </section>
  );
}
