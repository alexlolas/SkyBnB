import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { signup, clearErrors } from "../../actions/session_actions";
import Signup from './signup'
import React from "react";


const mSTP = ({errors}) => ({
  errors: errors.session
})

const mDTP = dispatch => ({
  signupUser: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  otherForm: (
    <div className="session-button" onClick={() => dispatch(openModal('login'))}>
      Login
    </div>
  ),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Signup)