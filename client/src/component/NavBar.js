import React from "react";
// import { getAuth, signOut } from "firebase/auth";
// import { auth } from "../../firebaseinit";
import styles from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
// import { authContext } from "../../Context";


export default function NavBar() {
  const [isLogin, setisLogin] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

// //   const uid = useContext(authContext);
// //   const [menuOpen, setMenuOpen] = useState(false);
//   // const [userName, setUserName] = useState(props.name);
// //   const [userid, setuserid] = useState(uid);

  const handleLogout= () => {
    // Your login logic here
     localStorage.removeItem("user");
      setisLogin("");

  };

  useEffect(() => {
    setisLogin(localStorage.getItem("user"));
     console.log("ye navbar ka hai",isLogin);
  }, []);

  return (
    <nav  >
      <Link to="/" className={styles.title}>
        Expenso
      </Link>
       {/* {isLogin&&<Link to="/Expenses" className={styles.title}>{localStorage.getItem("user")}
       </Link>} */}
       <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? styles.open : ""}>
        <li className={styles.navi}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.navi}>
          <NavLink to="/about">About</NavLink>
        </li>
         
          {/* <li>
          <NavLink to="/">{${props.name}}</NavLink>
        </li> */}
           {isLogin? <> 
           <li className={styles.navi}>
             
           <NavLink to="/Analytics" className={styles.navi}>Analytics</NavLink>

         </li>
         <li className={styles.navi}>
             
           <NavLink to="/Expenses" >Expenses</NavLink>

         </li>
         <li className={styles.navi}>
             
             <NavLink to="/" onClick={handleLogout} >SignOut</NavLink>
 
           </li>
         </>
           :<>
           <li className={styles.navi}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className={styles.navi}>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className={styles.navi}>
              <NavLink to="/Register">SignUp</NavLink>
            </li>
           </>
           }
           
        
          
            
        

        
      </ul>
    </nav>
  );
    };

     
