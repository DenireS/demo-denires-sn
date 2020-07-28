import {UsersAPI} from '../api/api';
import {updateObjectinArray} from "../utils/object-helpers";
import {PhotosType, UsersType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    portionSize: 10,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, //array of users id
};

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectinArray(state.users, action.userId, 'id', {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectinArray(state.users, action.userId, 'id', {followed: false})
            };
        case SET_USERS: {
            return {...state, users: action.users};
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalItemsCount: action.totalItemsCount};
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching};
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id != action.userId),
            };
        }
        default:
            return state;
    }
};

type ActionsTypes = UnFollowSuccesActionType | FollowSuccesActionType | SetUsersActionType |
    SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType |
    ToggleFollowingProgressActionType


type FollowSuccesActionType = {
    type: typeof FOLLOW,
    userId: number,
}

export const followSucces = (userId: number): FollowSuccesActionType => ({
    type: FOLLOW,
    userId,
});

type UnFollowSuccesActionType = {
    type: typeof UNFOLLOW,
    userId: number,
}

export const unfollowSucces = (userId: number): UnFollowSuccesActionType => ({
    type: UNFOLLOW,
    userId,
});

type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UsersType>,
}

export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({
    type: SET_USERS,
    users,
});

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number,
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalItemsCount: number,
}

export const setTotalUsersCount = (totalItemsCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalItemsCount,
});

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean,
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});

type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (page: number, pageSize: number): ThunkType =>
    async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        let response = await UsersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUsersCount(response.data.totalCount));
    };

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any,
                                   actionCreator: (userId: number) => FollowSuccesActionType | UnFollowSuccesActionType) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod;
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}


export const follow = (userId: number): ThunkType => {
    return async (dispatch: any) => {
        _followUnfollowFlow(dispatch, userId, UsersAPI.follow(userId), followSucces)
    };
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch: any) => {
        _followUnfollowFlow(dispatch, userId, UsersAPI.unfollow(userId), unfollowSucces);
    }
};

export default usersReducer;
