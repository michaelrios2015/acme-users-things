import React from 'react';
import { connect } from 'react-redux';


const Nav = ({ users, things })=> {
console.log(users);
    return (
        <nav>
            <a href='#users'>Users ({ users.length })</a>
            <a href='#things'>Users ({ things.length })</a> 
        </nav>
    )
};

export default connect(state => state)(Nav);