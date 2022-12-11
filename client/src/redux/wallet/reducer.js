/*
 * Author: Mohammed Musthafa
 * Created Date: Sunday December 11th 2022
 * Product : HighLevel Wallet
 */

import { SET_WALLET_DETAILS, SET_WALLET_ID } from "./types";
const initialState = {
  walletId: "",
  name: '',
  balance: '',
};

export default function walletReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WALLET_ID:
      return { ...state, walletId: action.payload };
    case SET_WALLET_DETAILS:
      return {
        ...state,
        name: action.payload.name,
        balance: action.payload.balance,
      };
    default:
      return state;
  }
}
