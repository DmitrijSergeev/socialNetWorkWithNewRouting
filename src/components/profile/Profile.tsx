import React, {FC} from 'react';
import {MyPosts} from "./myPosts/My Posts";
import {ProfileInfo} from "./profileinfo/ProfileInfo";
import {PostDataType} from "../../redux/state";

export type ProfilePropsType = {
    postData: PostDataType[]
    addPost: (postMessage: string)=>void
}

export const Profile: FC<ProfilePropsType> = (props) => {
    const {postData, addPost} = props

    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={postData} addPost={addPost}/>
        </div>
    );
};
