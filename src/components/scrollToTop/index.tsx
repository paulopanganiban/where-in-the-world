import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const ScrollToTop = ({ref}: any) => {
  const [scrollState, setScrollState] = useState("");
  const divElement = useRef<HTMLDivElement>(null)
  return (
    <div ref={divElement}>
      <Button scrollState={scrollState} title="Go to top">
        Top
      </Button>
    </div>
  );
};

export default ScrollToTop;
interface ButtonProps {
    scrollState: string;
}
const Button = styled.button<ButtonProps>`

  display: ${({scrollState}) => scrollState === "block" ? scrollState : "none"};
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;

`
