import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 1.5em 1px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0;
  background-color: ${({ theme }) => theme.elements};
  white-space: nowrap;
  text-decoration: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease-out, background-color 0.3s ease-out,
    color 0.3s ease-out;

  &:hover,
  &:focus,
  &:active {
    transition: none;
    border-color: ${({ theme }) => theme.borderFocus};
    background: ${({ theme }) => theme.buttonFocus};
  }
  &:focus,
  &:active {
    outline: none;
  }
`;
