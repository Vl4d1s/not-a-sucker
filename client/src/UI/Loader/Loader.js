import React from "react";
import Lottie from "react-lottie";
import Typewriter from "typewriter-effect";
import animationData from "../../lotties/shopping-cart.json";
import classes from "./Loader.module.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loader = (props) => {
  const typewriterOptions = {
    strings: ["Loading..."],
    autoStart: true,
    loop: true,
    delay: 100,
    deleteSpeed: 100,
    cursor: "|",
  };

  return (
    <React.Fragment>
      <Lottie
        options={defaultOptions}
        height={+props.height}
        width={+props.width}
      />
      <p className={classes.typewriter}>
        <Typewriter options={typewriterOptions} />
      </p>
    </React.Fragment>
  );
};

export default Loader;
