import {
  ADD_USER,
  REMOVE_USER,
  SET_LIST,
  ENABLE_LOADING,
  DISABLE_LOADING,
} from './UserType';

const intialState = {
  data: [],
  list: [],
  loading: false,
};

const UserReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_LIST: {
      return {
        ...state,
        list: [...action.payload],
      };
    }
    case ADD_USER:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case REMOVE_USER:
      return {
        ...state,
        data: state.data.filter((ele) => {
          return ele.email !== action.payload.email;
        }),
      };

    case ENABLE_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case DISABLE_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default UserReducer;
