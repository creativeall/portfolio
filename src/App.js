import React, { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Project from "./Pages/Projects";
import MoveToTop from "./Components/MoveToTop";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false);
    }, 1900);
  }, []);

  return (
    <>
      {Loading ? (
        <div className="loader">
          <HashLoader color={'#9067C6'} loading={true} size={100} />
        </div>
      ) : (
        <div>
          <Lottie className="bg" animationData={nightsky} loop={true} />
          <Lottie className="bgtwo" animationData={nightsky} loop={true} />
          <Lottie className="bgtemp" animationData={nightsky} loop={true} />

          <Nav />
          <MoveToTop />

          <Home />
          <About />
          <Project />
          <Resume />
          
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
