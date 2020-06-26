import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.js";
import { GlobalStyles } from "./theme/global.js";
import AppBar from "./components/AppBar/AppBar.js";
import SearchForm from "./components/SearchForm/SearchForm.js";
import CountryDetails from "./components/CountryDetails/CountryDetails.js";

const App = () => {
  const URL = "https://restcountries.eu/rest/v2/all";

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCountries = async () => {
      dispatch({ type: "FETCH_COUNTRIES_INIT" });
      try {
        const response = await axios.get(URL);
        dispatch({
          type: "FETCH_COUNTRIES_SUCCESS",
          payload: response.data,
        });
      } catch (error) {
        dispatch({ type: "FETCH_COUNTRIES_ERROR" });
      }
    };
    fetchCountries();
  }, [dispatch]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <AppBar />
          <SearchForm />
          <Switch>
            <Route path="/country-details/:name" component={CountryDetails} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
};

// const mapStateToProps = (state) => ({ locale: state.i18n.locale });
// export default connect(mapStateToProps)(App);
export default App;
