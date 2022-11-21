import React from "react";
import Home from './pages/Home';
import { BrowserRouter, Routes ,Route, Link } from "react-router-dom";

const Routers = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home />}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Routers;