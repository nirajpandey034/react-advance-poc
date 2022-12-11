import { ADD_USER, REMOVE_USER } from './UserType';

const intialState = {
  data: [],
};

const UserReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        data: [...state.data, action.payload],
      };

    case REMOVE_USER:
      return {
        data: state.data.filter((ele) => {
          return ele.email !== action.payload.email;
        }),
      };

    default:
      return state;
  }
};

export default UserReducer;
