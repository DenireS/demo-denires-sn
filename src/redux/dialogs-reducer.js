import {DialogsAPI, ProfileAPI} from "../api/api";

const SEND_MESSAGE = 'SEND_MESSAGE';
const SET_DIALOG_USER_DATA = 'SET_DIALOG_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_DIALOG_USER_MESSAGES = 'SET_DIALOG_USER_MESSAGES'
const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT'
const SET_CURRENT_CHAT_INFO = 'SET_CURRENT_CHAT_INFO'


let initialState = {
    currentChat: null,
    isFetching: false,
    profile: null,
    users: [],
    messages: [],
};

export const dialogsReducer = (state = initialState, action) => {
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
        case SET_CURRENT_CHAT_INFO: {
            return {
                ...state,
                profile: action.profile,
            };
        }

        default:
            return state;
    }
};


export const setDialogUserData = (dialogs) => ({
    type: SET_DIALOG_USER_DATA,
    dialogs
});
export const setDialogUserMessages = (items) => ({
    type: SET_DIALOG_USER_MESSAGES,
    items
});

export const dialogsIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});
export const setCurrentChat = (id) => ({
    type: SET_CURRENT_CHAT,
    id,
});

export const setCurrentChatInfo = (profile) => ({
    type: SET_CURRENT_CHAT_INFO,
    profile,
});

export const sendMessage = (id, body) =>
    async (dispatch) => {
        let response = await DialogsAPI.sendMessage(id, body)
        dispatch(requestMessages(id))
    }
export const sendUserMessage = (id, body) =>
    async (dispatch) => {
        let response = await DialogsAPI.sendMessage(id, body)
    }


export const startChatting = (id) =>
    async (dispatch) => {
        let response = await DialogsAPI.getChatting(id)
    }

export const requestMessages = (id) =>
    async (dispatch) => {

        let response = await DialogsAPI.getMessages(id)
        dispatch(setDialogUserMessages(response.data.items))
        let response2 = await ProfileAPI.getProfile(id)
        dispatch(setCurrentChatInfo(response2.data))
    }
export const requestOldMessages = (id, date) =>
    async (dispatch) => {
        let response = await DialogsAPI.getOldMessages(id, date)
    }

export const requestDialogs = () =>
    async (dispatch) => {
        dispatch(dialogsIsFetching(true))
        let respone = await DialogsAPI.getDialogs();
        dispatch(setDialogUserData(respone.data))
        dispatch(dialogsIsFetching(false))
    }

export const deleteMessage = (messageId, recipientId) =>
    async (dispatch) => {
        let respone = await DialogsAPI.deleteMessage(messageId);

    }
export const restoreMessage = (messageId) =>
    async (dispatch) => {
        let respone = await DialogsAPI.restoreMessage(messageId);
    }


export default dialogsReducer;
