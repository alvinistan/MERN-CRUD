import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <div>
      {/* your routes/pages/components */}
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App