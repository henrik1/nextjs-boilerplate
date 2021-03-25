import React from "react";
import { StyledMedia } from "./Media.styles";

export type MediaProps = {
  media: string;
  format: "21:9" | "16:9" | "16:10" | "4:3" | "16:5" | "3:4" | "auto" | "1:1";
  style?: any;
  onClick?: (e: any) => void;
  className?: string;
  minHeight?: number;
};

export const Media = function ({ media, minHeight, ...rest }: MediaProps){

  return (
    <StyledMedia $media={media} {...rest} style={{ minHeight }} />
  );
}
export default Media;
