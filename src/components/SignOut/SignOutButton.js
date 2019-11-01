import React from "react"
import { Button } from "reactstrap"
import { withFirebase } from "../Firebase"

const SignOutButton = ({ firebase }) => (
	<Button onClick={firebase.signOut}>Sign Out</Button>
)

export default withFirebase(SignOutButton)
