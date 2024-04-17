
import React from "react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.jpeg";
import styles from "./Hero.module.css";
 

 
import budgetEstimation from "../assets/budget-estimation.png";
import reciepts from "../assets/receipt.png";
import deliveryTrack from "../assets/delivery-tracking.png";

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <>
    <div className={`d-flex  ${styles.intro}`}>
      <div className={styles.header}>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>Personal budgeting is the secret to financial freedom. Start your journey today.</p>
         
      </div>
      <div className={styles.image}>
      <img src={illustration} alt="Person with money" width={600} className={styles.image}/>

      </div>

      
  </div>
    <div className={`${styles.heading}`}>
    <h1>Spend your budgets meaningfully</h1>
    <p>Understand how you spend and track budget</p>
  </div>
  <div className={`${styles.cards} d-flex justify-content-between align-items-centre`}>
    <div className={` d-flex flex-column ${styles.card1}`}>
    <img class={styles.budgetestimate} src= {budgetEstimation}/>
    <p> Calculate your budget</p>
    </div>
    <div className={`d-flex flex-column ${styles.card1}`}>
    <img class={styles.budgetestimate} src= {reciepts}/>
    <p> Generate monthly receipt</p>
    </div>
    <div className={`d-flex flex-column ${styles.card1}`}>
    <img class={styles.budgetestimate} src= {deliveryTrack}/>
    <p> Easily track budget</p>
    </div>
    </div>

     

   </>
  );
};

export default Hero;
