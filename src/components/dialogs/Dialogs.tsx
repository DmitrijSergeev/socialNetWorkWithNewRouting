import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogitem/DialogItem";
import {Message} from "./message/Message";
import {DialogsDataType, MessagesType} from "../../redux/state";

export type DialogsPropsType = {
    dialogsData: DialogsDataType[]
    messageData: MessagesType[]
}

export const Dialogs: FC<DialogsPropsType> = (props) => {
    const {dialogsData, messageData} = props;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogsData={dialogsData}/>
            </div>

            <div className={s.messages}>
                <Message messageData={messageData}/>
            </div>
        </div>
    );
};
