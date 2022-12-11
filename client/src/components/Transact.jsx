/*
 * Author: Mohammed Musthafa
 * Created Date: Sunday December 11th 2022
 * Product : HighLevel Wallet
 */
import { DollarOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio } from "antd";
import { useDispatch } from "react-redux";
import { submitTransaction } from "../redux/transactions/actions";
import { CenteredDiv } from "./styled";
function Transact() {
  const dispatch = useDispatch();
  const handleFormSubmit = (values) => {
    dispatch(submitTransaction(values));
  }
  return (
    <>
      <Form
        name="transact_form"
        className="login-form"
        onFinish={handleFormSubmit}
      >
        <Form.Item
          name="amount"
          rules={[{ required: true, message: "Please input an amount!" }]}
        >
          <Input
            prefix={<DollarOutlined className="site-form-item-icon" />}
            placeholder="Amount"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="description"
          rules={[{ required: true, message: "Please input a description!"}]}
        >
          <Input
            placeholder="Description"
            size="large"
          />
        </Form.Item>
        <h3>Transaction Type</h3>
        <Form.Item
          name="transaction_type"
          rules={[
            { required: true, message: "Please select the transaction type" },
          ]}
        >
          <Radio.Group size="large">
            <Radio value="debit"> Debit</Radio>
            <Radio value="credit"> Credit</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <CenteredDiv>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
            >
              Submit
            </Button>
          </CenteredDiv>
        </Form.Item>
      </Form>
    </>
  );
}

export default Transact;
