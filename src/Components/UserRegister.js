import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addUser } from '../Redux/User/UserActions';

function UserRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ email: email, password: password }));
    setEmail('');
    setPassword('');
  };
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <input
        placeholder="Email"
        type="email"
        onChange={(e) => {
          emailChangeHandler(e);
        }}
        value={email}
      ></input>
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => {
          passwordChangeHandler(e);
        }}
        value={password}
        style={{ marginTop: '1rem' }}
      ></input>
      <button
        type="submit"
        onClick={(e) => onSubmit(e)}
        style={{ marginTop: '1rem' }}
      >
        Register User
      </button>
    </form>
  );
}

export default UserRegister;
