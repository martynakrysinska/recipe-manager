import React from "react"
import AuthNavigation from "./AuthNavigation"
import NonAuthNavigation from "./NonAuthNavigation"
import { AuthUserContext } from "../Session"
import "../../styles/Navigation.scss"
const Navigation = () => (
	<div className="navigation-container">
		<AuthUserContext.Consumer>
			{authUser => (authUser ? <AuthNavigation /> : <NonAuthNavigation />)}
		</AuthUserContext.Consumer>
	</div>
)

export default Navigation
