import React, {useEffect, useState} from 'react';
import s from '../DialogChat.module.css';
import {formattedDate, formattedTime} from "../../../common/DateControls/DateControls";
import classNames from 'classnames'
import userPhoto from '../../../../assets/images/User.jpg';
import {DialogsUserType, UsersType} from "../../../../types/types";


type PropsType = {
    senderId: number
    authUserId: number | null
    message: string
    senderName: string
    id: string
    date: string
    viewed: boolean
    recipientId: number
    authUserInfo: any
    deleteMessage: (id: string) => void

}

export const Message: React.FC<PropsType> = React.memo((props) => {

    const [fullMessage, setFullMessage] = useState('message')
    const [messageStateClass, setMessageStateClass] = useState(true)


    const hideDeleteMessage = (messageId: string) => {
        setFullMessage('messageDeleted')
        props.deleteMessage(messageId)
    }

    const selectMessage = (id: number) => {
        setMessageStateClass(!messageStateClass)
        if (messageStateClass) {
            setFullMessage('messageSelected')
        } else {
            setFullMessage('')
        }
    }

    let time = formattedTime(props.date)


    return (<>

            <div className={classNames(s.message, s[fullMessage])}>

                {props.id == undefined ? <span className={s.splitDate}>{props.message}</span>
                    :
                    props.senderId == props.authUserId
                        ? <div className={s.messageSend}>

                            <div className={classNames(s.messageBody, s.send)}>

                                <div className={s.messageContainer}>
                                    <div className={s.text}>{props.message}</div>
                                    <div className={s.utils}>
                                        <span className={classNames(s.messageTime, s.send)}>{time}</span>

                                        {props.viewed == false ?
                                            <span className={s.check}/>
                                            : <span className={classNames(s.check, s.viewed)}/>
                                        }

                                    </div>
                                </div>


                            </div>
                            {fullMessage == 'messageSelected' ? <div>
                                    <button className={s.deleteBtn}
                                            onClick={() => hideDeleteMessage(props.id)}>Delete
                                    </button>
                                </div>
                                : null}
                            {/*@ts-ignore*/}
                            <div onClick={() => selectMessage(props.id)} className={s.setMessageBtn}>
                                <div className={s.setMessageBtnInner}>
                                </div>
                            </div>
                        </div>
                        : <div className={s.messageReceived}>
                            <span className={classNames(s.messageBody, s.received)}>

                                <div className={s.messageContainer}>
                                    <div className={s.text}>{props.message}</div>
                                    <div className={s.utils}>
                                        <span className={classNames(s.messageTime, s.received)}>{time}</span>
                                    </div>
                                </div>

                            </span>

                            {fullMessage == 'messageSelected' ? <div>
                                    <button className={classNames(s.deleteBtn, s.btnReceived)}
                                            onClick={() => hideDeleteMessage(props.id)}>Delete
                                    </button>
                                </div>
                                : null}
                            {/*@ts-ignore*/}
                            <div onClick={() => selectMessage(props.id)}
                                 className={classNames(s.setMessageBtn, s.setMessageBtnReceived)}>
                                <div className={s.setMessageBtnInner}>
                                </div>
                            </div>

                        </div>
                }


            </div>

        </>
    );
})

