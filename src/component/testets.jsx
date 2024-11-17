import React, { useEffect, useRef } from "react";
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

        // Clean up effect
        return () => {
          tiltRefs.current.forEach((tiltRef) => tiltRef?.vanillaTilt?.destroy());
        };
    }, []);


    

    return (
        <>
            <section className="min-h-screen bg-light flex flex-col items-center gap-7 py-8">
                <h2 className="font- text-center text-accent text-5xl pt-10">More than a surf club</h2>

                <div className="p-5 grid gap-4 sm:gap-y-44 lg:gap-y-12 grid-cols-1 lg:grid-cols-3 pt-14 px-4 lg:px-28 ">
                    {/* First Row: Text 2/3, Image 1/3 */}
                    <p className="font-synonym text-xl text-dark lg:col-span-2 lg:order-1 order-1 text-center lg:text-left mx-auto lg:mr-32 lg:pr-8 ">
                        Located in Rabat, Morocco, Morocco Association of Free Surfers is a welcoming community for surfers of all levels. United by our love for the ocean, we offer a friendly space for everyone to learn, grow, and connect with fellow surf enthusiasts.
                    </p>
                    <img
                        src={aboutimage1}
                        alt="group of surfers"
                        className="w-full h-auto lg:col-span-1 lg:order-2 order-2 rounded-lg lg:hover:scale-105 lg:hover:shadow-2xl transition-all duration-500"
                        ref={(el) => (tiltRefs.current[0] = el)}
                        
                    />

                    {/* Second Row: Image 1/3, Text 2/3 */}
                    <img
                        src={aboutimage2}
                        alt="high performer surfing"
                        className="w-full h-auto lg:col-span-1 lg:order-3 order-4 rounded-lg lg:hover:scale-105 lg:hover:shadow-2xl transition-all duration-500"
                        ref={(el) => (tiltRefs.current[1] = el)}
                        
                    />
                    <p className="font-synonym text-xl text-dark lg:col-span-2 lg:order-4 order-3 text-center lg:text-left mx-auto lg:ml-32 lg:pl-8">
                    
Our mission is to promote surfing in Morocco and help everyone excel on the waves. With Morocco’s stunning coastline, we provide a supportive space for surfers of all levels              </div>
                <button className="font-synonym font-black border-4 border-accent text-dark lg:text-2xl lg:h-20 sm:w-1/2 sm:text-lg md:w-1/3 lg:w-1/5 p-3 rounded-lg lg:hover:scale-110 transition-transform duration-500 mt-6">
                    More about us
                </button>
            </section>
        </>
    );
}
