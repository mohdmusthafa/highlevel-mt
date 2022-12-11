/*
 * Author: Mohammed Musthafa
 * Created Date: Sunday December 11th 2022
 * Product : HighLevel Wallet
 */
import cogoToast from "cogo-toast";
import API from "../../utils/API";
import { fetchWalletDetails } from "../wallet/actions";
import { SET_PAGE, SET_SORT, SET_TRANSACTIONS, SET_TRANSACTIONS_COUNT } from "./types";

export const fetchTransactions = () => async (dispatch, getState) => {
  try {
    const { wallet, transactions } = getState();
    const { walletId } = wallet;
    const { sort, page } = transactions;
    const dateSort = sort.date ? sort.date : 0;
    const amountSort = sort.amount ? sort.amount : 0;

    const response = await API.get(`/transactions`, {
      params: {
        walletId,
        limit: 10,
        skip: (page - 1) * 10,
        dateSort,
        amountSort
      },
    });

    dispatch({
      type: SET_TRANSACTIONS,
      payload: response.data?.transactions || [],
    });
    dispatch({
      type: SET_TRANSACTIONS_COUNT,
      payload: response.data?.total_count || 0,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setSort = (sortItem) => async (dispatch) => {
 dispatch({
    type: SET_SORT,
    payload: sortItem,
  });
  // dispatch(fetchTransactions());
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page
  }
}

export const submitTransaction =
  ({ amount, description, transaction_type }) =>
  async (dispatch, getState) => {
    try {
      const { walletId } = getState().wallet || "";
      const body = {
        amount,
        description,
      };
      if (transaction_type === "debit") body["amount"] = -Math.abs(amount);

      const response = await API.post(`/transact/${walletId}`, body);
      if (response.data.transaction_id) {
        dispatch(fetchWalletDetails(walletId));
        dispatch(fetchTransactions());
        cogoToast.success("Transaction recorded successfully");
      }
    } catch (error) {
      cogoToast.error(error.response?.data?.message || "Something went wrong");
      console.log(error);
    }
  };
