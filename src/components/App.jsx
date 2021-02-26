import React from 'react';
import { Header } from './Header/Header.jsx';
import { Users } from './Users/Users.jsx';
import { AddColorForm } from './AddColorForm/AddColorForm.jsx';


const logColor = (title,color) => {
  console.log(`New Color: ${title} | ${color}`);
}


const App = ({users}) => (
  <>
    <Header title='Project managment'/>
    <Users users={users}/>
    <AddColorForm onNewColor={logColor}/>
  </>
);


export { App };