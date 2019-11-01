import React from "react"
import AuthNavigation from "./AuthNavigation"
import NonAuthNavigation from "./NonAuthNavigation"
import { AuthUserContext } from "../Session"

const Navigation = () => (
	<div>
		<AuthUserContext.Consumer>
			{authUser => (authUser ? <AuthNavigation /> : <NonAuthNavigation />)}
		</AuthUserContext.Consumer>
	</div>
)

export default Navigation
