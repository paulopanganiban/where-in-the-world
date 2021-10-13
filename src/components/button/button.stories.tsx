import { ComponentStory } from "@storybook/react";
import React from "react";
import Button from "./index";
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const ButtonProps = {
  component: Button,
  title: "Button",
};
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
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
