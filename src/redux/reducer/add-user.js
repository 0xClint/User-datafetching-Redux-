import { ADD_USERS } from "../action-types";
const initialState = {
  userList: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS: {
      return {
        ...state,
        userList: [...state.userList, action.data],
      };
    }
    default:
      return state;
  }
};
