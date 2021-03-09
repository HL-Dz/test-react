import React, {Component} from 'react';
import { getUsers } from '../api/getUsers';
import { delay } from '../helpers/settings';


const DataComponent = (WrappedComponent, url) => {
  return class DataComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        loading: false,
        error: null
      }
    }

    componentDidMount(){
      this.setState({loading: true})
      getUsers(url)
        .then(async data => {
          await delay(2000);
          this.setState({data, loading: false})
        })
    }

    render(){
      return <WrappedComponent {...this.state}/>
    }
  }
}


export {DataComponent};