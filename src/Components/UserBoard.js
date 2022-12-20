import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser, setListAsync } from '../Redux/User/UserActions';

function UserBoard() {
  const [disableButton, setDisableButton] = useState(false);
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.list.length > 0) setDisableButton(false);
  }, [state]);
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
      {!disableButton && (
        <button
          onClick={() => {
            dispatch(setListAsync());
            setDisableButton(true);
          }}
        >
          Get List
        </button>
      )}

      {state.list.length > 0 &&
        state.list.map((item, index) => <p key={index}>{item.name}</p>)}
    </div>
  );
}

export default UserBoard;
