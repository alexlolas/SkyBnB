import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
        let allErrors = {}
        action.errors.forEach(err => {
          let objectKey = err.split(' ')[0].toLowerCase()
            allErrors[objectKey] = err
          
        })
        return allErrors
    case RECEIVE_CURRENT_USER: 
      return {}
    default:
      return state;
  }
}

export default sessionErrorReducer