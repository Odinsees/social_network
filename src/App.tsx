import React from 'react';
import s from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {RootStateType} from "./redux/state";


type PropsType = {
    state: RootStateType
    AddPost: () => void
    updateNewPostText: (newText: string) => void
}


const App: React.FC<PropsType> = ({state, AddPost, updateNewPostText}) => {
    return (
        <div className={s.colorWrapper}>
            <BrowserRouter>
                <div className={s.Wrapper}>
                    <div className={s.Header}>
                        <Header/>
                    </div>
                    <div className={s.Navbar}>
                        <Navbar/>

                    </div>
                    <div className={s.AppContent}>
                        <Route
                            path='/dialogs'
                            render={() =>
                                <Dialogs
                                    state={state.dialogsPage}
                                />}
                        />
                        <Route
                            path='/profile'
                            render={() =>
                                <Profile
                                    profilePage={state.profilePage}
                                    AddPost={AddPost}
                                    updateNewPostText={updateNewPostText}
                                />}/>
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
            </BrowserRouter>
        </div>

    )
}

export default App;
