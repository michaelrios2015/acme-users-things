import { createStore } from 'redux';
const LOAD_USERS = 'LOAD_USERS';

const store = createStore((state = { users: []}, action)=> {
    //console.log(action.type);
    if(action.type === LOAD_USERS){
        state = {...state, users: action.users }
    }
    return state;
});


const loadUsers = (users)=> {
    return {
        type: LOAD_USERS,
        users
    };
    //console.log(users);
};

export default store; 
export { loadUsers };