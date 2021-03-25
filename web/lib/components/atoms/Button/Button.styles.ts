import Button, { ButtonProps as BaseProps } from "@material-ui/core/Button";
import styled, { css } from "styled-components";

export type ButtonProps = BaseProps & { justify?: "left" | "right" | "inherit" };

const justify = {
  left: css`
    justify-content: left;
  `,
  right: css`
    justify-content: right;
  `,
  inherit: css`
    justify-content: inherit;
  `
};

export const StyledButton = styled(Button)<ButtonProps>`
  ${(props) => props.justify && justify[props.justify]};
  border-radius: 0;
  height: 3rem;
`;
