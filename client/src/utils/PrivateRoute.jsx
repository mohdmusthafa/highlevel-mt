/*
 * Author: Mohammed Musthafa
 * Created Date: Sunday December 11th 2022
 * Product : HighLevel Wallet
 */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { checkExisting } from '../redux/wallet/actions';
function PrivateRoute() {
  const dispatch = useDispatch();
  const wallet = useSelector(state => state.wallet);
  const { walletId } = wallet;

  // eslint-disable-next-line
  useEffect(() => { dispatch(checkExisting()) }, []);
  if(!walletId) {
    return <Navigate to="/" />
  }

  return <Outlet />
}

export default PrivateRoute;