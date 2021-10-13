import React from "react";
import Button from "./index";
const ButtonProps = {
  component: Button,
  title: "Button",
};
export default ButtonProps;
export const ThisIsHowIWork = () => {
  const sampleButton = {
    label: "Back",
    width: "137px",
    height: "42px",
  };

  return (
    <Button
      onClick={() => {}}
      label={sampleButton.label}
      width={sampleButton.width}
      height={sampleButton.height}
    />
  );
};
