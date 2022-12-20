import { ADD_USER, REMOVE_USER, SET_LIST } from './UserType';

const intialState = {
  data: [],
  list: [],
};

const UserReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_LIST: {
      return {
        data: state.data,
        list: [...state.list, ...action.payload],
      };
    }
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
