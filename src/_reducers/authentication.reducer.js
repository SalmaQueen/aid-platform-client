import { userConstants } from '../_constants';

let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
console.log(user)
const initialState = user ? { loggedIn: false, user } : {};
export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
          return {
            loggingIn: false,
            user: action.user
          };
        case userConstants.LOGIN_SUCCESS:
          return {
            loggedIn: true,
            user: action.user.user
          };
        case userConstants.LOGIN_FAILURE:
          return {};
        case userConstants.LOGOUT:
          return {};
        default:
          return state
    }
}