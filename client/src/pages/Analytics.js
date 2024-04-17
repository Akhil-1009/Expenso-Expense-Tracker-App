import React from 'react'
import DefaultLayout from '../component/DefaultLayout';
import NavBar from '../component/NavBar';
import styles from './Expenses.module.css';
import { useState,useEffect } from 'react';
import {DatePicker, Form, Input, message, Modal, Select,Table } from "antd";
import AddEditTransaction from '../component/AddEditTransaction';
import { Navigate } from 'react-router-dom';
import Spinner from "../component/Spinner";
import Analitics from '../component/Analitics';
import axios from "axios";
import moment from "moment";
const { RangePicker } = DatePicker;
function Analytics() {
    const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
    const [transactionsData, setTransactionsData] = useState([]);
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
    useEffect(() => {
      getTransactions();
    }, [frequency,selectedRange,type]);

     

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
                         
                </div>
                <div className={`${styles.tableanaltics}`}>
                  <Analitics transactions={transactionsData} />
                </div>

                 

            </DefaultLayout>
            </>
    )
}
export default Analytics;