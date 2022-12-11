/*
 * Author: Mohammed Musthafa
 * Created Date: Sunday December 11th 2022
 * Product : HighLevel Wallet
 */
import API from '../../utils/API';
import { SET_WALLET_DETAILS, SET_WALLET_ID } from './types';

export const setUpWallet = (name, balance) => async (dispatch) => {
  try {
    const body = {
      name,
      balance
    }
    const response = await API.post('/setup', body);
    const {id} = response.data;
    localStorage.setItem('walletId', id);
    dispatch({
      type: SET_WALLET_ID,
      payload: id
    })
  } catch (error) {
    console.log(error);
  }
}

export const fetchWalletDetails = (walletId) => async (dispatch) => {
  try {
    const response = await API.get(`/wallet/${walletId}`);
    const { name, balance } = response.data;
    dispatch({
      type: SET_WALLET_DETAILS,
      payload: {
        name,
        balance
      }
    })
  } catch (error) {
    console.log(error);
  }
}

export const checkExisting = () => async (dispatch)  => {
  const walletId = localStorage.getItem('walletId');
  if (walletId) {
    dispatch({
      type: SET_WALLET_ID,
      payload: walletId
    })
    dispatch(fetchWalletDetails(walletId));
  }
}

export const logout = () => {
  return {
    type: SET_WALLET_ID,
    payload: ''
  }
}