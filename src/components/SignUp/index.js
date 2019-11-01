import SignUpFormBase from "./SignUpFormBase"
import SignUpPage from "./SignUpPage"
import SignUpLink from "./SignUpLink"
import { withRouter } from "react-router-dom"
import { withFirebase } from "../Firebase"
import { compose } from "recompose"

const SignUpForm = compose(
	withRouter,
	withFirebase
)(SignUpFormBase)

export default SignUpPage

export { SignUpForm, SignUpLink }
