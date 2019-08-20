import React from 'react';
import logo from './logo.svg';
import './App.css';

const firebase = require('firebase');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }

  render() {
    return(<div>Hello World!</div>)
  }
  // react hook, wheneer the app component is loaded successfully 
  // inside of the DOM this will get called in the DOM 
  // as a lifecycle hook component  
  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes: notes});
        // docs is a property of the server update paramater 
      });
      // whenver a change occurs in notes a snapshot will occur 
  }
}

export default App;
