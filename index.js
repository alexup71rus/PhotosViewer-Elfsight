import React, { Component } from 'react';
import { render } from 'react-dom';
import { User } from './components/User';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Alex'
    };
  }

  render() {
    return (
      <div>
        <User name={this.state.name} />
        <p>
          ...
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
