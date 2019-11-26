import React from "react"

const RecipeDetails = props => {
	return (
		<div>
			<div>
				<label htmlFor="recipe-prep-time">prep-time...</label>
				<input type="number" id="recipe-prep-time" />
			</div>
			<div>
				<label htmlFor="recipe-cook-time">cook-time...</label>
				<input type="number" id="recipe-cook-time" />
			</div>
			<div>
				<label htmlFor="recipe-servings">servings...</label>
				<input type="number" id="recipe-servings" />
			</div>

			<div>
				<label htmlFor="recipe-cuisines">Cuisines...</label>
			</div>
			<div>
				<label htmlFor="recipe-tags">tags...</label>
			</div>
			<div>
				<input id="recipe-cuisines" />
			</div>
			<div>
				<input id="recipe-tags" />
			</div>
		</div>
	)
}

export default RecipeDetails
