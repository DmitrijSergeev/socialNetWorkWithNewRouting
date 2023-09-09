import React, {ChangeEvent, RefObject} from 'react';
import {Post} from "./post/Post";

export type MyPostsType = {
    message: string,
    likesCount: number
}
export type MyPropsPostType = {
    postData: MyPostsType[]
    addPost: (postMessage: string)=>void
    newPostText: string
    updatePost: (newText: string)=>void
}

export const MyPosts = (props: MyPropsPostType) => {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();
    const onCklickHandler = () => {
        props.addPost(String(newPostElement.current?.value))
    }
    const onChangePostHandler = () => {
        props.updatePost(String(newPostElement.current?.value))
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onChangePostHandler}
                />
                <button onClick={ onCklickHandler }>Add post</button>
            </div>
            <Post postData={props.postData}/>
        </div>
    );
};
