import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { Provider, connect } from 'react-redux';
import store, { loadUsers } from './store';
import Nav from './Nav';




const App = connect(
    (state)=>{
        return state;
    },
    (dispatch)=> {
        return {
            bootstrap: async()=>{
                const users = (await axios.get('/api/users')).data;
                dispatch(loadUsers(users));
            }
        }
    }
)(class App extends Component{
  componentDidMount(){
    this.props.bootstrap();
  }
  render(){
    const { users } = this.props;
    return (
      <div>
        <Nav />
        <ul>
            {
            users.map( user => { 
                return (
                <li key={ user.id }>
                    { user.name }
                </li>
                );
            })
            }
        </ul>
      </div>
    );
  }
})

render(<Provider store={ store }><App /></Provider>, document.querySelector('#root'));