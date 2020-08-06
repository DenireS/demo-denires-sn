import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {Logout} from '../../redux/auth-reducer';
import {AppStateType} from "../../redux/redux-store";

type MapPropsType = {
    isAuth: boolean
    login: string | null
}
type DispatchPropsType = {
    Logout: () => void
}

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {Logout})(HeaderContainer);
