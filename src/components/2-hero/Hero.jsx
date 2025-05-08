import "./hero.css";
import Lottie from "lottie-react";

import developerAnimation from "../../../src/animatiom/developer.json";
import { useRef } from "react";
import { motion } from "motion/react";

const Hero = () => {
  // @ts-ignore
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex ">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{damping:6, type:"spring",stiffness:100 }}
            src="./me-modified.png"
            alt=""
            className="avatar"
          />
          <div className="icon-verified" />
        </div>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          soft ware designer, founder, and amateur astronaut.
        </motion.h1>
        <p className="sub-title">
          Im Omar Elsayed, a software designer.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-x"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          // https://lottiereact.com/components/Lottie#setspeedspeed
          // (useref) ابحث عن
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
};
export default Hero;
