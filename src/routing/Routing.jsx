import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Navbar from "../components/main-componants/Navbar";
import Footer from "../components/main-componants/Footer";
import PostDetail from "../pages/PostDetail";
import ErrorElement from "../components/common/ErrorElement";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage"
const Routing = () => {
  return (
    <>
      <Navbar />
      <section className=" min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/signin" element={<LoginPage/>} />
          
          {/* Use a route parameter to capture the category */}
          <Route path="/:category/:postId" element={<PostDetail />} />
          {/* Fallback route for unknown paths */}
          <Route path="*" element={<ErrorElement />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
};

export default Routing;
