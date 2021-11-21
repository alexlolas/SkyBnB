import * as SessionUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const RECEIVE_SESSION_ERROS = 'RECEIVE_SESSION_ERROS'


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_USER
})

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERROS,
  errors
})

export const login = user => dispatch => SessionUtil.login(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)))

export const logout = () => dispatch => SessionUtil.logout()
  .then(() => dispatch(logoutCurrentUser()))

export const signup = user => dispatch => SessionUtil.signup(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)))