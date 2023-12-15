import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Component/Navigation";
import "./index.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Galary from "./pages/Galary";
import Contact from "./pages/Contact";
import About from "./pages/About";
import All from "./pages/All";
import Images from "./pages/Images";
import Vedios from "./pages/Vedios";
// import GalaryNav from './Component/GalaryNav'
import CardDetail from "./Component/CardDetail";
import Footer from "./Component/Footer";
// import Footer from './Component/Footer'

export default function App() {
  return (
    <>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route eaxact path="/" Component={Home}></Route>
          <Route path="/Service" Component={Service}></Route>
          <Route path="/Service/:id" Component={CardDetail}></Route>
          <Route path="/galary/" eaxact Component={Galary}>
            <Route index Component={All} />
            <Route path="images" Component={Images} />
            <Route path="vedios" Component={Vedios} />
          </Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/about" Component={About}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}
