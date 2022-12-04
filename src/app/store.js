// action identifier
export const REQUESTPRODUCT = "requestProduct";
export const SUCCESSPRODUCT = "successProduct";
export const ERRORPRODUCT = "errorProduct";

// action creator
export const requestProduct = () => {
  return {
    type: REQUESTPRODUCT,
  };
};
export const successProduct = (data) => {
  return {
    type: SUCCESSPRODUCT,
    payload: data,
  };
};
export const errorProduct = () => {
  return {
    type: ERRORPRODUCT,
  };
};
// initial state
export const initialState = {
  data: {
    product: [],
    error: "",
    loading: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case REQUESTPRODUCT:
      return {
        ...state,
        data: {
          product: [],
          error: "",
          loading: true,
        },
      };
    case SUCCESSPRODUCT:
      return {
        ...state,
        data: {
          product: action.payload,
          error: "",
          loading: false,
        },
      };
    case ERRORPRODUCT:
      return {
        ...state,
        data: {
          product: [],
          error: "there was an error to data fetching",
          loading: false,
        },
      };

    default:
      return state;
  }
};

export default reducer;
