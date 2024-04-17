import React from "react";
import { Form, Input, message, Modal, Select } from "antd";
import styles from './AddEditTransaction.module.css';
import { useState } from "react";
import axios from "axios";
import Spinner from './Spinner.js';
import toast from "react-hot-toast";

function AddEditTransaction({
    setShowAddEditTransactionModal,
  showAddEditTransactionModal,
  selectedItemForEdit,
  setSelectedItemForEdit,
  getTransactions
}) {

    const [loading, setLoading] = useState(false);
  
    const onFinish = async (values) => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
 
        setLoading(true);
        if (selectedItemForEdit) {
          const response = await axios.post("https://expensetracker-backend-yn37.onrender.com/api/edit-transaction", {
            payload : {
             ...values,
             userid: user._id,
            },
           transactionId: selectedItemForEdit._id,
         } );
        if(response?.data?.error){
          message.error("enter all fields");
          setLoading(false);
        }
        else{
          getTransactions();
            message.success("transaction updated successfully");
            setLoading(false);
        }
        }
        else{
        const response = await axios.post("https://expensetracker-backend-yn37.onrender.com/api/add-transaction", {...values,userid:user._id});
        if(response?.data?.error){
          message.error("enter all fields");
          setLoading(false);
        }
        else{
          getTransactions();
            message.success("transaction added successfully");
            setLoading(false);
        }
      }
        setShowAddEditTransactionModal(false);
        setSelectedItemForEdit(null);
      } catch (error) {
        setLoading(false);
        message.error("something went wrong");
      }
    };

  return (
    <Modal  
    title={selectedItemForEdit ? "Edit Transaction" : "Add Transaction"}
    open={showAddEditTransactionModal}
    onCancel={() => setShowAddEditTransactionModal(false)}
    footer={false}
  >
    {loading && <Spinner />}
    <Form
      layout="vertical"
      className={`${styles.transactionform}`}
      onFinish={onFinish}
      initialValues={selectedItemForEdit}
    >
      <Form.Item label="Amount" name="amount">
        <Input type="text" />
      </Form.Item>

      <Form.Item label="Type" name="type">
        <Select>
          <Select.Option value="income">Income</Select.Option>
          <Select.Option value="expense">Expense</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Category" name="category">
        <Select>
          {" "}
          <Select.Option value="salary">Salary</Select.Option>
          <Select.Option value="freelance">Freelance</Select.Option>
          <Select.Option value="food">Food</Select.Option>
          <Select.Option value="entertainment">Entertainment</Select.Option>
          <Select.Option value="investment">Investment</Select.Option>
          <Select.Option value="travel">Travel</Select.Option>
          <Select.Option value="education">Education</Select.Option>
          <Select.Option value="medical">Medical</Select.Option>
          <Select.Option value="tax">Tax</Select.Option>
          <Select.Option value="others">Others</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Date" name="date">
        <Input type="date" />
      </Form.Item>

      <Form.Item label="Reference" name="reference">
        <Input type="text" />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input type="text" />
      </Form.Item>

      <div className="d-flex justify-content-end">
        <button className={`${styles.primary}`} type="submit">
          SAVE
        </button>
      </div>
    </Form>
  </Modal>
  );
}

export default AddEditTransaction;