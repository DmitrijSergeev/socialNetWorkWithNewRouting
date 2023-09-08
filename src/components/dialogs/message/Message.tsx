import React from 'react';

type MessageType = {
    id: number
    message: string
}
export type MessagePropsType = {
    messageData: MessageType[]
}

export const Message = (props: MessagePropsType) => {
    return (
        <div>
            <h3>{props.messageData.map( (el)=>{
                return (
                    <div key={el.id}>{el.message}</div>
                )
            } )}</h3>
        </div>
    );
};
