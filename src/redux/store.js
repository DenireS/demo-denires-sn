import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 11 },
        { id: 2, message: 'It`s my first post', likesCount: 23 },
      ],
      newPostText: 'Is working, bloody good',
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: 'Sasha',
          img:
            'https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg',
        },
        {
          id: 2,
          name: 'Sanyok',
          img:
            'https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg',
        },
        {
          id: 3,
          name: 'Aleksandr',
          img:
            'https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg',
        },
        {
          id: 4,
          name: 'Shurik',
          img:
            'https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg',
        },
        {
          id: 5,
          name: 'Shura',
          img:
            'https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg',
        },
        {
          id: 6,
          name: 'Sancho',
          img:
            'https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg',
        },
        {
          id: 7,
          name: 'Sashunya',
          img:
            'https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg',
        },
      ],
      messages: [
        { id: 1, message: 'Yo' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Hi' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 5, message: 'Yell' },
        { id: 5, message: 'Yell' },
        { id: 5, message: 'Yell' },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State have changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};



export default store;
window.store = store;
