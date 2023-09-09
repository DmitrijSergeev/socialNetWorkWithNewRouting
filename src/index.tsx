import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router";
import {state, StateType} from "./redux/state";

export let rerenderEntireTree = (state: StateType) => {
    return ReactDOM.render(/*
    <BrowserRouter>
        <App />,
    </BrowserRouter>,*/

        <RouterProvider router={router}/>,

        document.getElementById('root')
    );
}
rerenderEntireTree(state);
