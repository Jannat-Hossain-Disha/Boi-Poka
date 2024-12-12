import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Toaster></Toaster>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
