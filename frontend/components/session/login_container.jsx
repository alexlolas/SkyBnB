import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { openModal, closeModal } from "../../actions/modal_actions";
import React from "react";

const mSTP = ({errors}) => ({
  errors: errors.session
})

const mDTp = dispatch => ({
  loginUser: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  closeModal: () => dispatch(closeModal()),
  otherForm: (
    <div className="session-button" onClick={() => dispatch(openModal('signup'))}>
      Signup
    </div>
  )
})

export default connect(mSTP, mDTp)(LoginForm)