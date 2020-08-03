import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, ProfileType} from "../types/types";
import {ProfileAPI} from "../api/profile-api";
import {ResponseResultCodesEnum} from "../api/api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";


let initialState = {
    profile: null as ProfileType | null,
    profileEditStatus: false,
    isFetching: false,
    status: '',
};

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status,
            };
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case 'SAVE_PHOTO_SUCCESS': {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType,
            };
        }
        case 'PROFILE_EDIT_STATUS': {
            return {
                ...state,
                profileEditStatus: action.status,
            };
        }
        case 'TOGGLE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        default:
            return state;
    }
};

export const actions = {
    setUserProfile: (profile: ProfileType) => ({
        type: 'SET_USER_PROFILE',
        profile,
    } as const),
    setStatus: (status: string) => ({
        type: 'SET_STATUS',
        status,
    } as const),

    savePhotoSuccess: (photos: PhotosType) => ({
        type: 'SAVE_PHOTO_SUCCESS',
        photos,
    } as const),

    setProfileEditStatusA: (status: boolean) => ({
        type: 'PROFILE_EDIT_STATUS',
        status,
    } as const),

    editIsFetchingA: (isFetching: boolean) => ({
        type: 'TOGGLE_IS_FETCHING',
        isFetching,
    } as const),
}

export const setProfileEditStatus = (status: boolean): ThunkType => async (dispatch) => {
    dispatch(actions.setProfileEditStatusA(status));
}
export const editIsFetching = (isFetching: boolean): ThunkType => async (dispatch) => {
    dispatch(actions.editIsFetchingA(isFetching));
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await ProfileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data));
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await ProfileAPI.getStatus(userId)

    dispatch(actions.setStatus(data));

};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await ProfileAPI.updateStatus(status)

        if (data.resultCode === ResponseResultCodesEnum.Success) {
            dispatch(actions.setStatus(status));
        }
    } catch (error) {
        alert(error)
    }
};

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await ProfileAPI.savePhoto(file)

    if (data.resultCode === ResponseResultCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let data = await ProfileAPI.saveProfile(profile)

    if (data.resultCode === ResponseResultCodesEnum.Success) {
        dispatch(actions.setProfileEditStatusA(false))
        dispatch(actions.editIsFetchingA(false))
        if (userId != null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error('userId can`t be null')
        }
    } else if (data.resultCode === ResponseResultCodesEnum.Error) {
        dispatch(actions.editIsFetchingA(false))
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}));
    }
};

export default profileReducer;

export type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
type ActionsTypes = InferActionsTypes<typeof actions>