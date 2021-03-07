import React, {Component} from 'react';
import { getUsers } from '../../api/getUsers.js';
import { delay } from '../../helpers/settings.js';
import { Loader } from '../loaders/Loader.jsx';
import { User } from './User/User.jsx';
import './Users.scss';

class Users extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
      loading: false,
      error: null
    }
  }

  componentDidMount(){
    this.setState({loading: true})
    getUsers()
      .then(async users  =>  {
        await delay(3000);
        this.setState({users, loading: false})
      },
      error => {
        this.setState({error, loading: false})
      })

  }

  render(){
    const { users, loading, error } = this.state;

    return (
      <div className="users">
        <h1 className="users__title">Users</h1>
        {(loading) ? 
          <Loader /> : 
          (users.length) ? 
            <ul className="users__list">
              {users.map((user, i) => 
                <User key={user.id} {...user} />
              )}
            </ul> : 
            <span>0 users loaded...</span>
        }
        {(error) ? <p>Erorr loading Users: error</p> : ''}
      </div>
    )
  }
}

export { Users };