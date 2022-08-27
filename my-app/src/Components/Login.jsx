
import React from "react";
  
const Login = () => {
  return (
    <div>


  
      <div className="Login_navbar">

      

        <div className="Login_logo_div">
       

         <img src="./images/login_logo.png" className="Login_logo_img" alt="" />
     </div>
        <div className="Login_items_div1">

          <select className="Login_item1">
          <option value="">Features</option>
          </select>

          {/* <div className="hide">I am shown when someone 
           hovers over the div above.</div> */}

         
          <p className="Login_item" >Pricing</p>
          <p className="Login_item">Resources</p>
          <p className="Login_item">Customers</p>
          <p className="Login_item">Gallery</p>
          <p className="Login_item">Agencies</p>
        </div>
       
        <div className="Login_items_div2">
      <p className="Login_item" >Contact Us</p>
      <p className="Login_item" >Log in</p>
       <button className="Login_try_btn" style={{ marginTop: '20px'}}>SIGN UP</button>

      </div>
 </div>






      <h1 className="heading_login">Log In</h1>

     
       
 <form className="form">
 <label className="leb"> Email </label> <br />
  <input type="email" placeHolder="Enter Email Here" className="email_input"></input> <br />
  <label> Password </label><br />
  <input type="password" placeHolder="Enter Password Here" className="password_input"></input>
       
        <p>Identity check</p>
        <div className="small_robo_chk">

           <div>
           <input type="checkbox" />
            <label> I'm not a robot</label>
           </div>
           <div>
           <img src="./images/captcha.jpeg" className="capcha" alt="" />
           
           </div>
        </div>

        <button className="submit_btn"> LOG IN</button>
        <p className="cant" >Can’t remember your password?</p>
      </form>
     
     <div className="crete_nam">
      <h4 style={ {color: "#26a6df",cursor:"pointer" } }>CREATE A FREE ACCOUNT</h4>
      <p style={{ color: "#8e959c"  } }>Sign up for a free account, and start sending 
        campaigns for as little as $9/month.</p>
     </div>

    </div>
  );
};
  
export default Login;