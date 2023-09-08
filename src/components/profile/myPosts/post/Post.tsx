import React from 'react';
import samurai from '../../../../img/samurai.png'
import {MyPostsType} from "../My Posts";

export type PostType = {
    postData: MyPostsType[]
}

export const Post = (props: PostType) => {
    return (
        <div>

            {props.postData.map((el) => {
                return (
                    <div>
                        <img src={samurai} alt={'logo'}/>
                        <h3>{el.message}</h3>
                        <div><h4>like: {el.likesCount}</h4></div>
                    </div>
                )
            })}
        </div>
    );
};
