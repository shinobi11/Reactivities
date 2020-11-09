import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import 'semantic-ui-css/semantic.min.css'
import { Header, Icon, List } from 'semantic-ui-react'
import axios from 'axios';

class App extends Component {
  state = {
    values: []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
      .then(response => {     
        this.setState({
          values: response.data
          // values: [{id: 1, name: 'Value 101'}, {id: 2, name: 'Value 102'}]
        })
      });
  }

  render(){
    return (
      <div>
          <Header as='h2'>
            <Icon name='users' />
            <Header.Content>Reactivities</Header.Content>
          </Header>
          <List>
            {this.state.values.map((value: {name: string, id: number}) => <List.Item key={value.id}>{value.name}</List.Item>)}
          </List>

      </div>
    );
  }
}

export default App;
