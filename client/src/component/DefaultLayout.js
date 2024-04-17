import React from "react";
import  styles from './DefaultLayout.module.css';
function DefaultLayout(props) {
    return (
        <div className={styles.layout}>
            {/* <div className="header d-flex justify-content-between align-items-center" >
                <div >
                   <h1 className="logo">Expenses</h1>
                </div>
                <div>
                    <h1 className="username">username</h1>
                </div>
            </div> */}
            <div className={styles.content}>
                    {props.children}
            </div>

        </div>
    )
}
export default DefaultLayout;