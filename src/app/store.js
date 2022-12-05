// action identifier
export const REQUESTPRODUCT = "requestProduct";
export const SUCCESSPRODUCT = "successProduct";
export const ERRORPRODUCT = "errorProduct";
export const ADDTOCARD = "addToCard";

// action creator
export const requestProductAction = () => {
  return {
    type: REQUESTPRODUCT,
  };
};
export const successProductAction = (data) => {
  return {
    type: SUCCESSPRODUCT,
    payload: data,
  };
};
export const errorProductAction = () => {
  return {
    type: ERRORPRODUCT,
  };
};
export const addToCardAction = (product) => {
  return {
    type: ADDTOCARD,
    payload: product,
  };
};

// initial state
export const initialState = {
  data: {
    product: [],
    error: "",
    loading: true,
  },
  card: [],
  watchList: [],
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
        card: [...state.card],
        watchList: [...state.watchList],
      };
    case SUCCESSPRODUCT:
      return {
        ...state,
        data: {
          product: action.payload,
          error: "",
          loading: false,
        },
        card: [...state.card],
        watchList: [...state.watchList],
      };
    case ERRORPRODUCT:
      return {
        ...state,
        data: {
          product: [],
          error: "there was an error to data fetching",
          loading: false,
        },
        card: [...state.card],
        watchList: [...state.watchList],
      };
    case ADDTOCARD:
      return {
        ...state,
        data: {
          ...state.data,
        },
        card: [...state.card, action.payload],
        watchList: [...state.watchList],
      };

    default:
      return state;
  }
};

export default reducer;
