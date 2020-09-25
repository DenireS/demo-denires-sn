import React, {useEffect} from 'react';
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Users} from './components/Users/Users';
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {LoginPage} from "./components/Login/Login";
import {HeaderPage} from "./components/Header/Header";
import {Provider, useDispatch, useSelector} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';
import store from "./redux/redux-store";
import {getInitialized} from "./redux/app-selectors";
import { NotFoundPage } from './components/common/NotFoundPage/NotFoundPage';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


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
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users/" render={() => <Users/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                    <Route path="*" render={() => <NotFoundPage/>}/>
                </Switch>
            </div>
        </div>
    )
}

export const MainSNApp: React.FC = () => {
    return <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
}
