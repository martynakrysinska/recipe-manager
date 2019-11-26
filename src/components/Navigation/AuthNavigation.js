import React from "react"
import * as ROUTES from "../../constants/routes"
import { Link } from "react-router-dom"
import SignOutButton from "../SignOut"
const AuthNavigation = () => (
	<div>
		<div>
			<Link to={ROUTES.LANDING}>Landing</Link>
		</div>
		<div>
			<Link to={ROUTES.HOME}>Home</Link>
		</div>
		<div>
			<Link to={ROUTES.ACCOUNT}>Account</Link>
		</div>
		<div>
			<Link to={ROUTES.ADD_RECIPE}>Add recipe</Link>
		</div>
		<div>
			<SignOutButton />
		</div>
	</div>
)

export default AuthNavigation
