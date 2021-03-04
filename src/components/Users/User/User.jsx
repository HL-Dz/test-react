import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

const User = ({name, username, email}) => 
  <li className="user__item">
      <span className="user__name">{name} | </span>
      <span className="user__sunrame">{username} | </span>
      <span className="user__age">{email}. </span>
  </li>;

// Проверска свойств с помощью библиотеки PropTypes
// User.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number,
//   surname: (props, propName) => 
//     (typeof props[propName] !== 'string') ? 
//       new Error('A surname must be astring') :
//       (props[propName].length > 8) ?
//         new Error('Surname is over 7 characters') :
//         null
// }

export { User };