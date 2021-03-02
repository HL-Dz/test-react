import React, {Component} from 'react';
import { v4 } from 'uuid';
import { Header } from './Header/Header.jsx';
import { Users } from './Users/Users.jsx';
import { AddColorForm } from './AddColorForm/AddColorForm.jsx';
import { ColorList } from './ColorList/ColorList.jsx';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      colors: []
    }

    this.addColor = this.addColor.bind(this);
  }

  addColor(title,color) {
    const colors = [
      {
        id: v4(),
        title,
        color,
        rating: 0
      },
      ...this.state.colors,
    ]
    this.setState({colors});
  }

  render() {
    const { colors } = this.state;
    const { users } = this.props;

    return (
      <>
        <Header title='Project managment'/>
        <Users users={users}/>
        <AddColorForm onNewColor={this.addColor}/>
        <ColorList colors={colors}/>
      </>
    )
  }
}


export { App };