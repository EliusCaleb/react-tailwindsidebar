import React from 'react'
import { Route,Routes } from "react-router-dom";
import User from './User';
import Analytics from "./Analytics";
import Setting from "./Setting";
import Messages from "./Messages";
import Cart from "./Cart";
import Saved from "./Saved";
import Dashboard from "./Dashboard";
import Files from "./Files";
import Layout from './Layout';

const Routing = () => {
  return (
    <div>
      <Layout>
      <Routes>
        <Route path="/user" element={<User/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/files" element={<Files />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/analytics" element={<Analytics />} />
        
      </Routes> 
      </Layout>
     
    </div>
  )
}

export default Routing