import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mSTP = state => ({
  // Errors?
})

const mDTp = dispatch => ({
  loginUser: user => dispatch(login(user))
})

export default connect(null, mDTp)(LoginForm)