import React, {RefObject} from 'react';
import {Post} from "./post/Post";

export type MyPostsType = {
    message: string,
    likesCount: number
}
export type MyPropsPostType = {
    postData: MyPostsType[]
    addPost: (postMessage: string)=>void
}

export const MyPosts = (props: MyPropsPostType) => {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();
    const onCklickHandler = () => {
        props.addPost(String(newPostElement.current?.value))
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={ onCklickHandler }>Add post</button>
            </div>
            <Post postData={props.postData}/>
        </div>
    );
};
