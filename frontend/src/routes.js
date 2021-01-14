import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';

import Home from './Pages/Home';
import Donate from './Pages/Donate';

export default function Pages(){
    return (
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/donate" element={ <Donate/> }/>
        </Routes>
    );
}