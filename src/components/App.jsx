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
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
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

  rateColor(id, rating){
    const colors = this.state.colors.map(color => 
      (color.id !== id) ? 
        color : 
        {
          ...color,
          rating
        }
    )
    this.setState({colors})
  }

  removeColor(id){
    const colors = this.state.colors.filter(color=> color.id !== id);

    this.setState({colors});
  }

  render() {
    const { colors } = this.state;
    const { users } = this.props;
    const { addColor, rateColor, removeColor } = this;

    return (
      <>
        <Header title='Project managment'/>
        {/* <Users users={users}/> */}
        <Users />
        <AddColorForm onNewColor={addColor}/>
        <ColorList  colors={colors}
                    onRate={rateColor}
                    onRemove={removeColor}
        />
      </>
    )
  }
}


export { App };