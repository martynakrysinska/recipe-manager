import React from "react"
import * as ROUTES from "../../constants/routes"
import { Link } from "react-router-dom"
import SignOutButton from "../SignOut"
const AuthNavigation = () => (
	<ul>
		<li>
			<Link to={ROUTES.LANDING}>Landing</Link>
		</li>
		<li>
			<Link to={ROUTES.HOME}>Home</Link>
		</li>
		<li>
			<Link to={ROUTES.ACCOUNT}>Account</Link>
		</li>
		<li>
			<SignOutButton />
		</li>
	</ul>
)

export default AuthNavigation
