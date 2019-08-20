import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');

require('firebase/firestore');
// Your web app's Firebase configuration
// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyASQB2QKneCgJP0h7NxuPGFF04z6F64HK8",
    authDomain: "evernote-clone-eccab.firebaseapp.com",
    databaseURL: "https://evernote-clone-eccab.firebaseio.com",
    projectId: "evernote-clone-eccab",
    storageBucket: "evernote-clone-eccab.appspot.com",
    messagingSenderId: "28016483617",
    appId: "1:28016483617:web:7610d02286811c75"
  });

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
