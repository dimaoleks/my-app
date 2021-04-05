import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, messages: 'Hi, how are you?', likesCount: 12},
        {id: 2, messages: 'It\'s my first post', likesCount: 11}
    ],
    newPostText: 'chinases',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, messages: state.newPostText, likesCount: 1}],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const setUser = (userId) => {
    return (dispatch) => {
        if (!userId) {
            userId = 16170; //Constant is me dimaoleks
        }
        usersAPI.setUser(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export default profileReducer;