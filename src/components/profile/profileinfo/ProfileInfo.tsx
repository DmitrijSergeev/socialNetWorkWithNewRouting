import React from 'react';
import sea from "../../../img/beach-sea-coast.jpg";
import s from "../Profile.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={sea} className={s.sea} alt={'background'}/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    );
};