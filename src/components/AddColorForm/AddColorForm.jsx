import React, { Component } from 'react';
import './AddColorForm.scss';


const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}

class AddColorForm extends Component {
  constructor(props){
    super(props);

    this.submit = this.submit.bind(this);
    this._titleRef = React.createRef();
    this._colorRef = React.createRef();
  }

  async submit(e){
    e.preventDefault();
    await delay(1000);
    console.log(`Новый цвет: ${this._titleRef.current.value} ${this._colorRef.current.value}`);
    this._titleRef.current.value = '';
    this._colorRef.current.value = '#000000';
    this._titleRef.current.focus();
  }

  render(){
    return (
      <form onSubmit={this.submit} className="form-block">
        <input type="text"
                placeholder="color title..."
                ref={this._titleRef}
                required/>
        <input  type="color"
                ref={this._colorRef}
                required/>
        <button>Add</button>
      </form>
    )
  }
};


export { AddColorForm };
