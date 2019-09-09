import React, { Component } from 'react';

export const UserList = (props) => <div>
  <ul>
    {
      props.users.map(user => {
        return <li key={user.id}>{user.name}</li>;
      })
    }
  </ul>
</div>;