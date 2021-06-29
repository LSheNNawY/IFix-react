import React from "react";
import { Link } from "react-router-dom";

// react-bootstrap components
import "../../assets/dashboard/css/style.css"

function Admin_Login() {
    return (
        <div className="body">
       <div class="login-box">
        <h2>Login</h2>
        <form action="" class="form">
        <div class="user-box">
            <input class="input" type="text" id="" required=""/>
            <label class="label" for="">Username</label>
        </div>
        
        <div class="user-box">
            <input class="input" type="password" id="" required=""/>
            <label class="label" for="">Password</label>
        </div>
        
        <Link >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Link >

        </form>
  
  </div>
  </div>
 
            
    );
}

export default Admin_Login;
