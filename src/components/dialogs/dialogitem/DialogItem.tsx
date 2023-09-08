import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsType = {
    id: number
    name: string
}
export type DialogsPropsType = {
    dialogsData: DialogsType[]
}

export const DialogItem = (props: DialogsPropsType) => {
    return (
        <div>
            <h3 className={s.dialog}>
                <NavLink
                    to={'/dialogs/'}>{props.dialogsData.map( (el)=>{
                        return (
                            <div key={el.id}>{el.name}</div>
                        )
                } )}
                </NavLink>
            </h3>
        </div>
    );
};
