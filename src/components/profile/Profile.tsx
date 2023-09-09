import React, {FC} from 'react';
import {MyPosts} from "./myPosts/My Posts";
import {ProfileInfo} from "./profileinfo/ProfileInfo";
import {PostDataType, updatePost} from "../../redux/state";

export type ProfilePropsType = {
    postData: PostDataType[]
    addPost: (postMessage: string)=>void
    newPostText: string
    updatePost: (newText: string)=>void
}

export const Profile: FC<ProfilePropsType> = (props) => {
    const {postData, addPost, newPostText} = props

    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={postData}
                     addPost={addPost}
                     newPostText={newPostText}
                     updatePost={updatePost}
            />
        </div>
    );
};
