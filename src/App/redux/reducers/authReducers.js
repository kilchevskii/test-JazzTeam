import {
  GET_LOGIN_FAILED,
  GET_LOGIN_REQUESTED,
  GET_LOGIN_SUCCESS,
  GET_LOGOUT_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  data: [],
  loading: false,
  errors: null,
  auth: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOGIN_REQUESTED:
      return { ...state, loading: true };
    case GET_LOGIN_SUCCESS:
      const authorized =
        action.payload.data[0].password === action.payload.config.password &&
        action.payload.data[0].login === action.payload.config.login;
      return {
        ...state,
        loading: false,
        auth: authorized ? true : false,
        data: action.payload,
      };
    case GET_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        auth: false,
        data: action.payload,
      };
      case GET_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
