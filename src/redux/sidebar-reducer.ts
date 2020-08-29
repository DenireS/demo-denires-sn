import {ProfileType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {FormAction} from "redux-form";

let initialState = {
    sideBarStatus: false
};

export const sidebarReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET_SIDEBAR_STATUS": {
            return {
                ...state,
                sideBarStatus: action.status
            }
        }
    }
    return state;
};

export const actions = {
    setSideBarStatus: (status: boolean) => ({
        type: 'SET_SIDEBAR_STATUS',
        status,
    } as const),
}


export default sidebarReducer;

export type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
type ActionsTypes = InferActionsTypes<typeof actions>