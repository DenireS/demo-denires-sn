import {DialogsAPI} from "../api/api";

const SEND_MESSAGE = 'SEND_MESSAGE';
const SET_DIALOG_USER_DATA = 'SET_DIALOG_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_DIALOG_USER_MESSAGES = 'SET_DIALOG_USER_MESSAGES'
const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT'

let initialState = {
    currentChat: null,
    isFetching: false,
    users: [
        {id: null, photo: null, userName: null},
    ],
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
                users: [action.payload]
            }
        }
        case SET_DIALOG_USER_MESSAGES: {
            return {
                ...state,
                messages: action.items.reverse()
            }
        }

        default:
            return state;
    }
};


export const setDialogUserData = (id, photo, userName) => ({
    type: SET_DIALOG_USER_DATA,
    payload: {
        id,
        photo,
        userName,
    },
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

export const sendMessage = (id, body) =>
    async (dispatch) => {
        let response = await DialogsAPI.sendMessage(id, body)
        dispatch(requestMessages(id))
    }


export const startChatting = (id) =>
    async (dispatch) => {
        let response = await DialogsAPI.getChatting(id)
    }

export const requestMessages = (id) =>
    async (dispatch) => {
        let response = await DialogsAPI.getMessages(id)
        dispatch(setDialogUserMessages(response.data.items))
    }

export const requestDialogs = () =>
    async (dispatch) => {
        dispatch(dialogsIsFetching(true))
        let respone = await DialogsAPI.getDialogs();
        respone.data.map(m => {
            dispatch(setDialogUserData(m.id, m.photos.small, m.userName,))
        })
        dispatch(dialogsIsFetching(false))

    }


export default dialogsReducer;
