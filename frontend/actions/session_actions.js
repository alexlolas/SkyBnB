import * as SessionUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_USER
})

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const login = user => dispatch => SessionUtil.login(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))

export const logout = () => dispatch => SessionUtil.logout()
  .then(() => dispatch(logoutCurrentUser()), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))

export const signup = user => dispatch => SessionUtil.signup(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)))

export const clearErrors = () => dispatch => {
  dispatch(receiveErrors([]))
}