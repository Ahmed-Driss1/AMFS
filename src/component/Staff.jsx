import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import IgIcon from "../assets/icons/icons8-instagram-24.svg";

const img = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const coaches = [
  {
    id: 1,
    fullName: "John Doe",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nobis earum veritatis, ut explicabo mijioajz zdjadi",
    igUrl: "https://www.instagram.com/johndoe/",
    imageUrl: img,
  },
  {
    id: 2,
    fullName: "Jane Smith",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nobis earum veritatis, ut explicabo mijioajz zdjadi",
    igUrl: "https://www.instagram.com/janesmith/",
    imageUrl: img,
  },
  {
    id: 3,
    fullName: "Michael Johnson",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nobis earum veritatis, ut explicabo mijioajz zdjadi",
    igUrl: "https://www.instagram.com/michaeljohnson/",
    imageUrl: img,
  },
];

export default function Staff() {
  // Create hover states for each coach
  const [hoverStates, setHoverStates] = useState(
    Array(coaches.length).fill(false)
  );
  const [selectedCoach, setSelectedCoach] = useState(null);

  const handleMouseEnter = (index) => {
    const updatedStates = [...hoverStates];
    updatedStates[index] = true;
    setHoverStates(updatedStates);
    setSelectedCoach(coaches[index]);
  };

  const handleMouseLeave = (index) => {
    const updatedStates = [...hoverStates];
    updatedStates[index] = false;
    setHoverStates(updatedStates);
    setSelectedCoach(null); // Reset selection
  };

  // Animation Variants
  const fadeInOut = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };

  return (
    <section>
      <div className="min-h-screen bg-light py-12">
        <div className="flex flex-col justify-center gap-1">
          <h2 className="text-accent text-center pt-9 font-Shrikhand text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
            Our Certified Coaches
          </h2>

          <p className="text-center lg:text-2xl sm:text-l md:text-xl text-m text-dark font-switzer p-10">
            We have so many students that we can't count how many. Our great coaches ensure everything runs smoothly. Like Khaled says, *We the best!*
          </p>
        </div>

        {/* Coach Cards */}
        <div className="flex justify-around items-center flex-wrap gap-6 pt-10">
          {coaches.map((coach, index) => (
            <div
              key={coach.id}
              className="h-80 w-64 bg-blue-500 overflow-hidden rounded-xl relative cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{
                backgroundImage: `url(${coach.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <motion.div
                className="absolute bottom-0 h-full w-full bg-dark rounded-xl flex flex-col justify-between"
                animate={hoverStates[index] ? { y: "0%" } : { y: "80%" }}
                initial={{ y: "80%" }}
                transition={{ type: "spring", stiffness: 300, damping: 70 }}
              >
                <a href={coach.igUrl} target="_blank" rel="noopener noreferrer">
                <div className="text-lg flex justify-between mx-4 items-center mt-4">
                  <h3 className="text-darkaccent font-Shrikhand">
                    {coach.fullName}
                  </h3>
                  
                    <img src={IgIcon} alt="Instagram icon" className="w-7 h-7" />
                  
                </div>
                </a>
                <p className="text-light font-switzer mb-10 mx-4">
                  {coach.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
