import styled from "styled-components";

export const StyledRedirect = styled.a`
  color: ${(props) => props.theme.palette.text.primary};
  text-decoration: none;
  display: block;
  &:hover {
    cursor: pointer;
  }
`;
