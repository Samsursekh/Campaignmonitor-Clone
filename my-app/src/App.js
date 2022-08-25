// import {Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
// import {BrowserRouter as Router,Switch,Route } from "react-router-dom";

// import Login  from './Components/Login';
// import ContactUs from "./Components/ContactUs";
// import Support from "./Components/Support";


    // <>
  //  <Router>
  //      <Switch>
  //      <Route exact path="/Login" component={Login} />
  //      <Route path="/ContactUs" component={ContactUs} />
  //      <Route path="/Support" component={Support} />
  //      <Redirect to="/" />
  //      </Switch>
  //    </Router> 

    
    
   
    // const navigate = useNavigate();

    // const navigateToContacts = () => {
    //   //  navigate to /contacts
    //   navigate('/contacts');
    // };

    // const navigateHome = () => {
    //   // 👇️ navigate to /
    //   navigate('/');
    // };

    function App() {
      return (
       
          
    <div className="App">
      <div className="navbar">

      

        <div className="logo_div">
        {/* <img src={process.env.PUBLIC_URL+""} />
         */}

         <img src="./images/logo_img.jpeg" className="logo_img" alt="" />
     </div>
        <div className="items_div1">

          <select className="item1">
          <option value="">Features</option>
          </select>

          <div className="hide">I am shown when someone 
           hovers over the div above.</div>

          {/* <p className="item1">Features</p> */}
          {/* <Route exact path="/Login" component={Login} /> */}
          <p className="item" >Home</p>
          <p className="item">Resources</p>
          <p className="item">Customers</p>
          <p className="item">Gallery</p>
          <p className="item">Agencies</p>
        </div>
       
        <div className="items_div2">
        <p className="item" >Contact Us</p>
        <p className="item">Log in</p>
        <button className="try_btn">Try it free</button>


        {/* <Routes>
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
        </Routes> */}

        </div> 
</div> 

 {/* //navbar ended here */}
     
     {/* Header starts here */}

        <div className="main_div">
       
          <div className="sub_maindiv_1">
            <div>

           

             <h1 className="heading">Drive results with 
              unforgettable email marketing.</h1>
             <h4 className="desc">Connecting with your audience has never been 
              easier with Campaign Monitor’s straightforward
               email marketing and automation tools.</h4>
               <div className="btn_div">
                <button className="first_btn">Sign up for free</button>
                <button className="second_btn">Learn more</button>
               </div>
            </div>
          </div>
          <div className="sub_maindiv_2"> <img src="./images/homeImage.png" className="home_img" alt="" /> </div>
          
         </div>
     
     <div className='second_main_div'>
      <h4 className='second_main_div_heading'>Powering email marketing for businesses around the world.</h4>
       <div>
        <div><img src="./images/img_1.png" className="img_icn" alt="" /></div>
        <div><img src="./images/img_2.webp" className="img_icn" alt="" /></div>
        <div><img src="./images/img_3.webp" className="img_icn" alt="" /></div>
        <div><img src="./images/img_4.webp" className="img_icn" alt="" /></div>
        <div><img src="./images/img_5.webp" className="img_icn" alt="" /></div>

       </div>
     </div>

 {/* Header ended here */}

 {/* 3rd Header starts here */}

  <div className="third_main_div">
    <h3 className='heading_third_main_div'>Drag and drop your way to a beautiful email.</h3>
      <div className='sub_third_main_div'>
        <div className='left_side_sub_third_main_div'>
          <div>
          <h6>EASE OF USE</h6>
          <p className='para'>Customize any template or design to showcase your 
            brand using the simply powerful drag-and-drop email builder—no coding required.
            </p>
            <h6>COMPLETE CUSTOMIZATION</h6>
          <p className='para'>Display your brand at its best with precise adjustments to every aspect of your 
            campaign in the email builder.
            </p>
            <h6>MOBILE OPTIMIZATION</h6>
          <p className='para'>Every template is responsive to mobile devices so you can send knowing your campaigns look great everywhere.
            </p>

            <h6>TEMPLATE MANAGEMENT FOR TEAMS</h6>
          <p className='para'>Allow your email designer to lock sections of the template so that your team only updates what you want them to — ensuring 
            your brand style and business critical information all stay intact.
            </p>
            </div>
        </div>
        <div className='right_side_sub_third_main_div'>
          <div><img src="./images/btn_img.webp" className="btn_img" alt="" /></div>
          <div><img src="./images/btn_img2.png" className="btn_img2" alt="" /></div>
        </div>
    </div>

      <div>
      <p className="desc2">Eager to see it in action? Take a look.</p>

        <button className='first_btn'>Get started for free</button>
      </div>

  </div>

  {/* 3rd Header eneded here */}

    <div className='fourth_main_div'>
      
    </div>

    </div>
    
   
  );
}

export default App;
