import React, { useState } from "react";
import { StyledAutocomplete } from "./styles.js";
import { Link } from "react-router-dom";
import { Translate } from "react-redux-i18n";

const Suggestions = ({ isLoading, isError, suggestions, handleClick }) => (
  <div className="list">
    {isError && (
      <div className="list-info">
        <Translate value={"error"} />
      </div>
    )}
    {isLoading && (
      <div className="list-info">
        <Translate value={"loading"} />
      </div>
    )}
    {!suggestions.length && !isLoading && (
      <div className="list-info">
        <Translate value={"notFound"} />
      </div>
    )}
    <ul className="inner">
      {suggestions.map((item) => (
        <li key={parseInt(item.numericCode)}>
          <Link
            to={"/country-details/" + item.name}
            className="list-item"
            onClick={handleClick}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Autocomplete = ({ isLoading, isError, placeholder, suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    const val = e.currentTarget.value;
    setUserInput(val);
    const data = suggestions.filter((suggestion) =>
      suggestion.name.toLowerCase().includes(val.toLowerCase())
    );
    setFilteredSuggestions(data);
    setShowSuggestions(true);
  };

  const handleClick = (e) => {
    setFilteredSuggestions("");
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
  };

  return (
    <StyledAutocomplete>
      <input
        type="text"
        className="input"
        placeholder={placeholder}
        value={userInput}
        onChange={handleChange}
      />

      {showSuggestions && (
        <Suggestions
          isError={isError}
          isLoading={isLoading}
          suggestions={filteredSuggestions}
          handleClick={handleClick}
        />
      )}
    </StyledAutocomplete>
  );
};

export default Autocomplete;
