import { Progress } from "antd";
import React from "react";
import styles from './Analytics.module.css';
function Analitics({ transactions }) {
  const totalTransactions = transactions.length;
  const totalIncomeTransactions = transactions.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenceTransactions = transactions.filter(
    (transaction) => transaction.type === "expense"
  );
  var totalIncomeTransactionsPercentage =
    (totalIncomeTransactions.length / totalTransactions) * 100;
    if(isNaN(totalIncomeTransactionsPercentage)){
      totalIncomeTransactionsPercentage=0;
    }
  var totalExpenceTransactionsPercentage =
    (totalExpenceTransactions.length / totalTransactions) * 100;
    if(isNaN(totalExpenceTransactionsPercentage)){
      totalExpenceTransactionsPercentage=0;
    }

  const totalTurnover = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalIncomeTurnover = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpenceTurnover = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  console.log(totalExpenceTurnover);
  var totalIncomeTurnoverPercentage =
    (totalIncomeTurnover / totalTurnover) * 100;
  var totalExpenceTurnoverPercentage =
    (totalExpenceTurnover / totalTurnover) * 100;
    if(isNaN(totalIncomeTurnoverPercentage)){
      totalIncomeTurnoverPercentage=0;
    }
    if(isNaN(totalExpenceTurnoverPercentage)){
      totalExpenceTurnoverPercentage=0;
    }

  const categories = [
    "salary",
    "entertainment",
    "freelance",
    "food",
    "travel",
    "investment",
    "education",
    "medical",
    "tax",
    "others",
  ];

  return (
    <div className={`${styles.analytics}`}>
      <div className="row">
        <div className="col-md-6 mt-3">
          <div className={`${styles.transactionscount}`}>
            <h4>Total Transactions : {totalTransactions}</h4>
            <hr />
            <h5>Income : <span className={styles.incomecolor}>{totalIncomeTransactions.length}</span> </h5>
            <h5>Expense : <span className={styles.expensecolor}>{totalExpenceTransactions.length}</span></h5>

            <div className="progress-bars d-flex">
              <Progress
                className="mx-5"
                strokeColor="#5DD64F"
                type="circle"
                percent={totalIncomeTransactionsPercentage.toFixed(0)}
              />
              <Progress
                strokeColor="#E5572F"
                type="circle"
                percent={totalExpenceTransactionsPercentage.toFixed(0)}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-3">
          <div className={`${styles.transactionscount}`}>
            <h4>Total Turnover : {totalTurnover}</h4>
            <hr />
            <h5>Income : <span className={styles.incomecolor}>{totalIncomeTurnover}</span></h5>
            <h5>Expense : <span className={styles.expensecolor}>{totalExpenceTurnover}</span></h5>

            <div className="progress-bars">
              <Progress
                className="mx-5"
                strokeColor="#5DD64F"
                type="circle"
                percent={totalIncomeTurnoverPercentage.toFixed(0)}
              />
              <Progress
                strokeColor="#E5572F"
                type="circle"
                percent={totalExpenceTurnoverPercentage.toFixed(0)}
              />
            </div>
          </div>
        </div>
      </div>
       <hr />
      <div className="row">
        <div className="col-md-6">
          <div className="category-analysis">
            <h4>Income - Category Wise</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter((t) => t.type == "income" && t.category === category)
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && <div className={`${styles.categorycard}`}>
                  <h5>{category}</h5>
                  <Progress strokeColor='#5DD64F' percent={((amount / totalIncomeTurnover) * 100).toFixed(0)} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-md-6">
          <div className="category-analysis">
            <h4>Expense - Category Wise</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter((t) => t.type == "expense" && t.category === category)
                .reduce((acc, t) => acc + t.amount, 0);
              return (
               amount > 0 && <div className={`${styles.categorycard}`}>
                  <h5>{category}</h5>
                  <Progress strokeColor='#E5572F' percent={((amount / totalExpenceTurnover) * 100).toFixed(0)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analitics;