import React from 'react';
import { User } from './User/User.jsx';
import './Users.scss';


const Users = ({users}) => (
  <div className="users">
    <h1 className="users__title">Users</h1>
    <ul className="users__list">
      {users.map((user, i) => 
        <User key={i} {...user} />
      )}
    </ul> 
  </div>
);


export { Users };