// HomePage.tsx
import React, { useEffect } from "react";
import styled from "styled-components";

// Styled-components for CSS
const Wrapper = styled.div`
  --dark: rgb(20, 20, 20);
  --yellow: rgb(253, 216, 53);
  --blue: rgb(98, 0, 234);
  --c1: rgb(3, 7, 18);
  --c2: rgb(163, 230, 53);
  --left-color: var(--c1);
  --right-color: var(--c2);

  background-color: var(--dark);
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

interface SideProps {
  left?: boolean;
}

const Side = styled.div<SideProps>`
  display: grid;
  height: 100%;
  overflow: hidden;
  place-items: center;
  position: absolute;
  width: ${(props) => (props.left ? "60%" : "100%")};
  z-index: ${(props) => (props.left ? 2 : 1)};
  background-color: ${(props) =>
    props.left ? "var(--left-color)" : "var(--right-color)"};
  color: ${(props) => (props.left ? "white" : "var(--dark)")};
  transition: width 0.5s;
`;

const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 7vw;
  font-weight: 800;
  margin: 0px 10vw;
  width: 80vw;
`;

interface FancyProps {
  left?: boolean;
}

const Fancy = styled.span<FancyProps>`
  font-family: "Permanent Marker", cursive;
  font-size: 1.8em;
  line-height: 0.6em;
  color: ${(props) => (props.left ? "var(--c2)" : "white")};
`;

const HomePage: React.FC = () => {
  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const leftSide = document.getElementById("left-side") as HTMLElement;
      if (e instanceof MouseEvent) {
        leftSide.style.width = `${(e.clientX / window.innerWidth) * 100}%`;
      } else {
        leftSide.style.width = `${(e.touches[0].clientX / window.innerWidth) * 100}%`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e);
    const handleTouchMove = (e: TouchEvent) => handleMove(e);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <Wrapper>
      <Side id="left-side" left>
        <Title>
          Sometimes a simple header is <Fancy left>better</Fancy>
        </Title>
      </Side>
      <Side id="right-side">
        <Title>
          Sometimes a simple header is <Fancy>worse</Fancy>
        </Title>
      </Side>
    </Wrapper>
  );
};

export default HomePage;
