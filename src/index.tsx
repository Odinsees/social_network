import {state, subscribe, updateNewPostText} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AddPost, RootStateType} from "./redux/state";
import {BrowserRouter, HashRouter} from "react-router-dom";


let rerenderEntireThree = (state:RootStateType) =>{
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App
                    state={state}
                    AddPost={AddPost}
                    updateNewPostText={updateNewPostText}
                />
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireThree(state)

subscribe(rerenderEntireThree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





