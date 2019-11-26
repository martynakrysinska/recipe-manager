import React, { useState } from "react"
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
			<form onSubmit={handleSubmit}>
				{error && <p>{error}</p>}

				<label for="si-email-input">Email</label>
				<input
					id="si-email-input"
					onChange={e =>
						setData(Object.assign(data, { email: e.target.value }))
					}
				></input>
				<label for="si-password-input">Password</label>
				<input
					type="password"
					id="si-password-input"
					onChange={e =>
						setData(Object.assign(data, { password: e.target.value }))
					}
				></input>

				<button type="submit" onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	)
}

export default SignInFormBase
