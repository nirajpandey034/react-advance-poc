import { ADD_USER, REMOVE_USER } from './UserType';

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}

export function removeUser(userEmail) {
  return {
    type: REMOVE_USER,
    payload: { email: userEmail },
  };
}
