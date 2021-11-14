import React from 'react';
import s from './App.module.css';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {UsersContainer} from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {InitializeApp} from "./redux/app-reducer";
import {RootReducerType} from "./redux/redux-store";
import {Preloader} from "./Components/common/Preloader/Preloader";


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.InitializeApp()
    }

    render() {
        return (
            !this.props.initialized
                ? <Preloader/>
                :<div className={s.colorWrapper}>
                    <Switch>
                        <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>
                        <div className={s.Wrapper}>
                            <div className={s.Header}>
                                <HeaderContainer/>
                            </div>
                            <div className={s.Navbar}>
                                <Navbar/>
                            </div>
                            <div className={s.AppContent}>
                                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                                <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
                                <Route path='/news' component={News}/>
                                <Route path='/music' component={Music}/>
                                <Route path='/users' render={() => <UsersContainer/>}/>
                                <Route path='/settings' component={Settings}/>
                                <Route path='/login' render={() => <Login/>}/>
                            </div>
                            <div className={s.Footer}>
                                <div className={s.FooterTitle}>
                                    LEBEDEV PAVEL 2021
                                </div>
                            </div>
                        </div>
                    </Switch>
                </div>
        )
    }
}

type MapDispatchToPropsType = {
    InitializeApp: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}

type AppPropsType = MapDispatchToPropsType & MapStateToPropsType

const MapStateToProps = (state: RootReducerType) => ({
    initialized: state.appReducer.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(MapStateToProps, {
        InitializeApp,
    })
)(App)