import React,{useEffect,useState} from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; 


import { auth } from "../src/firebaseConfig";




import AgencyLandingPage from "demos/AgencyLandingPage.js";


 import LoginPage from "pages/Login.js";
 import SignupPage from "pages/Signup.js";

 import ContactUsPage from "pages/ContactUs.js";

import AboutUs from "pages/AboutUs";
import BlogIndex from "pages/BlogIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Pricing from "pages/Pricing";
import DetailsOfTest from "pages/DetailsOfTest";
import CareerLibPage from "pages/CareerLibPage";

export default function App() {

  useEffect(() => {
    document.title = 'Career Point';
  }, []);
  const [userName, setUserName] = useState("");
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        
      } else setUserName("");
    });
  }, []);

  

  return (
    <>
    
      <GlobalStyles />

      <Router>
        <Routes>
        
          <Route path="/" element={<AgencyLandingPage/>} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Contactus" element={<ContactUsPage />} />
          <Route path="/BlogIndex" element={<BlogIndex />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Pricing" element={<Pricing/>} />
          <Route path="/DetailsOfTest" element={<DetailsOfTest/>} />
          <Route path="/CareerLibPage" element={<CareerLibPage/>} />
          
        </Routes>
      </Router>
    </>
  );
}

