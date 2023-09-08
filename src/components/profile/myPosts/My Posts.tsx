import React from 'react';
import {Post} from "./post/Post";

export type MyPostsType = {
    message: string,
    likesCount: number
}
export type MyPropsPostType = {
    postData: MyPostsType[]
}

export const MyPosts = (props: MyPropsPostType) => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post postData={props.postData}/>
        </div>
    );
};
