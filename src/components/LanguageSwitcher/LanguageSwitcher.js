import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { supportedLocales } from "../../config/i18n";
import { setLocale } from "react-redux-i18n";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.i18n.locale);

  const changeLanguage = (code) => {
    localStorage.setItem("locale", code);
    dispatch(setLocale(code));
  };

  return (
    <div>
      {Object.keys(supportedLocales).map(
        (lang) =>
          language !== lang && (
            <button key={lang} onClick={(e) => changeLanguage(lang)}>
              {supportedLocales[lang]}
            </button>
          )
      )}
    </div>
  );
};

export default LanguageSwitcher;
