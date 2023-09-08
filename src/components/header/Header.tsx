import React from 'react';
import ya from "../../img/dima.jpg";
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={ya} className={s.ya} alt={'logo'}/>
            <h1>Give peace a chance</h1>
        </header>
    );
};