import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import Signup from './signup'

const mSTP = state => ({
  user: {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
  }
})

const mDTP = dispatch => ({
  signup: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(Signup)