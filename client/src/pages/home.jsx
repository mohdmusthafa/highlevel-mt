/*
 * Author: Mohammed Musthafa
 * Created Date: Saturday December 10th 2022
 * Product : HighLevel Wallet
 */
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { CenteredDiv } from "../components/styled";
import Transact from "../components/Transact";
import Transactions from "../components/Transactions";
import { logout } from "../redux/wallet/actions";

function Home() {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);
  const { name, balance } = wallet;

  const logoutHandler = () => {
    localStorage.removeItem("walletId");
    dispatch(logout());
  };
  const handleTabChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <NavBar name={name} balance={balance} onLogout={logoutHandler} />
      <CenteredDiv>
        <Tabs
          defaultActiveKey="1"
          onChange={handleTabChange}
          size="large"
          items={[
            {
              label: "Transact",
              key: "1",
              children: <Transact />,
            },
            {
              label: "Transactions",
              key: "2",
              children: <Transactions />,
            },
          ]}
        />
      </CenteredDiv>
    </div>
  );
}

export default Home;
