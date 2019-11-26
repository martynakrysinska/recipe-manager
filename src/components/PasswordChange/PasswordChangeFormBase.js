import React, { useState } from "react"
import { withFirebase } from "../Firebase"

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
		<div onSubmit={onSubmit}>
			<input
				name="password1"
				onChange={e =>
					setData(Object.assign(data, { password1: e.target.value }))
				}
				type="password"
				placeholder="New password"
			/>
			<h5>Confirm</h5>
			<input
				name="password2"
				onChange={e =>
					setData(Object.assign(data, { password2: e.target.value }))
				}
				type="password"
				placeholder="Confirm new password"
			/>
			<button type="submit">Reset My Password</button>
			{error && <p>{error.message}</p>}
		</div>
	)
}

const PasswordChangeForm = withFirebase(PasswordChangeFormBase)
export default PasswordChangeForm
