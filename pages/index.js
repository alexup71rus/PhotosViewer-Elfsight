import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { UserList } from '../components/UserList';
import './style.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alex'
    };
    
    document.onkeyup = function (e) {
      if (e.key == "Escape" || e.code == "Escape") {
        props.routeLocation.history.push('/');
      }
    }
  }

  render() {
    return (
      <div>
        <UserList users={[3,4,5]} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
