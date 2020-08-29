import {DialogsAPI} from "../api/dialogs-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {FormAction} from "redux-form";
import {DialogsUserType, MessagesType} from "../types/types";
import {removeByAttr} from "../components/common/removeByAttr/removeByAttr";


let initialState = {
    lastDate: '2020-01-01',
    portionSize: 10,
    currentChat: null as number | null,
    isFetching: false,
    profile: null as number | null,
    users: [] as Array<DialogsUserType>,
    messages: [] as Array<MessagesType>,
    totalCount: null as number | null,
};

export const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'TOGGLE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'SET_CURRENT_CHAT': {
            return {
                ...state,
                currentChat: action.id
            }
        }
        case 'SET_DIALOG_USER_DATA': {
            return {
                ...state,
                users: action.dialogs,
            }
        }
        case 'SET_DIALOG_USER_MESSAGES': {
            return {
                ...state,
                messages: action.items.reverse()
            }
        }
        case "SET_MESSAGES_TOTAL_COUNT": {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case 'SET_OLD_DIALOG_USER_MESSAGES': {

            return {
                ...state,
                messages: state.messages.concat(action.items).filter(function (el: any) {
                    return state.messages.indexOf(el) === -1;
                }).reverse()
            }
        }
        case 'SET_LAST_DATE': {
            return {
                ...state,
                lastDate: action.date,
            };
        }
        case "DELETE_MESSAGE": {
            return {
                ...state,
                messages: removeByAttr(state.messages, 'id', action.messageId)
            }
        }

        default:
            return state;
    }
};

export const actions = {
    setDialogUserData: (dialogs: any) => ({
        type: 'SET_DIALOG_USER_DATA',
        dialogs
    } as const),
    setlastDate: (date: string) => ({
        type: 'SET_LAST_DATE',
        date
    } as const),
    setDialogUserMessages: (items: any) => ({
        type: 'SET_DIALOG_USER_MESSAGES',
        items
    } as const),
    setMessagesTotalCount: (totalCount: any) => ({
        type: 'SET_MESSAGES_TOTAL_COUNT',
        totalCount
    } as const),
    setOldDialogUserMessages: (items: any) => ({
        type: 'SET_OLD_DIALOG_USER_MESSAGES',
        items
    } as const),
    dialogsIsFetching: (isFetching: boolean) => ({
        type: 'TOGGLE_IS_FETCHING',
        isFetching,
    } as const),
    setCurrentChat: (id: number) => ({
        type: 'SET_CURRENT_CHAT',
        id,
    } as const),
    deleteMessage: (messageId: string) => ({
        type: 'DELETE_MESSAGE',
        messageId,
    } as const),

}


export const sendMessage = (id: number, body: any): ThunkType =>
    async (dispatch) => {
        let response = await DialogsAPI.sendMessage(id, body)
        dispatch(requestMessages(id))
    }

export const sendUserMessage = (id: number, body: any): ThunkType =>
    async (dispatch) => {
        let response = await DialogsAPI.sendMessage(id, body)
    }

export const startChatting = (id: number): ThunkType =>
    async (dispatch) => {
        let response = await DialogsAPI.getChatting(id)
    }

export const requestMessages = (id: number): ThunkType =>
    async (dispatch) => {
        dispatch(actions.setDialogUserMessages([]))
        let response = await DialogsAPI.getMessages(id)
        dispatch(actions.setDialogUserMessages(response.data.items))
        dispatch(actions.setMessagesTotalCount(response.data.totalCount))
    }

export const requestOldMessages = (id: number, date: string): ThunkType =>
    async (dispatch) => {
        let response = await DialogsAPI.getOldMessages(id, date)
        dispatch(actions.setOldDialogUserMessages(response.data))
    }

export const requestDialogs = (): ThunkType =>
    async (dispatch) => {
        dispatch(actions.dialogsIsFetching(true))
        let respone = await DialogsAPI.getDialogs();
        dispatch(actions.setDialogUserData(respone.data))
        dispatch(actions.dialogsIsFetching(false))

    }

export const deleteMessage = (messageId: string): ThunkType =>
    async (dispatch) => {
        dispatch(actions.deleteMessage(messageId))
        let respone = await DialogsAPI.deleteMessage(messageId);
    }

export const restoreMessage = (messageId: string): ThunkType =>
    async (dispatch) => {
        let respone = await DialogsAPI.restoreMessage(messageId);
    }


export default dialogsReducer;

export type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
type ActionsTypes = InferActionsTypes<typeof actions>