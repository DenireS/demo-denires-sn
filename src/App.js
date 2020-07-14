import React from 'react';
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';

import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('Some errors')
        console.log(promiseRejectionEvent)
    }


    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper__content">
                    <Switch>
                        <Redirect exact from="/" to="/profile"/>
                        <Route path="/dialogs/:userId?" render={withSuspense(DialogsContainer)}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="*" render={() => <div>404</div>}/>
                    </Switch>
                </div>
            </div>
        )
            ;
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

let AppContainer = compose(
    connect(mapStateToProps, {initializeApp,}), withRouter)(App);

const MainSNApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default MainSNApp