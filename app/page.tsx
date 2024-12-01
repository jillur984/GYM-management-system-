// import Gallery from "./components/Gallery";
// import Hero from "./components/Hero";
// import Schedule from "./components/Schedule";

// import Trainer from "./components/Trainer";
// import About from "./pages/about/page";
// import Contact from "./pages/contact/page";
// import Service from "./pages/service/page";
// const Homepage = () => {
//   return (
//     <div>
//       <Hero />
//       <About />
//       <Service />
//       <Gallery />
//       <Trainer />
//       <Schedule />
//       <Contact />
//     </div>
//   );
// };

// export default Homepage;

"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "@/app/about/page";
import Service from "@/app/service/page";
import Gallery from "./components/Gallery";
import Trainer from "./components/Trainer";
import Schedule from "./components/Schedule";
import Contact from "@/app/contact/page";
import LoadingSpinner from "./components/LoadingSpinner"; // Import the loading spinner

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  // Simulate an async task or data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide the spinner after 3 seconds (simulating data load)
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return <LoadingSpinner />; // Show the spinner while loading
  }

  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Gallery />
      <Trainer />
      <Schedule />
      <Contact />
    </div>
  );
};

export default Homepage;
