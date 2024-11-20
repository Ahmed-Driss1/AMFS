import React, { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
  // const [isVisible, setIsVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // // Handle the scroll behavior
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY > lastScrollY) {
  //       // Scrolling down
  //       setIsVisible(false);
  //     } else {
  //       // Scrolling up
  //       setIsVisible(true);
  //     }
  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [lastScrollY]);

  return (
    // <nav
    //   className={`fixed top-4 left-4 right-4 z-50 bg-emerald-950 bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 shadow-lg rounded-full transition-all duration-500 ${
    //     isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
    //   }`}
    // >
    <nav
      className="fixed top-4 left-4 right-4 z-50 bg-emerald-950 bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 shadow-lg rounded-full transition-all duration-500 opacity-100 visible"
    >
      <div className="navebare flex justify-between items-center p-4">
        <div className="navbar-logo text-lg font-bold">MyApp</div>
        <div className="navbar-links flex space-x-4">
          <a href="#home" className="navbar-link hover:text-blue-500 transition-colors">
            Home
          </a>
          <a href="#services" className="navbar-link hover:text-blue-500 transition-colors">
            Services
          </a>
          <a href="#contact" className="navbar-link hover:text-blue-500 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

