import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {ProfileAPI} from "../api/profile-api";
import {ResponseResultCodesEnum} from "../api/api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {updateObjectinArray} from "../utils/object-helpers";


let initialState = {
    posts: [
        {
            id: 1,
            senderId: 1000,
            body: 'There is no post API, so all posts are local and hard-coded',
            addedAt: '00-00-0000',
            likesCount: 1,
            views: 1,
        },
    ] as Array<PostType>,
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
        case "ADD_POST": {
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        }
        case "ADD_LIKE": {
            return {
                ...state,
                posts: updateObjectinArray(state.posts, action.postId, 'id', {likesCount: action.likesCount})
            }
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

    isFetching: (isFetching: boolean) => ({
        type: 'TOGGLE_IS_FETCHING',
        isFetching,
    } as const),
    addPost: (post: any) => ({
        type: 'ADD_POST',
        post,
    } as const),
    addLike: (postId: number, likesCount: number) => ({
        type: 'ADD_LIKE',
        postId,
        likesCount,
    } as const),
}

export const setProfileEditStatus = (status: boolean): ThunkType => async (dispatch) => {
    dispatch(actions.setProfileEditStatusA(status));
}
export const toggleIsFetching = (isFetching: boolean): ThunkType => async (dispatch) => {
    dispatch(actions.isFetching(isFetching));
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.isFetching(true));
    let data = await ProfileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data));
    dispatch(actions.isFetching(false));
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
        dispatch(actions.isFetching(false))
        if (userId != null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error('userId can`t be null')
        }
    } else if (data.resultCode === ResponseResultCodesEnum.Error) {
        dispatch(actions.isFetching(false))
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}));
    }
};

export default profileReducer;

export type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
type ActionsTypes = InferActionsTypes<typeof actions>