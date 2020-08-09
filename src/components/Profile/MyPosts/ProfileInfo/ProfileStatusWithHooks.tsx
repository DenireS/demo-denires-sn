import React, {useState, useEffect, ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {updateStatus} from '../../../../redux/profile-reducer';
import {Preloader} from '../../../common/Preloader/Preloader';
import {useDispatch, useSelector} from "react-redux";
import {getStatus} from "../../../../redux/profile-selectors";

const ProfileStatusWithHooks: React.FC = () => {

    const statusSelector = useSelector(getStatus)
    const dispatch = useDispatch()

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(statusSelector);

    useEffect(() => {
        setStatus(status);
    }, [status]);

    let activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        dispatch(updateStatus(status))
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode && (
                <div>
                    <b>Status</b>: <span onDoubleClick={activateEditMode}>
            {status || '-----'}
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
