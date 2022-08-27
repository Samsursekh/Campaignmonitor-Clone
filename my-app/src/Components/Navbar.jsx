
import {Link} from "react-router-dom"
// export default Navbar;



import React from 'react'
// import './Navbar.module.css'

// import { hover } from "@testing-library/user-event/dist/hover"

function Navbar() {

  const styleContactItem = {
   color: 'white',
   marginTop: '15px',
   
  }
  return (
    <div>

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

          <div className="hide">
            <p>Features Overview</p>
            <p>Email Template Builder</p>
            <p>Segmentation</p>
            <p>Personalisation</p>
            <p>Marketing Automation </p>
            <p>Transactional Email</p>
            <p>Analytics</p>
            <p>Integrations</p>

          </div>

          {/* <p className="item1">Features</p> */}
          {/* <Route exact path="/Login" component={Login} /> */}
          <p className="item" >Pricing</p>
          <p className="item">Resources</p>
          <p className="item">Customers</p>
          <p className="item">Gallery</p>
          <p className="item">Agencies</p>
        </div>
       
        <div className="items_div2">
       <Link to="/ContactUs" style={{ textDecoration: 'none'}} > <p className="item" style={styleContactItem}>Contact Us</p></Link>
       <Link to="/Login"  style={{ textDecoration: 'none' } }> <p className="item" style={styleContactItem}>Log in</p></Link>
       <Link to="/Support"> <button className="try_btn" style={{ marginTop: '20px'}}> Try it free</button></Link>

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
      {/* Header ended here */}


      {/* 2nd Header starts here */}

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

 {/* 2nd Header ended here */}


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

        <button className='getStart_btn'>Get started for free</button>
      </div>

  </div>

  {/* 3rd Header eneded here */}


  {/* 4th Header starts here */}

    <div className='fourth_main_div'>
      <div className='sub_left_fourth_main_div'>
       <img src="./images/4th_img.jpeg" className="mobile_img" alt="" />
      </div>
      <div className='sub_right_fourth_main_div'>
       <div>
        <h2>
        SMS is here!</h2>
        <h2>A new way to <i>connect</i>.</h2>
        <h2>A new way to <i>convert</i>.</h2>
        
          <p>Combining SMS and email marketing is the perfect way to build 
              a stronger connection with your audience and maximize ROI. 
              We make it easy to get started.
          </p>
          <button className='learn_btn'> Learn More</button>
       </div>
      </div>
    </div>

     {/* 4th Header ended here */}

     {/*5th Header started here */}
        <div className='fifth_main_div'>
          <div className='sub_left_fifth_main_div'>
            <div><img src="./images/5th_img.jpeg" className="book_img" alt="" /></div>
            

          </div>
          <div className='sub_right_fifth_main_div'>
            <div>
           <h2 >Get started with one of our free templates.</h2>
           <p>Start your email with one of our professionally-designed 
            templates to launch targeted campaigns like 
            marketing offers, product announcements, 
            newsletters, or event promotions.</p>

            <button className='email_btn'>Build an email</button>
            </div>
          </div>
        </div>
     {/*5th Header ended here */}

     {/*6th Header started here */}

       <div className='sixth_main_div'>
       <img src="./images/banner_img.jpg" className="banner_img" alt="" />
       <div className='over_the_image'>
         <h3>"Campaign Monitor helped us easily create beautiful 
          emails that turned our 
          Bombshell wetsuit into a global phenomenon.”</h3>
          <p>James Taylor, Global Creative Director</p>
          <button className='see_rip_btn'>See Rip Curl's success</button>
       </div>
       </div>

     {/*6th Header ended here */}

     {/*7th Header started here */}
      
      <div className='seventh_main_div'>
        <div className='sub_left_seventh_main_div'>
         <div>
          <h3>Automate email journeys for perfectly timed sends.</h3>
          <p>SMost marketers think automation is intimidating. But creating customer journeys has never been more approachable than 
            with the visual journey designer.</p>
            <button className="explore_btn">Explore automation</button>
         </div>
       </div>

       <div  className='sub_right_seventh_main_div'>
       <img src="./images/tree_img.webp" className="tree_img" alt="" />
       </div>
      </div>

     {/*7th Header ended here */}

     {/* 8th main div started here  */}
      
      <div className="eighth_main_div">
      <img src="./images/banner2.webp" className="banner_img" alt="" />
       <div className='over_the_image'>
         <h3>“Campaign Monitor helped transform us from a small idea to a real company thanks to their user-friendly tools — I honestly could not recommend them enough.”</h3>
          <p>Ellen Hyslop, Co-Founder of The GIST</p>
          <button className='see_rip_btn'>See The GIST's success</button>
       </div>
      </div>

     {/* 8th main div ended here  */}

     {/* 9th main div started here  */}

     <div className="nineth_main_div">
       <div>
        <h2 className="heading_9th">
           Get started with Campaign Monitor today
        </h2>
        <p>With our powerful yet easy-to-use tools, it's never been easier to make an impact with email marketing.</p>
      <button className="see_rip_btn">
         Sign up for free
      </button>
       </div>
     </div>
     {/* 9th main div ended here  */}

     {/* footer start here */}
      
      <div></div>

     {/* footer ended here */}

    
    </div>
       <img src="./images/footer.jpeg" className="banner_img" alt="" />
    </div>
  )
}

export default Navbar

