import React, { useState } from "react"
import { withFirebase } from "../Firebase"
import { Form, Input, Button } from "reactstrap"

const intitialState = {
	password1: "",
	password2: ""
}

const PasswordChangeFormBase = props => {
	const [data, setData] = useState(intitialState)
	const [error, setError] = useState(null)

	const onSubmit = e => {
		e.preventDefault()
		props.firebase
			.updatePassword(data.password1)
			.then(() => {
				setData(intitialState)
			})
			.catch(error => {
				setError(error)
			})
	}

	// const isInvalid = password1 !== password2 || password1 === ""

	return (
		<Form onSubmit={onSubmit}>
			<Input
				name="password1"
				onChange={e =>
					setData(Object.assign(data, { password1: e.target.value }))
				}
				type="password"
				placeholder="New password"
			/>
			<h5>Confirm</h5>
			<Input
				name="password2"
				onChange={e =>
					setData(Object.assign(data, { password2: e.target.value }))
				}
				type="password"
				placeholder="Confirm new password"
			/>
			<Button type="submit">Reset My Password</Button>
			{error && <p>{error.message}</p>}
		</Form>
	)
}

const PasswordChangeForm = withFirebase(PasswordChangeFormBase)
export default PasswordChangeForm
