const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};

const countries = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_COUNTRIES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        countries: action.payload,
      };
    case "FETCH_COUNTRIES_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default countries;
