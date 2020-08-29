import React, {useState, useEffect, ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {updateStatus} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {useDispatch, useSelector} from "react-redux";
import {getStatus} from "../../../redux/profile-selectors";

type PropsType = {
    status: string
}

const ProfileStatusWithHooks: React.FC<PropsType> = React.memo(({status}) => {

    const statusSelector = useSelector(getStatus)
    const dispatch = useDispatch()

    let [editMode, setEditMode] = useState(false);
    let [localStatus, setLocalStatus] = useState(statusSelector);

    useEffect(() => {
        setLocalStatus(status);
    }, [status]);

    let activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        dispatch(updateStatus(localStatus))
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value);
    };

    return (
        <div className={s.status}>
            {!editMode && (
                <span onDoubleClick={activateEditMode}>
            {localStatus || '-----'}
          </span>

            )}
            {editMode && (
                <div>
                    <input
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        value={localStatus}
                    ></input>
                </div>
            )}
        </div>
    );
})

export default ProfileStatusWithHooks;
