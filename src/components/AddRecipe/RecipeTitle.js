import React from "react"
import { Label, Input } from "reactstrap"
const RecipeTitle = props => {
	const { recipe, setRecipe } = props
	return (
		<div>
			<Label for="recipe-title">Your title:</Label>
			<Input
				type="text"
				id="recipe-title"
				placeholder="Title"
				onChange={e =>
					setRecipe(Object.assign(recipe, { title: e.target.value }))
				}
			/>
		</div>
	)
}
export default RecipeTitle
