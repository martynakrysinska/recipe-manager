import React, { useState } from "react"
import { Form, Input, Button } from "reactstrap"

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
		<Form onSubmit={onSubmit}>
			<Input
				name="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
				type="text"
				placeholder="Email Address"
			/>
			<Button disabled={isInvalid} type="submit">
				Reset My Password
			</Button>
			{error && <p>{error.message}</p>}
		</Form>
	)
}

export default PasswordForgetFormBase
