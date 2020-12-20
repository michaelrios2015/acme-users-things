import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { Provider, connect } from 'react-redux';
import store, { loadUsers, loadThings } from './store';
import Nav from './Nav';
import Users from './Users';



const App = connect(
    (state)=>{
        return state;
    },
    (dispatch)=> {
        return {
            bootstrap: async()=>{
                const users = (await axios.get('/api/users')).data;
                dispatch(loadUsers(users));
                const things = (await axios.get('/api/things')).data;
                dispatch(loadThings(things));
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
        <Users />
      </div>
    );
  }
})

render(<Provider store={ store }><App /></Provider>, document.querySelector('#root'));