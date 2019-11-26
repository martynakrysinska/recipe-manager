import React, { useState } from "react"

const PasswordForgetFormBase = props => {
	const [email, setEmail] = useState("")
	const [error, setError] = useState(null)

	const onSubmit = e => {
		e.preventDefault()
		e.stopPropagation()
		props.firebase
			.resetPassword(email)
			.then(() => {
				setEmail("")
			})
			.catch(error => {
				setError(error)
			})
	}

	const isInvalid = email === ""
	return (
		<form onSubmit={onSubmit}>
			<input
				name="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
				type="text"
				placeholder="Email Address"
			/>
			<button disabled={isInvalid} type="submit">
				Reset My Password
			</button>
			{error && <p>{error.message}</p>}
		</form>
	)
}

export default PasswordForgetFormBase
