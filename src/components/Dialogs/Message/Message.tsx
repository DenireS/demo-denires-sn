import React, {useState} from 'react';
import s from '../DialogChat.module.css';
import {formattedDate, formattedTime} from "../../common/DateControls/DateControls";
import classNames from 'classnames'

type PropsType = {
    senderId:number
    authUserId: number | null
    message: string
    senderName: string
    id: number
    date: string | number
    viewed: boolean
    recipientId: number

    restoreChatMessage: (id:number)=> void
    deleteChatMessage: (id:number)=> void
}

export const Message:React.FC<PropsType>=(props) =>{
    let [restore, setRestore] = useState(false)
    let [messageId, setMessageId] = useState(null)
    let [deleted, setDeleted] = useState('messageBody')
    let [fullMessage, setFullMessage] = useState('message')

    let deleteMessage = (id:any) => {
        setMessageId(id)
        setRestore(true)
        setDeleted('deleted')
    }
    let restoreMessage = () => {
        props.restoreChatMessage(props.id)
        setRestore(false)
        setDeleted('messageBody')
    }
    let confirmDeleting = () => {
        props.deleteChatMessage(props.id)
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
                            <button className={s.restore} onClick={() => restoreMessage()}>Restore</button>
                            <button className={s.restore} onClick={() => confirmDeleting()}>Delete</button>
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
                            <button className={s.restore} onClick={() => restoreMessage()}>Restore</button>
                            <button className={s.restore} onClick={() => confirmDeleting()}>Delete</button>
                        </div>}

                    </div>}


            </div>
            {/*<div className={s.messageDate}>{date}</div>*/}

        </>
    );
}

