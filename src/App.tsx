import React, {useEffect} from 'react';
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {UsersPage} from './components/Users/UsersContainer';
import {ProfileWrappedContainer} from './components/Profile/Profile';
import {LoginPage} from "./components/Login/Login";
import {HeaderPage} from "./components/Header/Header";
import {Provider, useDispatch, useSelector} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import {getInitialized} from "./redux/app-selectors";

import DialogsContainer from './components/Dialogs/DialogsContainer';
// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer);


const App = () => {

    const initialized = useSelector(getInitialized)
    const dispatch = useDispatch()

    const catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
        alert('Some errors')
        console.log(promiseRejectionEvent)
    }

    useEffect(() => {
        dispatch(initializeApp())
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors)

        return () => {
            window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
        }
    }, [])


    if (!initialized) {
        return <Preloader/>;
    }
    return (
        <div className="app-wrapper">
            <HeaderPage/>
            <Navbar/>
            <div className="app-wrapper__content">
                <Switch>
                    <Redirect exact from="/" to="/profile"/>
                    <Route path="/dialogs/:userId?" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileWrappedContainer/>}/>
                    <Route path="/users/" render={() => <UsersPage/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                    <Route path="*" render={() => <div>404</div>}/>
                </Switch>
            </div>
        </div>
    )
}


const AppContainer = (withRouter)(App);

export const MainSNApp: React.FC = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
