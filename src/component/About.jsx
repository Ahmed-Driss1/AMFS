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

            <section className="min-h-screen bg-light flex flex-col items-center gap-20 lg:gap-44 lg:py-24">
                
              <h2 className="text-accent text-center mt-9 font-Shrikhand text-2xl sm:text-3xl md:text-4xl lg:text-6xl">More than a surf club</h2>
              
              <div className=" h-auto flex flex-col sm:flex-row items-center gap-8 lg:gap-36 lg:mx-20 sm:mx-8">
                <div className="lg:text-2xl  sm:texl-l  md:text-xl text-m text-center md:text-left
                  sm:w-1/2 mx-7">

                        <p>
                        Based in Rabat, Morocco, Morocco Association of Free Surfers is a welcoming community where surfers of all levels can learn, grow, and connect through a shared love for the ocean.
                        </p>
                    </div>
                    <div className=""> 
                    <img ref={(el) => (tiltRefs.current[0] = el)}
                        src={aboutimage1}
                        alt="group of surfers"
                        className="w-auto  lg:h-80 object-cover rounded-xl h-48 " />
                    </div>
                 
              </div>
              <div className=" h-auto flex flex-col sm:flex-row-reverse  items-center gap-8  lg:gap-36 lg:mx-20 sm:mx-8">
              <div className="lg:text-2xl sm:texl-l md:text-xl text-m text-center md:text-left
                  lg:w-1/2 mx-7 sm:w-1/2 ">
                        
                        <p>
                        Our mission is to promote surfing in Morocco and help everyone excel on the waves. With Morocco’s stunning coastline, we provide a supportive space for surfers of all levels.
                        </p>
                    </div>
                    <div className=""> 
                    <img ref={(el) => (tiltRefs.current[1] = el)}
                        src={aboutimage2}
                        alt="group of surfers"
                        className="w-auto lg:h-80 object-cover rounded-xl h-48 " />
                    </div>
                 
              </div>
             
            </section>
        </>
    );
}
