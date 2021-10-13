import React, { useRef, useState } from "react";
import styled from "styled-components";
const ScrollToTop = () => {
  const [scrollState, setScrollState] = useState("");
  const divElement = useRef<HTMLDivElement>(null)
  const topFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setScrollState("block");
    } else {
      setScrollState("none");
    }
  };
  return (
    <div ref={divElement}>
      <button onClick={topFunction} id="myBtn" title="Go to top">
        Top
      </button>
    </div>
  );
};

export default ScrollToTop;
