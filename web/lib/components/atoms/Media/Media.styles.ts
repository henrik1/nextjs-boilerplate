import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export type MediaProps = {
  $media: string;
  format: "16:9" | "16:10" | "4:3" | "3:4" | "16:5" | "21:9" | "auto" | "1:1";
};

export type MediaVideoProps = {
  format: "16:9" | "16:10" | "4:3" | "3:4" | "16:5" | "21:9" | "auto" | "1:1";
};

const format = {
  "4:3": css`
    padding-top: ${(3 / 4) * 100}%;
  `,
  "3:4": css`
    padding-top: ${(4 / 3) * 100}%;
  `,
  "1:1": css`
    padding-top: 100%;
  `,
  "16:5": css`
    padding-top: ${(5 / 16) * 100}%;
  `,
  "21:9": css`
    padding-top: ${(9 / 21) * 100}%;
  `,
  "16:9": css`
    padding-top: ${(9 / 16) * 100}%;
  `,
  "16:10": css`
    padding-top: ${(10 / 16) * 100}%;
  `,
  "auto": css`
    padding-top: 0;
  `
};

export const StyledMedia = styled(motion.div)<MediaProps>`
  width: 100%;
  background-image: url("${(props) => props.$media}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  ${(props) => format[props.format]};
  overflow: hidden;
`;


export const StyledVideo = styled(motion.div)<MediaVideoProps>`
  width: 100%;
  ${(props) => format[props.format]};
  height: 100%;
  overflow: hidden;
  position: relative;
  video {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    background: black;
    object-fit: cover;    
  }
`;
