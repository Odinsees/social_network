import React from 'react';
import s from './App.module.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";


type PropsType = {
    //store: StoreType
}


const App: React.FC<PropsType> = () => {
    return (
            <div className={s.colorWrapper}>
                <Switch>
                    <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                    <div className={s.Wrapper}>
                        <div className={s.Header}>
                            <Header/>
                        </div>
                        <div className={s.Navbar}>
                            <Navbar/>

                        </div>
                        <div className={s.AppContent}>
                            <Route path='/profile' render={() => <Profile/>}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
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
