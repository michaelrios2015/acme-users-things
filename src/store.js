import { createStore } from 'redux';
const LOAD_USERS = 'LOAD_USERS';
const LOAD_THINGS = 'LOAD_THINGS';

const store = createStore((state = { users: [], things: []}, action)=> {
    //console.log(action.type);
    if(action.type === LOAD_USERS){
        state = {...state, users: action.users }
    }
    if(action.type === LOAD_THINGS){
        state = {...state, things: action.things }
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

const loadThings = (things)=> {
    return {
        type: LOAD_THINGS,
        things
    };
    //console.log(users);
};

export default store; 
export { loadUsers, loadThings };