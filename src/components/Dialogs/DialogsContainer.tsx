import React, {useEffect} from 'react';
import {actions, requestDialogs, requestMessages,} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, useHistory, useParams} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {Preloader} from "../common/Preloader/Preloader";
import {getCurrentChat, getIsFetching} from "../../redux/dialogs-selectors";

type PropsType = {
    isAuth: boolean
}
type ParamsType = {
    userId: string | undefined
}

const DialogsContainer: React.FC<PropsType> = React.memo((props) => {

    const isFetching = useSelector(getIsFetching);
    const currentChat = useSelector(getCurrentChat);
    const dispatch = useDispatch();
    const history = useHistory()
    const params = useParams<ParamsType>()

    const refreshDialogs = () => {
        if (!props.isAuth) return <Redirect to={'/login'}/>;
        let userId = params.userId;
        dispatch(requestDialogs())
        if (!userId) {
            if (currentChat) {
                history.push(`/dialogs/${currentChat}`);
            }
        } else {
            dispatch(requestMessages(+userId));
            dispatch(actions.setCurrentChat(+userId));
        }

    }

    useEffect(() => {
        refreshDialogs()
    }, [])

    useEffect(() => {
        refreshDialogs()
    }, [params.userId])

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <Dialogs {...props} />
        </>
    )

})


export default compose<React.ComponentType>(withAuthRedirect)(DialogsContainer);
