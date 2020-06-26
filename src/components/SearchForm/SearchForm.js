import React from "react";
import { StyledSearchForm } from "./styles.js";
import { ReactComponent as SearchIcon } from "../../icons/search-outline.svg";
import { useSelector } from "react-redux";
import { Translate } from "react-redux-i18n";

import Autocomplete from "../Autocomplete/Autocomplete.js";
import Button from "../Button/Button.js";

const SearchForm = () => {
  const isLoading = useSelector(({ countries }) => countries.isLoading);
  const isError = useSelector(({ countries }) => countries.isError);
  const countries = useSelector(({ countries }) => countries.countries);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <div className="title">
        <Translate value="search.placeholder" />
      </div>
      <div className="form">
        <Autocomplete
          isLoading={isLoading}
          isError={isError}
          suggestions={countries}
        />
        <Button type="submit">
          <SearchIcon height="20px" width="20px" />
        </Button>
      </div>
    </StyledSearchForm>
  );
};

export default SearchForm;
