import {ProfileAPI} from "../api/profile-api";
import {DialogsAPI} from "../api/dialogs-api";

const SEND_MESSAGE = 'SEND_MESSAGE';
const SET_DIALOG_USER_DATA = 'SET_DIALOG_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_DIALOG_USER_MESSAGES = 'SET_DIALOG_USER_MESSAGES'
const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT'
const SET_CURRENT_CHAT_INFO = 'SET_CURRENT_CHAT_INFO'
const SET_OLD_DIALOG_USER_MESSAGES = 'SET_OLD_DIALOG_USER_MESSAGES'
const SET_LAST_DATE = 'SET_LAST_DATE'

let initialState = {
    lastDate: '2018-06-19',
    portionSize: 10,
    currentChat: null as number | null,
    isFetching: false,
    profile: null as number | null,
    users: [],
    messages: [] as any,
};

type InitialStateType = typeof initialState

export const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_CURRENT_CHAT: {
            return {
                ...state,
                currentChat: action.id
            }
        }
        case SET_DIALOG_USER_DATA: {
            return {
                ...state,
                users: action.dialogs
            }
        }
        case SET_DIALOG_USER_MESSAGES: {
            return {
                ...state,
                messages: action.items.reverse()
            }
        }
        case SET_OLD_DIALOG_USER_MESSAGES: {
            return {
                ...state,
                messages: state.messages.concat(action.items).filter(function (el: number) {
                    return state.messages.indexOf(el) === -1;
                }).reverse()
            }
        }
        case SET_CURRENT_CHAT_INFO: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case SET_LAST_DATE: {
            return {
                ...state,
                lastDate: action.date,
            };
        }

        default:
            return state;
    }
};


export const setDialogUserData = (dialogs: any) => ({
    type: SET_DIALOG_USER_DATA,
    dialogs
});

type setDialogUserData = {
    type: typeof SET_LAST_DATE,
    date: string
}

export const setlastDate = (date: string): setDialogUserData => ({
    type: SET_LAST_DATE,
    date
});
export const setDialogUserMessages = (items: any) => ({
    type: SET_DIALOG_USER_MESSAGES,
    items
});
export const setOldDialogUserMessages = (items: any) => ({
    type: SET_OLD_DIALOG_USER_MESSAGES,
    items
});

export const dialogsIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});
export const setCurrentChat = (id: number) => ({
    type: SET_CURRENT_CHAT,
    id,
});

export const setCurrentChatInfo = (profile: any) => ({
    type: SET_CURRENT_CHAT_INFO,
    profile,
});

export const sendMessage = (id: number, body: any) =>
    async (dispatch: any) => {
        let response = await DialogsAPI.sendMessage(id, body)
        dispatch(requestMessages(id))
    }

export const sendUserMessage = (id: number, body: any) =>
    async (dispatch: any) => {
        let response = await DialogsAPI.sendMessage(id, body)
    }


export const startChatting = (id: number) =>
    async (dispatch: any) => {
        let response = await DialogsAPI.getChatting(id)
    }

export const requestMessages = (id: number) =>
    async (dispatch: any) => {

        let response = await DialogsAPI.getMessages(id)
        dispatch(setDialogUserMessages(response.data.items))
        let data2 = await ProfileAPI.getProfile(id)
        dispatch(setCurrentChatInfo(data2))
    }
export const requestOldMessages = (id: number, date: string) =>
    async (dispatch: any) => {
        let response = await DialogsAPI.getOldMessages(id, date)
        dispatch(setOldDialogUserMessages(response.data))
    }

export const requestDialogs = () =>
    async (dispatch: any) => {
        dispatch(dialogsIsFetching(true))
        let respone = await DialogsAPI.getDialogs();
        dispatch(setDialogUserData(respone.data))
        dispatch(dialogsIsFetching(false))
    }

export const deleteMessage = (messageId: number) =>
    async (dispatch: any) => {
        let respone = await DialogsAPI.deleteMessage(messageId);

    }
export const restoreMessage = (messageId: number) =>
    async (dispatch: any) => {
        let respone = await DialogsAPI.restoreMessage(messageId);
    }


export default dialogsReducer;
