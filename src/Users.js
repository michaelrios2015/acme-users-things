import React from 'react';
import { connect } from "react-redux";
import { createStore } from 'redux';
import axios from 'axios';
import { createUser } from './store';

const Users = ({ users, createUser }) => {
    //console.log(users.length);
    //console.log(createUser);
    if (users){
    return(
        <div>
            <button onClick = {()=> createUser(Math.random())} >Create User</button>
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
        }else {
            return(
                users.length
            )
        }

};

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (name) =>{
            // const user = (await axios.post('/api/users', { name })).data;
            // dispatch(createUser(user));
            dispatch(createUser(name));
        }
    };
};

export default connect(state => state, mapDispatchToProps)(Users);