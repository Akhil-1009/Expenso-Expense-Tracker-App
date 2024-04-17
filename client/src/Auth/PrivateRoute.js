// import { Navigate } from "react-router-dom";
// import { useState ,useEffect} from "react";


// const PrivateRoute= ({Component}) =>{
//   const [isLogin, setisLogin] = useState(false);
//   useEffect(() => {
//     console.log("ye use effet me ghuste hi",isLogin);   
//     console.log("ye local me kya hua",localStorage.getItem("user"));
//     // console.log("setp ki value",setp);
//     // setp?setisLogin(true):setisLogin(false);
//     // setisLogin(setp);
//     const check= async () =>{
//     const  setp=await localStorage.getItem("user");
//     setp?setisLogin(true):setisLogin(false);
     
//     }
//         console.log("ye baad me set krne ke",isLogin);   
//   }, []);
  
//   return isLogin?<Component/>:<Navigate to="/login"/>;
// }
// export default PrivateRoute;


import { Navigate, json } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { authConst } from "../Context/Context";
import { isAuthenticated } from "./authUtil";
const PrivateRoute = ({ Component }) => {
    
    // const a=useContext(authConst);
    // const [isLogin, setisLogin] = useState(a);
    // const [auth, setAuth] = useState(false);
  
    // useEffect(() => {
    //   let fromLS = localStorage.getItem("user");
    //   console.log("ye private route ka hai",fromLS);
    //   console.log("ye name hai kya",JSON.parse(fromLS).name.toString());
    //   // console.log("ye private route ka hai",JSON.parse(fromLS));
    //   if (fromLS){ 
    //     setAuth(true);
    //     console.log("ye setauth hai");
    //   }
      
    //   console.log("ye auth ka hai", auth);
    // }, []);

    // useEffect(() => {
    //   let fromLS = localStorage.getItem("user");
    //   console.log("ye private route ka hai", fromLS);
  
    //   if (fromLS) {
    //     setAuth((prevAuth) => {
    //       // Use the updater function to ensure you're working with the latest state
    //       console.log("Previous auth value:", prevAuth);
    //       return true;
    //     });
    //   }
  
    //   console.log("ye auth ka hai", auth); // This will log the previous value of auth due to closure
    // }, []);

//   useEffect(() => {
//     setisLogin(localStorage.getItem("user"));
//      console.log("ye setlogin ki value", isLogin);
//   }, []);
  
    // checkLogin();
//   }, []);

  return (isAuthenticated() ? <Component /> : <Navigate to="/login" />);
};

export default PrivateRoute;
