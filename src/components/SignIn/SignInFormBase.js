import React, { useState } from "react"
import { Form, Input, Label, Button } from "reactstrap"
import * as ROUTES from "../../constants/routes"
const initialData = {
	email: "",
	password: ""
}
const SignInFormBase = props => {
	const [data, setData] = useState(initialData)
	const [error, setError] = useState(null)

	const handleSubmit = e => {
		e.preventDefault()
		e.stopPropagation()
		const { firebase } = props

		firebase
			.signInWithEmailAndPassword(data.email, data.password)
			.then(() => {
				setData(initialData)
				props.history.push(ROUTES.HOME)
			})
			.catch(e => {
				setError(e.message)
				console.log(data)
			})
	}
	return (
		<div>
			<Form onSubmit={handleSubmit}>
				{error && <p>{error}</p>}

				<Label for="si-email-input">Email</Label>
				<Input
					id="si-email-input"
					onChange={e =>
						setData(Object.assign(data, { email: e.target.value }))
					}
				></Input>
				<Label for="si-password-input">Password</Label>
				<Input
					type="password"
					id="si-password-input"
					onChange={e =>
						setData(Object.assign(data, { password: e.target.value }))
					}
				></Input>

				<Button type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</div>
	)
}

export default SignInFormBase
