
import React from "react";
  
const ContactUs = () => {
  return (
    <div>
{/* <h1> contact page </h1> */}
      <div className="main_contact_div">
       <div className="nav_div">
       <img src="./images/logo.png" className="logo_img" alt="" />
       </div>

       <div className="body_div">
        <h4 style={ {color: "white" , textAlign:"center", cursor:"pointer"} }>ASK US YOUR QUESTIONS</h4>
        <hr style={{width: "320px" ,marginBottom:"30px"} } />
        <h3 style={ {color: "white" , textAlign:"center" , border: "1px dotted white" , width:"320px" , margin:"auto", cursor:"pointer"} }>Get started for free  </h3>
        <h3 style={ {color: "white" , textAlign:"center" , cursor:"pointer"} }>Contact the sales team </h3>
        <h3 style={ {color: "white" , textAlign:"center" , cursor:"pointer"} }>Contact the support team </h3>

       </div>
      </div>
    </div>
  );
};
  
export default ContactUs;