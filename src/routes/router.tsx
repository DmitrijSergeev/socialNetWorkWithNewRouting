import Error404 from "./Error404";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import {Profile} from "../components/profile/Profile";
import {Dialogs} from "../components/dialogs/Dialogs";
import {News} from "../components/news/News";
import {Music} from "../components/music/Music";
import {state} from "../redux/state";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: "/profile",
                element: (
                    <Profile postData={state.profileData.postData}/>
                ),
            },
            {
                path: "/dialogs",
                element: (
                    <Dialogs dialogsData={state.messageData.dialogsData}
                             messageData={state.messageData.messages}
                    />
                ),
            },
            {
                path: "/news",
                element: (
                    <News />
                ),
            },
            {
                path: "/music",
                element: (
                    <Music />
                ),
            },

        ],
    },
]);