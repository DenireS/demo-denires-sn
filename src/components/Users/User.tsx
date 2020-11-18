import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/User.jpg';
import {NavLink} from 'react-router-dom';
import {UsersType} from "../../types/types";

type PropsType = {
    user: UsersType
    followingInProgress: Array<number>
    isAuth: boolean

    unfollow: (userId: number) => void
    follow: (userId: number) => void
    setFormControl: (visibility: boolean) => void
    setReceiverId: (id: number) => void
    setReceiver: (name: string | null) => void
    setPhoto: (src: string | null) => void
}

let User: React.FC<PropsType> = React.memo(({
                                                user, followingInProgress, unfollow, follow,
                                                setFormControl, setReceiverId, setReceiver, setPhoto,
                                                isAuth
                                            }) => {

    let openForm = (id: number, photo: string | null, name: string) => {
        setFormControl(true)
        setReceiver(name)
        setReceiverId(id)
        setPhoto(photo)
    }


    return (
        <div className={s.user}>

            <div className={s.userItem}>

                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt={''}
                            src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={s.userPhoto}
                        />
                    </NavLink>
                </div>

                <div className={s.userInfo}>
                    <div>
                        <div className={s.userName}>{user.name}</div>
                        <div className={s.userStatus}>{user.status}</div>
                    </div>

                    {isAuth ? <div>
                        <div className={s.openForm}
                             onClick={() => openForm(user.id, user.photos.small, user.name)}>{'Write your message'}
                        </div>
                    </div> : null}

                    {isAuth ? <div>
                            {user.followed ? (
                                <button className={s.button}
                                        disabled={followingInProgress.some((id) => id === user.id)}
                                        onClick={() => {
                                            unfollow(user.id);
                                        }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button className={s.button}
                                        disabled={followingInProgress.some((id) => id === user.id)}
                                        onClick={() => {
                                            follow(user.id);
                                        }}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                        : null}


                </div>

            </div>

        </div>
    )
})


export default User;
