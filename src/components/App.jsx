import React, {Component} from 'react';
import { Header } from './Header/Header.jsx';
import { Users } from './Users/Users.jsx';
import { AddColorForm } from './AddColorForm/AddColorForm.jsx';
import { ColorList } from './ColorList/ColorList.jsx';


const logColor = (title,color) => {
  console.log(`New Color: ${title} | ${color}`);
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      colors: [
        {
          "id": "6465-446-65765764-tt-dg-4-3543-65-46-54243-r",
          "title": "lawn",
          "color": "#26ac56",
          "rating": "3"
        },
        {
          "id": "43435-4654654-654-tt-dg-4-3543-66-54243-454",
          "title": "bright red",
          "color": "#ff0000",
          "rating": "0"
        },
        {
          "id": "43435-4654654-654-tt-dg-4-3543-65-46-54243-r",
          "title": "ocean at dusk",
          "color": "#00c4e2",
          "rating": "5"
        }
      ]
    }
  }

  render() {
    const { colors } = this.state;
    const { users } = this.props;

    return (
      <>
        <Header title='Project managment'/>
        <Users users={users}/>
        <AddColorForm onNewColor={logColor}/>
        <ColorList colors={colors}/>
      </>
    )
  }
}


export { App };