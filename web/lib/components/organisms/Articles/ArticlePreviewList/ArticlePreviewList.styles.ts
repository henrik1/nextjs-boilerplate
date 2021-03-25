import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledColumns = styled(motion.ul)`
  list-style: none;
  text-indent: 0;
  column-gap: ${props => props.theme.spacing(8)}px;
  column-count: 3;
  
  ${props => props.theme.breakpoints.down("md")} {
    column-count: 2;
  }

  ${props => props.theme.breakpoints.down("xs")} {
    column-count: 1;
  }
`

export const StyledItem = styled(motion.li)`
  list-style: none;
  text-indent: 0;
  -webkit-column-break-inside: avoid; 
  page-break-inside: avoid;
  break-inside: avoid-column;
`;
