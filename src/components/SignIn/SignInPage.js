import React from "react"
import { SignInForm } from "./index"
import SignUpLink from "../SignUp/SignUpLink"
import { PasswordForgetLink } from "../PasswordForget"
const SignInPage = () => {
	return (
		<div>
			<h3>Sign in</h3>
			<SignInForm />
			<PasswordForgetLink />
			<SignUpLink />
		</div>
	)
}

export default SignInPage
