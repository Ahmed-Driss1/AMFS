import { motion } from "framer-motion";
import logo from "../assets/icons/logo.svg";

export default function Loading() {
  return (
    <div className="h-screen w-screen bg-light flex items-center justify-center">
      <motion.img
        src={logo}
        className="h-30 w-30"
        alt="Loading Icon"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
    </div>
  );
}
