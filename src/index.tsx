import {store} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



let rerenderEntireThree = () =>{
    ReactDOM.render(
        <React.StrictMode>
                <App
                    store={store.getState()}
                    AddPost={store.AddPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireThree()
store.subscribe(rerenderEntireThree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




