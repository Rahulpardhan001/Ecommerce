import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SEARCH_DATA,
} from "../actions/apiActions";
import { addToCart } from "../actions/cartAction";

// Initial state
const initialState = {
  data: [],
  loading: false,
  error: null,
  cart: [],
  searchData: [],
  search: "",
};

// Reducer function
export const apiReducer = (state = initialState, action) => {
  // console.log(action.type)
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.error };
    case SEARCH_DATA:
      return {
        ...state,
        search: action.payload,
        searchData: state.data.filter((item) => {
          if (item.title.toUpperCase().includes(action.payload.toUpperCase())) {
            return item;
          }
        }),
      };

    default:
      return state;
  }
};

// Search data

// Thunk action to fetch data
export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // console.log('Fetched Data:', data);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, error: error.message });
    }
  };
};
