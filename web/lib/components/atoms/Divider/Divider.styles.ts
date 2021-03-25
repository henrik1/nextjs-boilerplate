import styled, { css } from "styled-components";
import {lighten} from "polished";

type StyledDividerProps = {
  $gutterBottom?: boolean;
  $gutterTop?: boolean;
  color: "primary" | "secondary";
}

const colors = {
  primary: css`
    background: ${props => props.theme.palette.primary.main};
  `,
  secondary: css`
    background: ${props => lighten(.8, props.theme.palette.text.hint)};
  `
}

const gutterTop = css`
  margin-top: ${props => props.theme.spacing(4)}px;
`;

const gutterBottom = css`
  margin-bottom: ${props => props.theme.spacing(4)}px;
`

export const StyledDivider = styled.div<StyledDividerProps>`
  display: block;
  height: 1px;
  width: 100%;
  ${props => props['$gutterTop'] && gutterTop};
  ${props => props['$gutterBottom'] && gutterBottom};
  ${props => colors[props.color]};
`;
