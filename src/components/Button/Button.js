import React from "react";
import { StyledButton } from "./styles.js";

const Button = ({ children, type }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
