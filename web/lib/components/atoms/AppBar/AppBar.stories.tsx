import * as React from "react";
import AppBar from "./AppBar";

export default { title: "Atoms/AppBar",  };

export const Primary = (args) => <AppBar {...args} />;
Primary.args = {
  children: "Hello world"
};

