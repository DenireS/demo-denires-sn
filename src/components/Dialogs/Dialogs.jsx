import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import userPhoto from '../../assets/images/User.jpg'

let Dialogs = (props) => {
    let dialogsElements = props.users.map((d) => (
        <DialogItem name={d.userName} key={d.id} id={d.id} img={d.photos.small || userPhoto } {...props}/>
    ));
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>{dialogsElements}</div>
        </div>
    );
}


export default Dialogs;
