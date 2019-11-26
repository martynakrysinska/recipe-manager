import React from "react"
import "../../App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import LandingPage from "../Landing/LandingPage"
import SignUpPage from "../SignUp/SignUpPage"
import SignInPage from "../SignIn/SignInPage"
import PasswordForgetPage from "../PasswordForget/PasswordForgetPage"
import HomePage from "../Home/HomePage"
import AccountPage from "../Account/AccountPage"
import AdminPage from "../Admin/AdmingPage"
import AddRecipe from "../AddRecipe"
import * as ROUTES from "../../constants/routes"
import { withAuthentication } from "../Session"

const App = () => (
	<Router>
		<div>
			<Navigation />
			<hr />
			<Route exact path={ROUTES.LANDING} component={LandingPage} />
			<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
			<Route path={ROUTES.SIGN_IN} component={SignInPage} />
			<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
			<Route path={ROUTES.HOME} component={HomePage} />
			<Route path={ROUTES.ACCOUNT} component={AccountPage} />
			<Route path={ROUTES.ADMIN} component={AdminPage} />
			<Route path={ROUTES.ADD_RECIPE} component={AddRecipe} />
		</div>
	</Router>
)
export default withAuthentication(App)
