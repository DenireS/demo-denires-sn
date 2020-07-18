import React, {useState} from 'react';
import s from '../DialogChat.module.css';
import {formattedDate, formattedTime} from "../../common/DateControls/DateControls";
import classNames from 'classnames'


function Message(props) {
    let [restore, setRestore] = useState(false)
    let [messageId, setMessageId] = useState(null)
    let [deleted, setDeleted] = useState('messageBody')
    let [fullMessage, setFullMessage] = useState('message')

    let deleteMessage = (id) => {
        setMessageId(id)
        setRestore(true)
        setDeleted('deleted')
    }
    let restoreMessage = (id) => {
        props.restoreMessage(props.id)
        setRestore(false)
        setDeleted('messageBody')
    }
    let confirmDeleting = (id) => {
        props.deleteMessage(props.id, props.recipientId)
        setRestore(false)
        setFullMessage('messageDeleted')
    }


    // let date = formattedDate(props.date)
    let time = formattedTime(props.date)
    return (<>

            <div className={s[fullMessage]}>
                {props.senderId == props.authUserId
                    ? <div className={s.messageSend}>
                        <span className={classNames(s[deleted], s.send)}>
                            <span>{props.message}</span>
                            <span className={s.messageTime}>{time}</span>

                            <div className={s.btn}>
                                {!restore && <span onClick={() => deleteMessage(props.id)}>🗑</span>}
                            </div>
                        </span>
                        {restore && <div className={s.confirmDeleting}>
                            <div>Are you ready</div>
                            <button className={s.restore} onClick={() => restoreMessage(messageId)}>Restore</button>
                            <button className={s.restore} onClick={() => confirmDeleting(messageId)}>Delete</button>
                        </div>}
                    </div>
                    : <div className={s.messageReceived}>
                        <span className={classNames(s[deleted], s.received)}>
                            <span>{props.message}</span>
                            <span className={s.messageTime}>{time}</span>

                            <div className={s.btn}>
                                {!restore && <span onClick={() => deleteMessage(props.id)}>🗑</span>}
                            </div>
                            </span>
                        {restore && <div className={s.confirmDeleting}>
                            <div>Are you ready</div>
                            <button className={s.restore} onClick={() => restoreMessage(messageId)}>Restore</button>
                            <button className={s.restore} onClick={() => confirmDeleting(messageId)}>Delete</button>
                        </div>}

                    </div>}


            </div>
            {/*<div className={s.messageDate}>{date}</div>*/}

        </>
    );
}

export default Message;
