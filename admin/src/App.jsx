import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import VendorsList from "./pages/VendorsList";
import VendorsView from "./pages/VendorsView";
import Login from "./components/Login"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "./context/AuthContext";


export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '₹'

const App = () => {
  const {token,role} = useContext(AuthContext)

  return (
    <div className="bg-gray-50 min-h-screen">
      {token == "" ? <Login /> :  <>
        <Navbar/>
        <hr />
        <div className="flex w-full">
          <Sidebar />
          <div className="w-[75%] mx-auto ml-[max(4vw,25px)] my-8 text-gray-600 text-base">
            <Routes>
              <Route path="/" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
              <Route path= "/vendorsview" element={<VendorsView />} />
              {role === "Admin" ? <Route path="/vendor-list" element={<VendorsList />}/> : ""}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </>}
     <ToastContainer/>
    </div>
  );
};

export default App;
 