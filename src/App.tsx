import React from 'react';
import s from './App.module.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";



const App: React.FC = () => {

    return (
            <div className={s.colorWrapper}>
                <Switch>
                    <Route exact path={'/'}  render={() => <Redirect to={'/profile'}/>}/>
                    <div className={s.Wrapper}>
                        <div className={s.Header}>
                            <HeaderContainer/>
                        </div>
                        <div className={s.Navbar}>
                            <Navbar/>
                        </div>
                        <div className={s.AppContent}>
                            <Route  path='/profile/:userId?' render={() => <ProfileContainer/>}/>
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

export default App;
