import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const UserList = (props) => <div>
  <ul>
    {
      props.users.map(user => {
        return <li key={user.id}>
          <Link to={`/id${user.id}`}>{user.name}</Link>
        </li>;
      })
    }
  </ul>
</div>;