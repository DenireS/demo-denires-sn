import {UsersAPI, ProfileAPI, DialogsAPI} from '../api/api';
import {stopSubmit} from "redux-form";
import {setCurrentChatInfo, setDialogUserMessages} from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const PROFILE_EDIT_STATUS = 'PROFILE_EDIT_STATUS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It`s my first post', likesCount: 23},
    ],
    profile: null,
    profileEditStatus: false,
    isFetching: false,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.postId),
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            };
        }
        case PROFILE_EDIT_STATUS: {
            return {
                ...state,
                profileEditStatus: action.status,
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {...state,
                isFetching: action.isFetching};
        }
        default:
            return state;
    }
};

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
});
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId,
});
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
});
export const setProfileEditStatus = (status) => ({
    type: PROFILE_EDIT_STATUS,
    status,
});
export const editIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await UsersAPI.getProfile(userId)

    dispatch(setUserProfile(response.data));

};
export const getStatus = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(userId)

    dispatch(setStatus(response.data));

};

export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await ProfileAPI.updateStatus(status)

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        alert(error)
    }


};
export const savePhoto = (file) => async (dispatch) => {
    let response = await ProfileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }

};
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await ProfileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(setProfileEditStatus(false))
        dispatch(editIsFetching(false))
        dispatch(getUserProfile(userId));
    } else if (response.data.resultCode === 1) {
        dispatch(editIsFetching(false))
        //dispatch(setProfileEditStatus(true))
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
    }
};


export default profileReducer;
