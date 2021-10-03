import {RootReducerType, store} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";


let rerenderEntireThree = (state:RootReducerType) => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireThree(store.getState())

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireThree(state)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





