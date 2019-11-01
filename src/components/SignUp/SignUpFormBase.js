import React, { useState } from "react"
import { Form, Input, Label, Button } from "reactstrap"
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
			<Form onSubmit={handleSubmit}>
				<Label for="su-username-input">Username</Label>
				<Input
					id="su-username-input"
					onChange={e =>
						setData(Object.assign(data, { username: e.target.value }))
					}
				></Input>
				<Label for="su-email-input">E-mail:</Label>
				<Input
					id="su-email-input"
					onChange={e =>
						setData(Object.assign(data, { email: e.target.value }))
					}
				></Input>
				<Label for="su-password-input">Password</Label>
				<Input
					type="password"
					id="su-password-input"
					onChange={e =>
						setData(Object.assign(data, { password: e.target.value }))
					}
				></Input>
				<Label for="su-password2-input">Confirm password</Label>
				<Input
					type="password"
					id="su-password2-input"
					onChange={e =>
						setData(Object.assign(data, { password2: e.target.value }))
					}
				></Input>
				<Button type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
			{error && <p>{error}</p>}
		</div>
	)
}

export default SignUpFormBase
