import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser, setListAsync } from '../Redux/User/UserActions';

function UserBoard() {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      {state.data.map((ele, index) => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}
            key={index}
          >
            <p>
              {ele.email}, {ele.password}
            </p>
            <button
              style={{ marginLeft: '1rem' }}
              onClick={() => {
                dispatch(removeUser(ele.email));
              }}
            >
              Delete entry
            </button>
          </div>
        );
      })}
      {!state.loading && (
        <button
          onClick={() => {
            dispatch(setListAsync());
          }}
        >
          Get List
        </button>
      )}

      {state.list?.length > 0 &&
        state.list.map((item, index) => <p key={index}>{item.name}</p>)}
    </div>
  );
}

export default UserBoard;
