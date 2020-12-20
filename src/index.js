import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { Provider, connect } from 'react-redux';
import store, { loadUsers, loadThings, setView } from './store';
import Nav from './Nav';
import Users from './Users';
import Things from './Things';


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
            },
            setView: function(view){
              dispatch(setView(view));
            } 
        }
    }
)(class App extends Component{
  componentDidMount(){
    this.props.bootstrap();
    this.props.setView(window.location.hash.slice(1));
    // window.addEventListener('hashchange', ()=> {});
  }
  render(){
    const { users, props } = this.props;
    return (
      <div>
        <Nav />
        <Users />
        <Things />
      </div>
    );
  }
})

render(<Provider store={ store }><App /></Provider>, document.querySelector('#root'));