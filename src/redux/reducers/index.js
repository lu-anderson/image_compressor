import { LOGIN } from '../constants';

const INITIAL_STATE = {
  isLogged: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
  case LOGIN:
    return {
      ...state,
      isLogged: true,
    };
  default:
    return state;
  }
};

export default reducer;
