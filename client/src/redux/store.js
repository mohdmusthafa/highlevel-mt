/*
 * Author: Mohammed Musthafa
 * Created Date: Sunday December 11th 2022
 * Product : HighLevel Wallet
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import transactionsReducer from './transactions/reducer';
import walletReducer from './wallet/reducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
const rootReducer = combineReducers({
  wallet: walletReducer,
  transactions: transactionsReducer
})

const store = createStore(rootReducer,enhancer);

export default store;