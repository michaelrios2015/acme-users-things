import React from 'react';
import { connect } from "react-redux";

const Users = ({ users }) => {
    console.log(users.length);
    if (users){
    return(
        
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
    );
        }else {
            return(
                users.length
            )
        }

};

export default connect(state => state)(Users);