import React, {Component} from 'react';
import { Header } from './Header/Header.jsx';
import { Users } from './Users/Users.jsx';
import { DataComponent } from '../hoc/DataComponent.jsx';
import { AddColorContainer } from './AddColorForm/AddColorContainer.jsx';
import { ColorsContainer } from './ColorList/ColorsContainer.jsx';
import MainContent from './MainContent/MainContent.jsx';



const RandomUsers = DataComponent(Users, 'https://jsonplaceholder.typicode.com/users');

const App = (props) => {
  return (
    <>
      <MainContent/>
      <Header title='Project managment'/>
      <RandomUsers/>
      <AddColorContainer/>
      <ColorsContainer/>
    </>
  )
}


export { App };