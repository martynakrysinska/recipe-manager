import React from "react"
import * as ROUTES from "../../constants/routes"
import { Link } from "react-router-dom"
import SignOutButton from "../SignOut"
import { Nav, NavItem } from "reactstrap"
const AuthNavigation = () => (
	<Nav>
		<NavItem>
			<Link to={ROUTES.LANDING}>Landing</Link>
		</NavItem>
		<NavItem>
			<Link to={ROUTES.HOME}>Home</Link>
		</NavItem>
		<NavItem>
			<Link to={ROUTES.ACCOUNT}>Account</Link>
		</NavItem>
		<NavItem>
			<Link to={ROUTES.ADD_RECIPE}>Add recipe</Link>
		</NavItem>
		<NavItem>
			<SignOutButton />
		</NavItem>
	</Nav>
)

export default AuthNavigation
