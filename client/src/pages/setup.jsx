/*
 * Author: Mohammed Musthafa
 * Created Date: Saturday December 10th 2022
 * Product : HighLevel Wallet
 */

import { Form, Input, Button } from "antd";
import { DollarOutlined, UserOutlined } from "@ant-design/icons";
import { CenteredDiv } from "../components/styled";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkExisting, setUpWallet } from "../redux/wallet/actions";

function Setup() {
  const dispatch = useDispatch();
  const walletId = useSelector(state => state.wallet?.walletId || '');

  // eslint-disable-next-line
  useEffect(() => { dispatch(checkExisting()) }, []);
  // eslint-disable-next-line
  useEffect(() => { dispatch(checkExisting()) }, [walletId]);

  if(walletId) return <Navigate to='/home' />

  const handleSubmit = ({ name, initial_amount }) => {
    dispatch(setUpWallet(name, initial_amount));
  }

  return (
    <CenteredDiv style={{ height: "100vh" }}>
      <Form
        name="setup_form"
        className="login-form"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
            size="large"
          />
        </Form.Item>
        <Form.Item name="initial_amount">
          <Input
            prefix={<DollarOutlined className="site-form-item-icon" />}
            placeholder="Initial Balance (Optional)"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <CenteredDiv>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
            >
              Setup
            </Button>
          </CenteredDiv>
        </Form.Item>
      </Form>
    </CenteredDiv>
  );
}

export default Setup;
