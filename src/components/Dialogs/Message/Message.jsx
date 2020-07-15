import React from 'react';
import s from '../DialogChat.module.css';
import {formattedDate, formattedTime} from "../../common/DateControls/DateControls";


function Message(props) {

    // let date = formattedDate(props.date)
    let time = formattedTime(props.date)

    return (<>

            <div className={s.message}>

                <div className={s.messageTitle}>
                    <div className={s.senderName}>{props.senderName}</div>
                    <div className={s.messageTime}>{time}</div>
                </div>

                <div className={s.messageBody}>{props.message}</div>
            </div>
            {/*<div className={s.messageDate}>{date}</div>*/}

        </>
    );
}

export default Message;
