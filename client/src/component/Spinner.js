import React from "react";
import { Spin } from "antd";
import styles from './DefaultLayout.module.css';
function Spinner() {
  return (
    <div className={styles.spinner} >
      <Spin color='gray' style={{color:'gray'}} size='large'/>
    </div>
  );
}

export default Spinner;