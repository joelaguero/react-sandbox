import React from 'react';
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
      <h1>Welcome to penpen</h1>
      <p>Penpen is a place for writers to showcase their work.</p>
      </div>
    );
  }
}
