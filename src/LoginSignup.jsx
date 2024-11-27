
import react, { useState } from "react";
import './LoginSignup.css'

import user_icon from './assets/user_icon.png';
import email_icon from './assets/email_icon.png';
import password_icon from './assets/password_icon.png';




const LoginSignup = () =>{

    const [action,setAction] = useState("Login");
    return(
        <div className="Container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
            {action==="Login"?<div></div>: <div className="input"> 
            <img src={user_icon} alt=""/>
                <input type="UserName" placeholder="Username"/>
            </div>}
           
            <div className="input">
            <img src={email_icon} alt=""/>
               <input type="Email" placeholder="Email"/>
            </div>
            <div className="input">
            <img src={password_icon} alt=""/>
               <input type="Password" placeholder="Password"/>
            </div>


            </div>
            {action==="Sign Up"?<div></div>:
            <div className="forgot-password">Forget password?<span>Click Here!</span></div>}
            <div className="submit-button">
                <div className={action==="Login"?"submit gray":"submit"}onClick={()=>setAction("Sign Up")}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
            </div>

        </div>
    )
}

export default LoginSignup