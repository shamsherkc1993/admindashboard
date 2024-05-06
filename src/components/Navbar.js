import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';


export default function Navbar(props) {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard user={props.user}/>} />
        
    </Routes>
  </BrowserRouter>
  )
}
