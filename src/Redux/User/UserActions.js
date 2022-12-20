import { ADD_USER, REMOVE_USER, SET_LIST } from './UserType';
import axios from 'axios';
export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}
export function addUserAsync(user) {
  return (dispatch) => {
    setTimeout(() => dispatch(addUser(user)), 1000);
  };
}

export function removeUser(userEmail) {
  return {
    type: REMOVE_USER,
    payload: { email: userEmail },
  };
}

export function setList(list) {
  return {
    type: SET_LIST,
    payload: list,
  };
}
export function setListAsync() {
  return async (dispatch) => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch(setList(data));
  };
}
