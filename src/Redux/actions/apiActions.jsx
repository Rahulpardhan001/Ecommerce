export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";


export const SEARCH_DATA = " SEARCH_DATA";

export const handleSearch = (item) => {
  // console.log(item, "search item is ")
  return {
    type: SEARCH_DATA,
    payload: item,
  };
};




