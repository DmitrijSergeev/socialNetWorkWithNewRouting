import {rerenderEntireTree} from "../index";

export type StateType = {
    profileData: ProfileDataType
    messageData: MessageDataType
}
export type ProfileDataType = {
    postData: PostDataType[]
}
export type MessageDataType = {
    dialogsData: DialogsDataType[]
    messages: MessagesType[]
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}
export type PostDataType = {
    message: string
    likesCount: number
}
export let state = {
    profileData: {
        postData: [
            {
                message: 'How are you',
                likesCount: 0
            },
            {
                message: 'Never say never',
                likesCount: 23
            },
        ],
        newPostText: ''
    },
    messageData: {
        dialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Igor'},
            {id: 3, name: 'Viktor'},
            {id: 4, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Yo!'},
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profileData.newPostText,
        likesCount: 14
    }
    state.profileData.postData.push(newPost);
    rerenderEntireTree(state);
}
export let updatePost = (newText: string) => {

    state.profileData.newPostText = newText;
    rerenderEntireTree(state);
}