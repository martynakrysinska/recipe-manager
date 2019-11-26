import React from "react"

const Instructions = props => {
	const { setRecipe, recipe } = props
	return (
		<div>
			<p>Instructions</p>
			<input
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
