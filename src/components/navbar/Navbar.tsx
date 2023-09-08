import React from 'react';
import s from './Navbar.module.css'
import {NavLink, useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const onClickMainPageHandler = () => {
        navigate('/profile')
    }
    const onClickBackHandler = () => {
        navigate( - 1)
    }

    return (
        <nav className={s.nav}>
            <div>
                <NavLink className={ ({isActive})=> isActive ? s.active : s.item}
                         to={'/profile'}><h2>Profile</h2>
                </NavLink>
            </div>
            <div>
                <NavLink className={ ({isActive})=> isActive ? s.active : s.item}
                         to={'/dialogs'}><h2>Dialogs</h2>
                </NavLink>
            </div>
            <div>
                <NavLink className={ ({isActive})=> isActive ? s.active : s.item}
                         to={'/news'}><h2>News</h2>
                </NavLink>
            </div>
            <div>
                <NavLink className={ ({isActive})=> isActive ? s.active : s.item}
                         to={'/music'}><h2>Music</h2>
                </NavLink>
            </div>

            <button onClick={onClickMainPageHandler}>Main Page</button>
            <button onClick={onClickBackHandler}>Back</button>

        </nav>
    );
};

export default Navbar;