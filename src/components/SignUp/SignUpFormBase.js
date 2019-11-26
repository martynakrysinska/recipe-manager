import React, { useState } from "react"
import * as ROUTES from "../../constants/routes"

// ADD VALIDATION
const initialData = {
	username: "",
	password: "",
	password2: "",
	email: ""
}

const SignUpFormBase = props => {
	const [data, setData] = useState(initialData)
	const [error, setError] = useState(null)

	const handleSubmit = e => {
		e.preventDefault()
		e.stopPropagation()
		const { firebase } = props

		firebase
			.createUserWithEmailAndPassword(data.email, data.password)
			.then(authUser => {
				const { username, email } = data
				return firebase.user(authUser.user.uid).set({
					username,
					email
				})
			})
			.then(authUser => {
				setData(initialData)
				props.history.push(ROUTES.HOME)
			})
			.catch(error => {
				setError(error.message)
			})
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label for="su-username-input">Username</label>
				<input
					id="su-username-input"
					onChange={e =>
						setData(Object.assign(data, { username: e.target.value }))
					}
				></input>
				<label for="su-email-input">E-mail:</label>
				<input
					id="su-email-input"
					onChange={e =>
						setData(Object.assign(data, { email: e.target.value }))
					}
				></input>
				<label for="su-password-input">Password</label>
				<input
					type="password"
					id="su-password-input"
					onChange={e =>
						setData(Object.assign(data, { password: e.target.value }))
					}
				></input>
				<label for="su-password2-input">Confirm password</label>
				<input
					type="password"
					id="su-password2-input"
					onChange={e =>
						setData(Object.assign(data, { password2: e.target.value }))
					}
				></input>
				<button type="submit" onClick={handleSubmit}>
					Submit
				</button>
			</form>
			{error && <p>{error}</p>}
		</div>
	)
}

export default SignUpFormBase
