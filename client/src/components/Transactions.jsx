/*
 * Author: Mohammed Musthafa
 * Created Date: Sunday December 11th 2022
 * Product : HighLevel Wallet
 */

import { Table } from "antd";
import moment from "moment";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions, setPage, setSort } from "../redux/transactions/actions";

function Transactions() {
  const dispatch = useDispatch();
  const { transactions, sort, total_count,page } = useSelector(
    (state) => state.transactions
  );

  useEffect(() => {
    dispatch(fetchTransactions());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(fetchTransactions());
    // eslint-disable-next-line
  }, [sort.date, sort.amount, page]);

  const pageChangeHandler = (page) => {
    dispatch(setPage(page))
  }

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (_, { date }) => {
        return moment(date).format("YYYY MM DD h:mm:ss");
      },
      defaultSortOrder: "descend",
      sorter: (a, b, direction) => {
        const sort = {
          date: direction === "descend" ? -1 : 1,
        };
        dispatch(setSort(sort));
      },
      sortDirections: ["ascend", "descend", "ascend"],
    },
    {
      title: "Type",
      dataIndex: "transaction_type",
      key: "transaction_type",
      width: 100,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 300,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 150,
      sortDirections: ["ascend", "descend", "ascend"],
      sorter: (a, b, direction) => {
        const sort = {
          amount: direction === "descend" ? -1 : 1,
        };
        dispatch(setSort(sort));
      },
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      width: 150,
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={transactions}
        pagination={{ total: total_count, current: page, onChange: pageChangeHandler }}
      />
    </>
  );
}

export default Transactions;
