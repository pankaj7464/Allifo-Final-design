import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/About-Us";
import ContactUs from "../pages/Contact-Us";
import NotFound from "../pages/NotFound";
import Navbar from "../components/main-componants/Navbar";
import Footer from "../components/main-componants/Footer";
import PostDetail from "../pages/PostDetail";
const Routing = () => {
  return (
    <>
      <Navbar />
      <section className=" min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Use a route parameter to capture the category */}
          <Route path="/:category/:postId" element={<PostDetail />} />

          {/* Fallback route for unknown paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
};

export default Routing;
