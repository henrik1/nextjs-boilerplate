import * as React from "react";
import Tags from "./Tags";

export default { title: "Organisms/Tags" };

export const Primary = (args) => <Tags {...args} />;
Primary.args = {
  tags: ["test", "test2"]
};
