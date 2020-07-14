import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';

let Dialogs = (props) => {

    let dialogsElements = props.users.map((d) => (
        <DialogItem name={d.userName} key={d.id} id={d.id} img={d.photo} {...props}/>
    ));
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>{dialogsElements}</div>
        </div>
    );
}


export default Dialogs;
