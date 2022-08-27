
import React from "react";
  
const Support = () => {
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
   
       <button className="Login_try_btn" style={{ marginTop: '20px'}}>LOG IN</button>

      </div>
 </div>






      <h1 className="heading_login" style={ {color:"#111324"} }>Sign up for free</h1>
      <p className="para4">Start sending beautifully designed emails today with our drag-and-drop editor and library of free templates.</p>
     
       
 <form className="form">

  <input type="text"  placeHolder="Full name" className="email_input"></input> <br />
  <input type="text" placeHolder="Company name" className="email_input"></input> <br />
  <input type="email" placeHolder= "Email Address" className="email_input"></input> <br />
  <input type="password" placeHolder="Password" className="password_input"></input>
       
   
        {/* <div className="small_robo_chk">

           <div>
           <input type="checkbox" />
            <label> I'm not a robot</label>
           </div>
           <div>
           <img src="./images/captcha.jpeg" className="capcha" alt="" />
           
           </div>
        </div> */}

        <p style={{fontSize:"10px" , marginLeft:'60%'} }> Between 8 and 256 characters.
</p>

        <button className="create_btn">Create my account</button>
        <p style={{fontSize:"10px",textAlign:"center",color: "#8e959c" } }>To find out more about how we're using the information you're giving us, please review our privacy statement.</p>
      </form>
     
     <div className="crete_nam2">
     
      <p style={{ color: "#8e959c" ,fontSize:"12px" } }>Already have an account?Log in. </p>

      <p style={{ color: "#8e959c" ,fontSize:"12px" } }> By signing up, you agree to our Terms of Use and Anti-spam Policy.</p>
     </div>
    </div>
  );
};
  
export default Support;