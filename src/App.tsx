import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import {Outlet} from "react-router-dom";

function App() {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
