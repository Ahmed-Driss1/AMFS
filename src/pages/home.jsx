import Hero from "../component/Hero.jsx";
import About from "../component/About.jsx";
import Services from "../component/Services.jsx";
import Staff from "../component/Staff.jsx";
import NavBar from "../component/navbar.tsx";

export default function Home() {
  return (
    
      
    <div>
    <NavBar />
    <div>
      <div className="sticky top-0 z-0 h-1vh">
        <Hero />
      </div>

     <div className="sticky z-10">
        <div>
          <About  />
        </div>

        <div>
          <Services />
        </div>

        <div>
          <Staff />
        </div>
      </div>
      
     
    </div>
  </div>
  );
}
