import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    requestUsers,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getPageSize,
    getUsers,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress, getPortionSize, getTotalItemsCount,
} from '../../redux/users-selectors';
import {sendUserMessage} from "../../redux/dialogs-reducer";
import {UsersType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalItemsCount: number,
    followingInProgress: Array<number>
    users: Array<UsersType>,
    portionSize: number
}
type MapDispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number) => void,
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    sendUserMessage: (id: number, body: any) => void
}
type OwnPropsType = {
    pageTitle: string,
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        let {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    };

    render() {
        return (
            <>
                <div>{this.props.pageTitle}</div>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalItemsCount={this.props.totalItemsCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                    portionSize={this.props.portionSize}
                    sendUserMessage={this.props.sendUserMessage}
                />
            </>
        );
    }
}

let mapStateTopProps = (state: AppStateType): MapStatePropsType => {
    return {
        portionSize: getPortionSize(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default compose(
    //TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateTopProps, {
        follow,
        unfollow,
        requestUsers,
        sendUserMessage,
    })
)(UsersContainer);

