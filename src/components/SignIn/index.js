import SignInFormBase from "./SignInFormBase"
import SignInPage from "./SignInPage"
import { withRouter } from "react-router-dom"
import { withFirebase } from "../Firebase"
import { compose } from "recompose"

const SignInForm = compose(
	withRouter,
	withFirebase
)(SignInFormBase)

export default SignInPage

export { SignInForm }
