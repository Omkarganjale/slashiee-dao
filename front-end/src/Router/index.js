import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import Header from "../Component/Header";
import Home from "../Component/Layout/Home";
import MyDashboard from "../Component/Layout/MyDashboard";
import AddService from "../Component/Layout/AddService";
import AddRequest from "../Component/Layout/AddRequest";

const Routers = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-dashboard" element={<MyDashboard />} />
      <Route path="/add-a-service" element={<AddService />} />
      <Route path="/add-a-request" element={<AddRequest />} />
      {/* <Route path="/users">users</Route>
        <Route path="/">Home</Route> */}
    </Routes>
  </Router>
);

export default Routers;
