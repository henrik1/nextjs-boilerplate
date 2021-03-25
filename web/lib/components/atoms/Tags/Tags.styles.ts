import styled from "styled-components";

export const StyledTags = styled.ul`
  list-style: none;
  margin: 0;
  font-family: ${props => props.theme.typography.subtitle2.fontFamily};
  font-size: ${props => props.theme.typography.subtitle2.fontSize};
  font-weight: ${props => props.theme.typography.subtitle2.fontWeight};
  color: ${props => props.theme.palette.text.hint}; 
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledTag = styled.li`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  &:not(:last-child) {
    &::after {
      content: "";
      display: block;
      height: 4px;
      width: 4px;
      border-radius: 2px;
      background: ${props => props.theme.palette.text.hint};
      margin-right: ${props => props.theme.spacing(1)}px;
      margin-left: ${props => props.theme.spacing(1)}px;
    }
  }
`;
