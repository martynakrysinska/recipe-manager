import React from "react"
import { Input } from "reactstrap"

const Instructions = props => {
	const { setRecipe, recipe } = props
	return (
		<div>
			<p>Instructions</p>
			<Input
				type="textarea"
				onChange={e =>
					setRecipe(
						Object.assign(recipe, {
							instructions: e.target.value
						})
					)
				}
			/>
		</div>
	)
}

export default Instructions
