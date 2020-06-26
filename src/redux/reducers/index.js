import { combineReducers } from "redux";
import { i18nReducer } from "react-redux-i18n";
import countries from "./countries";

const rootReducer = combineReducers({ i18n: i18nReducer, countries });

export default rootReducer;
