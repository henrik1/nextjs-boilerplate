import * as React from "react";
import Media from "./Media";

export default { title: "Atoms/Media",  };

export const Wide = (args) => <div style={{ maxWidth: 960 }}><Media {...args} /></div>;
Wide.args = {
  format: "21:9",
  media: "https://drscdn.500px.org/photo/116608237/q%3D80_m%3D1500/v2?sig=e60261b8b4c5aa1720ace0a4b149a0e671517149918c1526f8c484b02d2df67a"
};
Wide.storyName = "21:9";


export const SemiWide = (args) => <div style={{ maxWidth: 960 }}><Media {...args} /></div>;
SemiWide.args = {
  format: "16:9",
  media: "https://drscdn.500px.org/photo/116608237/q%3D80_m%3D1500/v2?sig=e60261b8b4c5aa1720ace0a4b149a0e671517149918c1526f8c484b02d2df67a"
};
SemiWide.storyName = "16:9";

export const FourThree = (args) => <div style={{ maxWidth: 960 }}><Media {...args} /></div>;
FourThree.args = {
  format: "4:3",
  media: "https://drscdn.500px.org/photo/116608237/q%3D80_m%3D1500/v2?sig=e60261b8b4c5aa1720ace0a4b149a0e671517149918c1526f8c484b02d2df67a"
};
FourThree.storyName = "4:3";


export const Square = (args) => <div style={{ maxWidth: 960 }}><Media {...args} /></div>;
Square.args = {
  format: "1:1",
  media: "https://drscdn.500px.org/photo/116608237/q%3D80_m%3D1500/v2?sig=e60261b8b4c5aa1720ace0a4b149a0e671517149918c1526f8c484b02d2df67a"
};
Square.storyName = "1:1";
