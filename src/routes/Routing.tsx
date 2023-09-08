import React from 'react';
import {Navigate, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import {Profile} from "../components/profile/Profile";
import {Dialogs} from "../components/dialogs/Dialogs";
import {News} from "../components/news/News";
import {Music} from "../components/music/Music";
import Error404 from "./Error404";
import s from './Routing.module.css'

/*const routes = [
    {element: <Profile/>, path: '/profile/'},
    {element: <Dialogs/>, path: '/dialogs'},
    {element: <News/>, path: '/news'},
    {element: <Music/>, path: '/music'},
]*/

export const Routing = () => {

    return (
        <div className={s.appWrapper}>


            {/*<Routes>
                <Route path={'/'} element={<Navigate to={'/profile'}/>}/>

                {routes.map(({path, element}) => (
                        <Route path={path} element={element}/>
                    ))}

                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/dialogs'} element={<Dialogs/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/music'} element={<Music/>}/>

                <Route path={'*'} element={<Error404/>}/>
            </Routes>*/}


            <Outlet/>

        </div>
    );
};
