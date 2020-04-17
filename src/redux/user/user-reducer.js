import { UserActionTypes } from './user-types';

const userKey = "@aratu-Token"
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(userKey)),
  validToken: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.TOKEN_VALIDATED:
      if (action.payload) {
        return { ...state, validToken: true }
      } else {
        localStorage.removeItem(userKey)
        return { ...state, validToken: false, user: null }
      }

    case UserActionTypes.USER_FETCHED:
      localStorage.setItem(userKey, JSON.stringify(action.payload))
      return { ...state, user: action.payload, validToken: true };

    default:
      return state;
  }
};

export default userReducer;