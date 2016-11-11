import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <div>Hi there!</div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#main'));
