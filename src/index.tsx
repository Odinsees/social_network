import {RootReducerType, store, StoreType} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";


let rerenderEntireThree = (store:StoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App
                    store={store}
                />
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireThree(store)

store.subscribe(()=>{
    rerenderEntireThree(store)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





