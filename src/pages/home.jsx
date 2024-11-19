import Hero from "../component/Hero.jsx";
import About from "../component/About.jsx";
import Services from "../component/Services.jsx";
import Staff from "../component/Staff.jsx";

export default function Home() {
  return (
    <div className="relative">
      <div className="sticky top-0 min-h-screen">
        <Hero />
      </div>
      <div className="sticky top-0 min-h-screen shadow-2xl ">
        <About />
      </div>
      <div className="sticky top-0 overflow-scroll">
        <Services />
      </div>
      {/* <div className="sticky top-0 ">
        <Staff />
      </div> */}
    </div>
  );
}
