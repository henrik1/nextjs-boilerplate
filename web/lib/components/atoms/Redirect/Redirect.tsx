import React from "react";
import { useRouter } from "next/router";
import { StyledRedirect } from "./Redirect.styles";

export const Redirect = ({ href, children, ...rest }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return router.push(href);
  };

  return (
    <StyledRedirect {...rest} href={href} onClick={handleClick}>
      {children}
    </StyledRedirect>
  );
};

export default Redirect;
