import React from 'react';
import s from '../DialogChat.module.css';

function Message(props) {
  return <div className={s.message}>{props.message}</div>;
}

export default Message;
