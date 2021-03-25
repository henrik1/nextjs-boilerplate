import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";

export const StyledAppBar = styled(AppBar)`
  color: ${props => props.theme.palette.primary.main}; 
  box-shadow: none;
  padding: ${(props) => props.theme.spacing(3)}px;
  background: ${(props) => props.theme.palette.common.white};
`;
