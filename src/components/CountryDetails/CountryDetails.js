import React, { useState, useEffect } from "react";
import { StyledCountryDetails } from "./styles.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Translate } from "react-redux-i18n";

const CountryDetails = ({ match }) => {
  const {
    params: { name },
  } = match;
  const countries = useSelector(({ countries }) => countries.countries);

  const [selectedCountry, setSelectedCountry] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const country = countries.filter((country) => country?.name === name)[0];
    setSelectedCountry(country);
    setIsLoading(false);
  }, [countries, name]);

  const getFullBorderCountryName = (borderCountry) => {
    const countryMatch = countries.filter(
      (country) => country.alpha3Code === borderCountry
    )[0];

    if (countryMatch && countryMatch.hasOwnProperty("name")) {
      const fullName = countryMatch.name;
      return fullName;
    }
  };

  return (
    <StyledCountryDetails>
      <Link to="/" className="closer" />

      {(isLoading || !selectedCountry) && (
        <div className="loader">
          <Translate value={"loading"} />
        </div>
      )}

      {selectedCountry && (
        <section className="container">
          <h2 className="heading">{selectedCountry.name}</h2>
          <img
            src={selectedCountry.flag}
            className="flag"
            alt={`flag of ${selectedCountry.name}`}
          />

          <ul className="details">
            <li>
              <strong>
                <Translate value={"details.capital"} />:{" "}
              </strong>
              {selectedCountry.capital}
            </li>
            <li>
              <strong>
                <Translate value={"details.population"} />:{" "}
              </strong>
              {selectedCountry.population.toLocaleString()}
            </li>
            <li>
              <strong>
                <Translate value={"details.region"} />:{" "}
              </strong>
              {selectedCountry.region}
            </li>
            <li>
              <strong>
                <Translate value={"details.subRegion"} />:{" "}
              </strong>
              {selectedCountry.subregion}
            </li>
            <li>
              <strong>
                <Translate value={"details.currencies"} />:{" "}
              </strong>
              {selectedCountry.currencies.map(
                ({ code, name, symbol }, index) => (
                  <span key={code}>
                    {index > 0 && ", "}
                    {name} {symbol}
                  </span>
                )
              )}
            </li>
            <li>
              <strong>
                <Translate value={"details.languages"} />:{" "}
              </strong>
              {selectedCountry.languages.map(({ iso639_2, name }, index) => (
                <span key={iso639_2}>
                  {index > 0 && ", "}
                  {name}
                </span>
              ))}
            </li>
          </ul>

          <div className="border">
            <h3 className="border-title">
              <Translate value={"details.borderCountries"} />:{" "}
            </h3>
            <ul className="border-list">
              {selectedCountry.borders.map((border) => {
                const fullBorderCountryName = getFullBorderCountryName(border);
                return (
                  <li key={border}>
                    <Link
                      className="border-link"
                      to={"/country-details/" + fullBorderCountryName}
                    >
                      {fullBorderCountryName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </StyledCountryDetails>
  );
};

export default CountryDetails;
