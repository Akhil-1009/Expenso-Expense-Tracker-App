import  {message} from "antd";
import React from "react";
// import img from "../../../images/contact-us.jpg";
import styles from "./contact.module.css";
import { ScrollToTop } from "../component/ScrollToTop";
import { Container } from "reactstrap";
import NavBar from '../component/NavBar';
import toast from "react-hot-toast";

const Contact = () => {
  function handleSubmit(e) {
    e.preventDefault();
    message.success("email sent we will get back to you soon");

  }
  return (
    <>
           <NavBar/>
      <ScrollToTop />
      <section className={`${styles.common__section}`}>
        <Container >
          <h1 className={`text-light `}>Contact Us</h1>
          <h5 className={`${styles.customStyles}`}>Get Helps & Friendly Support</h5>
        </Container>
      </section>



      <section className={`${styles.contact}`}>
        <div className={`container ${styles.content}`}>
          <form className={`shadow ${styles.contactform}`}>
            <h4>Fillup The Form</h4> <br />
            <div className={`${styles.contactdiv}`}>
              <input type='text' placeholder='Name' className={`${styles.contactdivinput}`} />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject'className={`${styles.subject}`} />
            <textarea cols='30' rows='10' type='text' placeholder='Description'></textarea>
            <div style={{ width: "100%" }}>
              <button style={{
                fontSize: "17px", margin: 'auto',
                backgroundColor: "green",
                borderRadius: "15px",
                color: "white",
                padding: "10px",

              }}
                onClick={handleSubmit}>Submit Request</button>
            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default Contact