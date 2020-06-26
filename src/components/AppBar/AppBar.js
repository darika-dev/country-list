import React from "react";
import { StyledAppBar } from "./styles.js";
import { Translate } from "react-redux-i18n";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.js";

const AppBar = () => (
  <StyledAppBar>
    <div className="container">
      <h1 className="title">
        <Translate value="header.title" />
      </h1>
      <LanguageSwitcher />
    </div>
  </StyledAppBar>
);

export default AppBar;
