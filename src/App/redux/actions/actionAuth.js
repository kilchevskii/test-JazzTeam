import { GET_LOGIN_REQUESTED , GET_LOGIN_SUCCESS, GET_LOGOUT_SUCCESS } from './actionTypes';

export const loadLogin = (data) => {
   return {
      type: GET_LOGIN_REQUESTED,
      payload: data,
   };
};


export const setLogin = (data) => {
    return {
       type: GET_LOGIN_SUCCESS,
       payload: data,
    };
 };

 export const logOut = (data) => {
   return {
      type: GET_LOGOUT_SUCCESS,
      payload: data,
   };
};