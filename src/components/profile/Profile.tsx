import React, {FC} from 'react';
import {MyPosts} from "./myPosts/My Posts";
import {ProfileInfo} from "./profileinfo/ProfileInfo";
import {PostDataType} from "../../redux/state";

export type ProfilePropsType = {
    postData: PostDataType[]
}

export const Profile: FC<ProfilePropsType> = (props) => {
    const {postData} = props

    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={postData}/>
        </div>
    );
};
