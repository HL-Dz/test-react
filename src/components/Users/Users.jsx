import React, {Component} from 'react';
import { Loader } from '../loaders/Loader.jsx';
import { User } from './User/User.jsx';
import './Users.scss';


const Users = ({data=[], loading, error}) => {
  return (
    <div className="users">
      <h1 className="users__title">Users</h1>
      {(loading) ? 
        <Loader /> : 
        (data.length) ? 
          <ul className="users__list">
            {data.map((user, i) => 
              <User key={user.id} {...user} />
            )}
          </ul> : 
          <span>0 users loaded...</span>
      }
      {(error) ? <p>Erorr loading Users: error</p> : ''}
    </div>
  )
}

export { Users };