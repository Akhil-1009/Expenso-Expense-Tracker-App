import { Form, message } from "antd";
import Input from "antd/lib/input/Input";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './authentication.module.css';
import axios from "axios";
import Spinner from "../component/Spinner";
import NavBar from "../component/NavBar";
import toast from "react-hot-toast";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(true);
  const onFinish =  (values) => {
    try {
      setLoading(true);
      console.log(values);
      const fetch= async()=>{
        const response=await axios.post("https://expensetracker-backend-yn37.onrender.com/api/register", values);
        if (response?.data?.error) {
          message.error(response?.data?.error);
          setLoading(false);
        }
        else{
        // console.log(data);
        message.success("Registration Successfull on");
        setLoading(false);
        navigate("/login");
        }
      }
       fetch();
    } catch (error) {
      message.error("Something went wrong");
      setLoading(false);
    }
  };

//   useEffect(() => {
//     if (localStorage.getItem("sheymoney-udemy-user")) {
//       navigate("/");
//     }
//   }, []);

  return (
    <> 
    <NavBar/>
    <div className={`${styles.register}`}>
      {loading && <Spinner />}
      <div className="row justify-content-center align-items-center w-100 h-100 ">
        <div className="col-md-5">
          <div className={styles.lottie}>
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_06a6pf9i.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="col-md-4">
          <Form layout="vertical" onFinish={onFinish}  className={styles.loginform}>
          {/* <Form layout="vertical"> */}

            <h1>REGISTER</h1>
           
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Registered , Click Here To Login</Link>
              <button className={styles.secondary} type="submit">
                REGISTER
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Register;