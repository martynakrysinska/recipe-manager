import React from "react"
const RecipeTitle = props => {
	const { recipe, setRecipe } = props
	return (
		<div>
			<label for="recipe-title">Your title:</label>
			<input
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
