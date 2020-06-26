import styled from "styled-components";

export const StyledAutocomplete = styled.div`
  position: relative;
  width: 100%;

  .input {
    cursor: pointer;
    position: relative;
    height: 50px;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 0;
    background: ${({ theme }) => theme.elements};
    transition: border-color 0.3s ease-out, background-color 0.3s ease-out,
      color 0.3s ease-out;

    ::placeholder {
      color: ${({ theme }) => theme.input};
    }

    &:hover {
      border-color: ${({ theme }) => theme.borderHover};
      transition: none;
    }

    &:focus,
    &:active {
      outline: none;
      border-color: ${({ theme }) => theme.borderFocus};
      transition: none;
    }
  }

  .list {
    overflow: auto;
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    max-height: 70vh;
    margin-top: 10px;
    border: 1px solid ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.elements};
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
  .list-item {
    display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    &:hover {
      color: ${({ theme }) => theme.linkHover};
    }
  }
  .list-info {
    opacity: 0.75;
    padding: 2.5em 1em;
    text-align: center;
  }
`;
