
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Dashboard from "./pages/Dashboard";
import 'antd/dist/reset.css';
import PDFGenerater from './pages/PDFGenerater';
const App = () => {
 

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pdf-generator" element={<PDFGenerater />} />
     
    </Routes>
  );
};

export default App;
