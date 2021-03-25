import React from "react";
import { StyledTag, StyledTags } from "./Tags.styles";

export const Tags = function({ tags }) {

  return (
    <StyledTags>
      {
        tags.map(tag => (
          <StyledTag key={tag}>{`#${tag}`}</StyledTag>
        ))
      }
    </StyledTags>
  )
}

export default Tags;
