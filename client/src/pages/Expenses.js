 


import React, { useRef } from 'react';
import DefaultLayout from '../component/DefaultLayout';
import NavBar from '../component/NavBar';
import styles from './Expenses.module.css';
import { useState,useEffect } from 'react';
import {DatePicker, Form, Input, message, Modal, Select,Table } from "antd";
import AddEditTransaction from '../component/AddEditTransaction';
import { Navigate } from 'react-router-dom';
import Spinner from "../component/Spinner";
import axios from "axios";
import moment from "moment";
import { useReactToPrint } from "react-to-print";

import {
  UnorderedListOutlined,
  AreaChartOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
const { RangePicker } = DatePicker;
function Expenses() {
  const conponentPDF= useRef();
  
    const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
    const [transactionsData, setTransactionsData] = useState([]);
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
    const [loading, setLoading] = useState(false);
    const [frequency, setFrequency] = useState("7");
    const [type, setType] = useState("all");
    const [selectedRange, setSelectedRange] = useState([]);
    
   
    const getTransactions = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
  
        setLoading(true);
        const response = await axios.post(
          "https://expensetracker-backend-yn37.onrender.com/api/getall-transaction",{userid: user._id,frequency,
          ...(frequency === "custom" && { selectedRange }),
          type,
        }
        );
          console.log(response);
        if(response?.data?.error)
        {
          message.error(response.data.error);
          setLoading(false);
          Navigate('/login');
        }
        else{
          setTransactionsData(response.data);
        setLoading(false);
      }
      } catch (error) {
        setLoading(false);
        message.error("Something went wrong");
      }
    };

    const deleteTransaction = async (record) => {
      try {
        setLoading(true);
        await axios.post("https://expensetracker-backend-yn37.onrender.com/api/delete-transaction", {
          transactionId: record._id,
        });
        message.success("Transaction Deleted successfully");
        getTransactions();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        message.error("Something went wrong");
      }
    };

    

    useEffect(() => {
      getTransactions();
    }, [frequency,selectedRange,type]);

    const generatePDF= useReactToPrint({
      content: ()=>conponentPDF.current,
      documentTitle:"Userdata",
      onAfterPrint:()=>{
        message.success("pdf downloaded successfully");

      }
  });

    const columns = [
      {
        title: "Date",
        dataIndex: "date",
        render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
        
      },
      {
        title: "Amount",
        dataIndex: "amount",
      },
      {
        title: "Category",
        dataIndex: "category",
      },
      {
        title: "Type",
        dataIndex: "type",
      },
      {
        title: "Reference",
        dataIndex: "reference",
      },
      
    ]
    const column1=[{
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => {
        return (
          <div className={styles.coloumdiv}>
            <EditOutlined
              onClick={() => {
                setSelectedItemForEdit(record);
                setShowAddEditTransactionModal(true);
              }}
            />
            <DeleteOutlined className="mx-3" onClick={()=>deleteTransaction(record)}/>
          </div>
        );
      },
    },]

    return (
           <>
           <NavBar/>
            <DefaultLayout>
            {loading && <Spinner />}
                <div className={`${styles.filter} d-flex justify-content-between align-items-centre`}>
                        <div className='d-flex'>
                      <div className='d-flex flex-column'>
                              <h6>Select Frequency</h6>
                          <Select value={frequency} onChange={(value) => setFrequency(value)}>
                            <Select.Option value="7">Last 1 Week</Select.Option>
                            <Select.Option value="30">Last 1 Month</Select.Option>
                            <Select.Option value="365">Last 1 Year</Select.Option>
                            <Select.Option value="custom">Custom</Select.Option>
                         </Select>
                         {frequency === "custom" && (
                              <div className="mt-2">
                                <RangePicker
                                  value={selectedRange}
                                  onChange={(values) => setSelectedRange(values)}
                                />
                              </div>
                            )}
                       </div>
                       <div className="d-flex flex-column mx-5">
                              <h6>Select Type</h6>
                                <Select value={type} onChange={(value) => setType(value)}>
                                  <Select.Option value="all">All</Select.Option>
                                  <Select.Option value="income">Income</Select.Option>
                                  <Select.Option value="expense">Expense</Select.Option>
                                </Select>
                            </div>
                        </div>
                        <div className={`d-flex ${styles.btndiv}`}>
                            <button className={`btn1 ${styles.primary}`}   onClick={ generatePDF}>Get PDF</button>
                        
                            <button className={`btn2 ${styles.primary}`}  onClick={() => setShowAddEditTransactionModal(true)}>ADD NEW</button>
                        </div>
                </div>
                <div className={`d-flex ${styles.tableanaltics}`}>
                <div className={`table ${styles.table1}`}  ref={conponentPDF}>
            <Table columns={columns} dataSource={transactionsData} />
              </div>
              <div className={`table ${styles.table2}`}>
            <Table columns={column1} dataSource={transactionsData} pagination={false} />
              </div>
                </div>

                {showAddEditTransactionModal && (
        <AddEditTransaction
          showAddEditTransactionModal={showAddEditTransactionModal}
          setShowAddEditTransactionModal={setShowAddEditTransactionModal}
          selectedItemForEdit={selectedItemForEdit}
          setSelectedItemForEdit={setSelectedItemForEdit}
          getTransactions={getTransactions}
        />
      )}

            </DefaultLayout>
            </>
    )
}

export default Expenses;