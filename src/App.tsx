import React from 'react';
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {UsersPage} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import {LoginPage} from "./components/Login/Login";
import {HeaderPage} from "./components/Header/Header";
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";


//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {

    catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
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
                <HeaderPage/>
                <Navbar/>
                <div className="app-wrapper__content">
                    <Switch>
                        <Redirect exact from="/" to="/profile"/>
                        <Route path="/dialogs/:userId?" render={withSuspense(DialogsContainer)}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/users/:page?" render={() => <UsersPage pageTitle={'samurai'}/>}/>
                        <Route path="/login" render={() => <LoginPage/>}/>
                        <Route path="*" render={() => <div>404</div>}/>
                    </Switch>
                </div>
            </div>
        )
            ;
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
});

let AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp,}), withRouter)(App);

const MainSNApp: React.FC = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default MainSNApp