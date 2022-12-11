import {
  SET_PAGE,
  SET_SORT,
  SET_TRANSACTIONS,
  SET_TRANSACTIONS_COUNT,
} from "./types";

/*
 * Author: Mohammed Musthafa
 * Created Date: Sunday December 11th 2022
 * Product : HighLevel Wallet
 */
const initialState = {
  transactions: [],
  isLoading: false,
  sort: {},
  total_count: 0,
  page: 1,
};

export default function transactionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    case SET_SORT:
      return { ...state, sort: action.payload };
    case SET_TRANSACTIONS_COUNT:
      return { ...state, total_count: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}
