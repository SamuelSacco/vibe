import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

// export const receiveUserSignIn = (user) => {
//   return ({
//     type: RECEIVE_USER_SIGN_IN,
//     user
//   })
// }
  
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});



// thunk actions
export const signup = user => dispatch => {
  return (
    APIUtil.signup(user)
      .then( user => (dispatch(receiveCurrentUser({ id: user.data._id })))
        , err => (dispatch(receiveErrors(err.response.data)))
      )
  )
};

export const login = user => dispatch => (
    APIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
)

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutCurrentUser())
};

export const removeErrors = () => dispatch => (
  dispatch(receiveErrors([]))
)
