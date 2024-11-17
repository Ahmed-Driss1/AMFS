import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import aboutimage1 from "@/assets/images/about1.jpg";
import aboutimage2 from "@/assets/images/about2.jpg";

export default function About() {
    const tiltRefs = useRef([]);

    // useEffect(() => {
    //     tiltRefs.current.forEach((tiltRef) => {
    //       if (tiltRef) {
    //         VanillaTilt.init(tiltRef, {
    //           max: 10, // Subtle tilt effect
    //           speed: 700, // Smooth transition speed
    //           glare: true,
    //           "max-glare": 0.2,
    //           easing: "cubic-bezier(.03,.98,.52,.99)", // Smooth easing
    //         });
    //       }
    //     });

    //     // Clean up effect
    //     return () => {
    //       tiltRefs.current.forEach((tiltRef) => tiltRef?.vanillaTilt?.destroy());
    //     };
    // }, []);


    // ref={(el) => (tiltRefs.current[0] = el)}

    return (
        <>
            <section className="min-h-screen bg-light flex flex-col items-center gap-20">
              <h2 className="text-accent font-Shrikhand text-4xl my-8">More than a surf club</h2>
              <div className=" h-auto flex flex-row items-center px-20 gap-20">
                <div className="text-xl w-1/2">
                        <p>
                        Based in Rabat, Morocco, Morocco Association of Free Surfers is a welcoming community where surfers of all levels can learn, grow, and connect through a shared love for the ocean.
                        </p>
                    </div>
                    <div className="w-1/2"> 
                        <img 
                        src={aboutimage1}
                        alt="group of surfers"
                        className="rounded-2xl" />
                    </div>
                 
              </div>
              <div className=" h-auto flex flex-row-reverse items-center px-20 gap-20">
                <div className="text-xl w-1/2 ">
                        <p>
                        Our mission is to promote surfing in Morocco and help everyone excel on the waves. With Morocco’s stunning coastline, we provide a supportive space for surfers of all levels.
                        </p>
                    </div>
                    <div className="w-1/2 h-auto"> 
                        <img 
                        src={aboutimage2}
                        alt="group of surfers"
                        className="px-14 rounded-xl" />
                    </div>
                 
              </div>
            </section>
        </>
    );
}
