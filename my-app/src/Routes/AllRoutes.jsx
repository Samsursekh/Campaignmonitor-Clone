import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Navbar from '../Components/Navbar'
import ContactUs from "../Components/ContactUs"
import Support from "../Components/Support"
function AllRoutes() {
  return (
    <div>
     <>
     <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/ContactUs"  element={<ContactUs/>}/>

        <Route path="/Support" element={<Support/>}/>


     </Routes>
     
     
     
     
     
     
     
     
     </>
    </div>
  )
}

export default AllRoutes
