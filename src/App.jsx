import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct imports
import Background from "./Background";
import Navbar from "./Navbar";
import Hero from "./Hero";
import LoginSignup from "./LoginSignup";

const App = () => {
  const HeroData = [
    { text1: "Empowering", text2: "World" },
    { text1: "Essential", text2: "For Future" },
    { text1: "Build", text2: "Trust" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const updateHeroCount = () => {
      setHeroCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    };

    const intervalId = setInterval(updateHeroCount, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router> {/* Wrap entire app with Router */}
      <div>
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar />
        <Hero
          setPlayStatus={setPlayStatus}
          HeroData={HeroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />

        {/* Define Routes using Routes and Route */}
        <Routes>
          <Route path="/LoginSignup" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
