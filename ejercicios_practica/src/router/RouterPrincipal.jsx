import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import Contact from "../views/Contact/Contact";
import Error404 from "../views/Error404";
import About from '../views/About/About';
import Nav from '../components/Nav/Nav';



const RouterPrincipal = () => {
    return (
        <Router>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home></Home>}/>
                <Route path='/contact' element={<Contact></Contact>}/>
                <Route path='*' element={<Error404/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </Router>
    );
};

export default RouterPrincipal;