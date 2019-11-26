import React from "react"

const RecipeDetails = props => {
	return (
		<div>
			<div xs={4}>
				<label for="recipe-prep-time">prep-time...</label>
				<input type="number" id="recipe-prep-time" />
			</div>
			<div xs={4}>
				<label for="recipe-cook-time">cook-time...</label>
				<input type="number" id="recipe-cook-time" />
			</div>
			<div xs={4}>
				<label for="recipe-servings">servings...</label>
				<input type="number" id="recipe-servings" />
			</div>

			<div xs={6}>
				<label for="recipe-cuisines">Cuisines...</label>
			</div>
			<div xs={6}>
				<label for="recipe-tags">tags...</label>
			</div>
			<div xs={6}>
				<input id="recipe-cuisines" />
			</div>
			<div xs={6}>
				<input id="recipe-tags" />
			</div>
		</div>
	)
}

export default RecipeDetails
