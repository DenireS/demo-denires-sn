import React, {useState, useEffect, ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import profileReducer from '../../../../redux/profile-reducer';
import Preloader from '../../../common/Preloader/Preloader';


type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode && (
                <div>
                    <b>Status</b>: <span onDoubleClick={activateEditMode}>
            {props.status || '-----'}
          </span>
                </div>
            )}
            {editMode && (
                <div>
                    <input
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        value={status}
                    ></input>
                </div>
            )}
        </div>
    );
};

export default ProfileStatusWithHooks;
