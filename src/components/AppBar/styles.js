import styled from "styled-components";

export const StyledAppBar = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2em;
  padding: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  background: ${({ theme }) => theme.elements};

  .container {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .title {
    margin: 0;
    font-size: 1rem;
  }

  .button {
    padding: 0.5rem 1 rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.text};
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;
