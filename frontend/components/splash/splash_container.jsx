import { connect } from "react-redux";
import Splash from "./splash";
import { openModal } from "../../actions/modal_actions";


const mSTP = state =>  ({
  currentUser: state.session.id
})

const mDTP = dispatch => ({
openModal: modal => dispatch(openModal(modal))
})


export default connect(mSTP, mDTP)(Splash)