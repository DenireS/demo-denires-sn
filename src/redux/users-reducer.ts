import {updateObjectinArray} from "../utils/object-helpers";
import {UsersType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {UsersAPI} from "../api/users-api";
import {ResponseResultCodesEnum} from "../api/api";

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    portionSize: 10,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, //array of users id
};


const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: updateObjectinArray(state.users, action.userId, 'id', {followed: true})
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjectinArray(state.users, action.userId, 'id', {followed: false})
            };
        case "SET_USERS": {
            return {...state, users: action.users};
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage};
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalItemsCount: action.totalItemsCount};
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching};
        }
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
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

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export const actions = {
    followSucces: (userId: number) => ({
        type: 'FOLLOW',
        userId,
    } as const),

    unfollowSucces: (userId: number) => ({
        type: 'UNFOLLOW',
        userId,
    } as const),

    setUsers: (users: Array<UsersType>) => ({
        type: 'SET_USERS',
        users,
    } as const),

    setCurrentPage: (currentPage: number) => ({
        type: 'SET_CURRENT_PAGE',
        currentPage,
    } as const),

    setTotalUsersCount: (totalItemsCount: number) => ({
        type: 'SET_TOTAL_USERS_COUNT',
        totalItemsCount,
    } as const),

    toggleIsFetching: (isFetching: boolean) => ({
        type: 'TOGGLE_IS_FETCHING',
        isFetching,
    } as const),

    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId,
    } as const),
}

export const requestUsers = (page: number, pageSize: number): ThunkType =>
    async (dispatch: any) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
        let data = await UsersAPI.getUsers(page, pageSize)
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    };

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any,
                                   actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let data = await apiMethod;
    if (data.resultCode === ResponseResultCodesEnum.Success) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}


export const follow = (userId: number): ThunkType => {
    return async (dispatch: any) => {
        _followUnfollowFlow(dispatch, userId, UsersAPI.follow(userId), actions.followSucces)
    };
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch: any) => {
        _followUnfollowFlow(dispatch, userId, UsersAPI.unfollow(userId), actions.unfollowSucces);
    }
};

export default usersReducer;
