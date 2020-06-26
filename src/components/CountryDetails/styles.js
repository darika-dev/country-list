import styled from "styled-components";

export const StyledCountryDetails = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 620px;
  width: 90vw;
  margin: 2rem auto 3rem;
  padding: 2rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.text};

  .loader {
    opacity: 0.75;
    padding: 2.5em 1em;
    text-align: center;
  }

  .closer {
    position: absolute;
    opacity: 0.5;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    font-size: 0;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    &:before,
    &:after {
      content: "";
      position: absolute;
      height: 2px;
      top: 50%;
      left: 15%;
      right: 15%;
      background: ${({ theme }) => theme.text};
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
    &:hover {
      transform: scale(1.2);
      transition: none;
      opacity: 1;
    }
  }

  .container {
    display: grid;
    grid-template-areas:
      "header"
      "flag"
      "details"
      "border";
    grid-gap: 20px;
    @media (min-width: 768px) {
      grid-template-areas:
        "header header"
        "flag details"
        "border border";
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px;
    }
  }

  .heading {
    grid-area: header;
    margin: 0;
  }

  .flag {
    grid-area: flag;
    width: 100%;
  }

  .border {
    grid-area: border;
  }

  .border-title {
    margin-top: 0;
  }

  .border-list {
    display: flex;
    flex-wrap: wrap;
    margin: -0.25rem -0.5rem;
    padding: 0;
    list-style-type: none;
    li {
      width: auto;
      padding: 0.25rem 0.5rem;
    }
  }

  .border-link {
    display: inline-block;
    border: 1px solid ${({ theme }) => theme.border};
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.elements};
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    text-decoration: none;
    transition: border-color 0.3s ease-out;
    &:hover {
      border-color: ${({ theme }) => theme.borderFocus};
      transition: none;
    }
  }

  .details {
    grid-area: details;

    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;
