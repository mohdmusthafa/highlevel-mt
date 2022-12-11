import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { CenteredDiv, FlexSpaceBetween } from "./styled";
import styled from "styled-components";

const NavbarContainer = styled(FlexSpaceBetween)`
  box-shadow: 0px 3px 10px -3px rgb(0 0 0 / 10%);
`;

/*
 * Author: Mohammed Musthafa
 * Created Date: Sunday December 11th 2022
 * Product : HighLevel Wallet
 */
function NavBar({ name, balance, onLogout }) {
  const formattedBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(balance);
  return (
    <>
      <NavbarContainer>
        <h3 style={{ fontSize: 22, margin: "10px 0 10px 10px" }}>{name}</h3>
        <CenteredDiv>
          <h3 style={{ fontSize: 22, margin: 10 }}>{formattedBalance}</h3>
          <Button
            style={{ margin: 10 }}
            shape="circle"
            onClick={onLogout}
            icon={<LogoutOutlined />}
          />
        </CenteredDiv>
      </NavbarContainer>
    </>
  );
}

export default NavBar;
