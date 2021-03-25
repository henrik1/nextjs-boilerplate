import * as React from "react";
import Button from "./Button";

export default { title: "Atoms/Button",  };

export const Primary = (args) => <Button {...args} />;
Primary.args = {
  color: "primary",
  variant: "contained",
  size: "large",
  children: "Hello world"
};

export const Secondary = (args) => <Button {...args} />;
Secondary.args = {
  color: "secondary",
  variant: "contained",
  size: "large",
  children: "Hello world"
};
