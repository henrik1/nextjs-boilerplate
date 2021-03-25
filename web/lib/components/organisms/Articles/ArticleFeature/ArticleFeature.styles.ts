import styled from "styled-components";

export const StyledBlogFeature = styled.div`
  margin-top: ${props => props.theme.spacing(8)}px;
  margin-bottom: ${props => props.theme.spacing(8)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
