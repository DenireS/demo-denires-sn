import React, {useState} from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/User.jpg';
import {NavLink} from 'react-router-dom';
import {FormType} from "../../hoc/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";


let User = ({user, followingInProgress, unfollow, follow, setFormControl, setReceiverId, setReceiver, setPhoto}) => {

    let openForm = (id, photo,name) => {
        setFormControl(true)
        setReceiver(name)
        setReceiverId(id)
        setPhoto(photo)
    }

    return (
        <div>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img
                    src={user.photos.small != null ? user.photos.small : userPhoto}
                    className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                  <button
                      disabled={followingInProgress.some((id) => id === user.id)}
                      onClick={() => {
                          unfollow(user.id);
                      }}
                  >
                      Unfollow
                  </button>
              ) : (
                  <button
                      disabled={followingInProgress.some((id) => id === user.id)}
                      onClick={() => {
                          follow(user.id);
                      }}
                  >
                      Follow
                  </button>
              )}
            </div>
          </span>
            <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <span onClick={() => openForm(user.id, user.photos.small, user.name)}>{'Write your message'}</span>
            </span>
          </span>

        </div>
    )
}


export default User;
