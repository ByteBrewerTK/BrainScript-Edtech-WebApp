import React, { useState } from "react";
import {Route, Routes} from "react-router-dom";
import MainHeader from "./components/pages/MainHeader";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NavBar from "./components/NavBar";
import gradiantLogo from './assets/BrainScript-logo-gradient-preview.png';
import Login from "./components/Login";
import SignUp from "./components/SignUp.jsx";
import Dashboard from "./components/pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";


export default function App() {

  const [isLogedIn, setIsLogedIn] = useState();

  return (
    <section className="App">

      <div>
        <NavBar isLogedIn = {isLogedIn} setIsLogedIn = {setIsLogedIn}/>
      </div>

      <Routes>
        <Route path="/" element = {<MainHeader/>}>
          <Route index element = {<Home gradiantLogo = {gradiantLogo} />}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/login" element = {<Login setIsLogedIn = {setIsLogedIn}/>}/>
          <Route path="/signup" element = {<SignUp setIsLogedIn = {setIsLogedIn}/>}/>
          <Route path="/dashboard" element = {
            <PrivateRoute isLogedIn = {isLogedIn}>
              <Dashboard/>
            </PrivateRoute>

          }/>
        </Route>
      </Routes>


    </section>
  );
}
