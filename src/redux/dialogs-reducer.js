const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});


export default dialogsReducer;
