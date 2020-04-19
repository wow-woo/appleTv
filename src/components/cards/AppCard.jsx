import React, { useRef, useEffect, useState } from "react";
import AnimationContainer from "../wrappers/AnimationContainer";
import CaptionCard from "./CaptionCard";

const AppCard = ({ animate, caption, img, onChange, type, history }) => {
  const ref = useRef(null);
  const [direction, setDirection] = useState("topRight");

  const setDimensions = () => {
    console.log("ref", ref);
    console.log(ref.current);
    const x = ref.current.offsetLeft * 2 < window.innerWidth ? "Left" : "Right";
    const y = ref.current.offsetTop > window.innerHeight ? "bottom" : "top";
    setDirection(y + x);
  };

  const onClick = (e) => {
    if (type) {
      onChange(type);
    } else {
      onChange();
      setTimeout(
        () => history.push({ pathname: "/app", state: { img, caption } }),
        700
      );
    }
  };

  useEffect(() => {
    setDimensions();
    window.addEventListener("resize", setDimensions);

    return () => window.removeEventListener("resize", setDimensions);
  }, [ref]);

  return (
    <AnimationContainer
      animate={animate}
      ref={ref}
      direction={direction}
      className="animated-col"
    >
      <CaptionCard
        className="card card-sm"
        onClick={onClick}
        img={img}
        caption={caption}
      />
    </AnimationContainer>
  );
};

AppCard.defaultProps = {
  animate: false,
  caption: "your caption!",
  img: null,
  onChange: null,
  type: null,
};

export default AppCard;
