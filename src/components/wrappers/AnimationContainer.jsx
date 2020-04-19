import styled, { keyframes } from "styled-components";

const topLEFT = "-100px, -100px";
const topRIGHT = "100px, -100px";
const bottomLEFT = "-100px, 100px";
const bottomRIGHT = "100px, 100px";

const getCoords = (direction) => {
  if (direction === 'topLeft"') {
    return topLEFT;
  } else if (direction === "topRight") {
    return topRIGHT;
  } else if (direction === "bottomLeft") {
    return bottomLEFT;
  } else if (direction === "bottomRIGHT") {
    return bottomRIGHT;
  }
};

const fadeIn = keyframes`
    from{
        transform : scale(.25);
        opacity: 0;
    }
    to{
        transform : scale(1);
        opacity : 1;
    }
`;

const fadeOut = (coords) => keyframes`
    from{
        transform : scale(1);
        opacity: 1;
    }
    to{
        transform : scale(.25) translate(${coords});
        opacity : 0;
    }
`;

const AnimationContainer = styled.div`
  display: inline-block;
  position: relative;
  visibility: ${(props) => (props.animate ? "hidden" : "visible")};
  animation: ${(props) =>
    props.animate ? fadeOut(getCoords(props.direction)) : fadeIn};
`;

AnimationContainer.defaultProps = {
  animate: false,
  direction: "topLeft",
};

export default AnimationContainer;
