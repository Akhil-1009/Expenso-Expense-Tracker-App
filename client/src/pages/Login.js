import { Form, message } from "antd";
import Input from "antd/lib/input/Input";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './authentication.module.css';
import axios from "axios";
import Spinner from "../component/Spinner";
import NavBar from "../component/NavBar";
import toast from "react-hot-toast";

function Login() {
  const [loading, setLoading] = useState(false);
  const [isLogin, setisLogin] = useState("");


  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response= await axios.post("https://expensetracker-backend-yn37.onrender.com/api/login", values);
      console.log(response.data.user);
      if (response?.data?.error) {
        message.error(response?.data?.error);
        setLoading(false);
      }
      else{
      localStorage.setItem(
        "user",
        // response.data.user
        JSON.stringify(response.data.user)
      );
      console.log(response);
      setLoading(false);
      message.success("Login successful");
      setisLogin(localStorage.getItem("user"));
      navigate("/");
      }
    } catch (err) {
      setLoading(false);
      message.error("Login is failed");
    }
  };

//   useEffect(() => {
//     if (localStorage.getItem("sheymoney-udemy-user")) {
//       navigate("/");
//     }
//   }, []);

  return (
    <> <NavBar/>
    <div className={`${styles.register} `}>
      {loading && <Spinner />}
      <div className={`row justify-content-center align-items-center w-100 h-50 ${styles.firstdiv}`}>
        <div className="col-md-4">
          <Form layout="vertical" onFinish={onFinish} className={styles.loginform}>
          {/* <Form layout="vertical" > */}
          
            <h1>Login</h1>
    

            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/register">
                Not Registered Yet , Click Here To Register
              </Link>
              <button className={styles.secondary} type="submit">
                LOGIN
              </button>
            </div>
          </Form>
        </div>
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
      </div>
    </div>
    </>
  );
}

export default Login;