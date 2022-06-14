import { ADD_USERS } from "../action-types";

export const addUsers = (data) => {
  // console.log(data);
  return {
    type: ADD_USERS,
    data,
  };
};
