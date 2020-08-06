import React from 'react';
import {
    actions,
    deleteMessage,
    requestDialogs,
    requestMessages, requestOldMessages, restoreMessage,
    sendMessage,
    startChatting
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.tsx';
import {compose} from 'redux';
import Preloader from "../common/Preloader/Preloader";
import DialogChat from "./DialogChat";

class DialogsContainer extends React.PureComponent {

    refreshDialogs() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>;
        let userId = this.props.match.params.userId;
        if (!userId) {
            this.props.history.push('/dialogs');
            this.props.requestDialogs();
        } else {
            this.props.requestMessages(userId)
            this.props.setCurrentChat(userId)
        }

    }

    componentDidMount() {
        this.refreshDialogs()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshDialogs();
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                {this.props.match.params.userId && !this.props.isFetching ? <DialogChat {...this.props} /> :
                    <Dialogs {...this.props} />}
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        isFetching: state.dialogsPage.isFetching,
        currentChat: state.dialogsPage.currentChat,
        profile: state.dialogsPage.profile,
        userId: state.auth.userId,
        lastDate: state.dialogsPage.lastDate,
        portionSize: state.dialogsPage.portionSize
    };
};

// setCurrentChat:actions.setCurrentChat,setlastDate:actions.setlastDate,

export default compose(
    connect(mapStateToProps, {
        sendMessage, requestDialogs, startChatting, setCurrentChat:actions.setCurrentChat,
        requestMessages, deleteMessage, restoreMessage, requestOldMessages, setlastDate:actions.setlastDate,
    }),
    withAuthRedirect,
    withRouter
)(DialogsContainer);
