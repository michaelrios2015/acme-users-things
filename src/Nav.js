import React from 'react';
import { connect } from 'react-redux';


const Nav = ({ users, things })=> {
console.log(users);
    return (
        <nav>
            <a href='#users'>Users ({ users.length > 4 ? 'a': 'B'})</a>
            <a href='#things'>Things ({ things.length })</a> 
        </nav>
    )
};

export default connect(state => state)(Nav);