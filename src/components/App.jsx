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
      colors: [
        {
          "id": "43435-4654654-654-tt-dg-4-3543-65-46-54243-r",
          "title": "ocean at dusk",
          "color": "#00c4e2",
          "rating": "5"
        },
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
        }
      ]
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