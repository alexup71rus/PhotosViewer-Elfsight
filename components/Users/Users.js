import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const Users = (props) => <div>
  <ul>
    {
      props.users.map(user => <li key={user.id}>
          <Link to={`/id${user.id}`}>{user.name}</Link>
        </li>)
    }
  </ul>
</div>;