import * as React from "react";
import { ButtonProps, StyledButton } from "./Button.styles";

export const Button = (props: ButtonProps) => <StyledButton {...props} />;

Button.displayName = "Button";

export default Button;
