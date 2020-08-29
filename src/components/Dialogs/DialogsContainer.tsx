import React, {useEffect} from 'react';
import {
    actions,
    requestDialogs,
    requestMessages,
} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {Preloader} from "../common/Preloader/Preloader";
import {getCurrentChat, getIsFetching} from "../../redux/dialogs-selectors";


const DialogsContainer = React.memo((props: any) => {

    const isFetching = useSelector(getIsFetching);
    const currentChat = useSelector(getCurrentChat);
    const dispatch = useDispatch();

    const refreshDialogs = () => {
        if (!props.isAuth) return <Redirect to={'/login'}/>;
        let userId = props.match.params.userId;
        dispatch(requestDialogs())
        if (!userId) {
            if (currentChat) {
                props.history.push(`/dialogs/${currentChat}`);
            }
        } else {
            dispatch(requestMessages(userId));
            dispatch(actions.setCurrentChat(userId));
        }

    }

    useEffect(() => {
        refreshDialogs()
    }, [])

    useEffect(() => {
        refreshDialogs()
    }, [props.match.params.userId])

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <Dialogs {...props} />
        </>
    )

})


export default compose<React.ComponentType>(withAuthRedirect, withRouter)(DialogsContainer);
