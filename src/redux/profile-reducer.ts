import {UsersAPI, ProfileAPI} from '../api/api';
import {stopSubmit} from "redux-form";
import {PhotosType, ProfileType} from "../types/types";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const PROFILE_EDIT_STATUS = 'PROFILE_EDIT_STATUS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    profile: null as ProfileType | null,
    profileEditStatus: false,
    isFetching: false,
    status: '',
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType,
            };
        }
        case PROFILE_EDIT_STATUS: {
            return {
                ...state,
                profileEditStatus: action.status,
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        default:
            return state;
    }
};
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType,
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile,
});

type SetStatusActionType = {
    type: typeof SET_STATUS,
    status: string,
}

export const setStatus = (status: string) => ({
    type: SET_STATUS,
    status,
});

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType,
}

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
});

type SetProfileEditStatusActionType = {
    type: typeof PROFILE_EDIT_STATUS,
    status: boolean,
}

export const setProfileEditStatus = (status: boolean): SetProfileEditStatusActionType => ({
    type: PROFILE_EDIT_STATUS,
    status,
});

type EditIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean,
}

export const editIsFetching = (isFetching: boolean): EditIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await UsersAPI.getProfile(userId)

    dispatch(setUserProfile(response.data));

};

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await ProfileAPI.getStatus(userId)

    dispatch(setStatus(response.data));

};

export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        let response = await ProfileAPI.updateStatus(status)

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        alert(error)
    }


};

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await ProfileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }

};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
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
