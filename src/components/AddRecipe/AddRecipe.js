import React, { useState } from "react"
import { AuthUserContext, withAuthorization } from "../Session"
import {
	RecipeDetails,
	RecipeTitle,
	IngredientsList,
	AddIngredient,
	Image,
	Instructions
} from "./index"

// Let users submit ingredients on enter and prevent from submitting the form

const initialState = {
	title: "",
	image: "https://i.imgur.com/86HTWQq.jpg",
	ingredients: [],
	instructions: "",
	servings: 1,
	prepTime: 0,
	cookTime: 0,
	cuisines: [],
	tags: []
}

const AddRecipe = props => {
	const [recipe, setRecipe] = useState(initialState)
	const [ingredient, setIngredient] = useState("")

	const handleAddIngredient = e => {
		setRecipe(
			Object.assign(recipe, {
				ingredients: recipe.ingredients.concat(ingredient)
			})
		)
		setIngredient("")
	}

	const handleSubmit = e => {
		e.preventDefault()
	}
	return (
		<AuthUserContext.Consumer>
			{authUser => (
				<form onSubmit={handleSubmit}>
					<div>
						<div xs={7}>
							<RecipeTitle recipe={recipe} setRecipe={setRecipe} />
							<AddIngredient
								setIngredient={setIngredient}
								ingredient={ingredient}
								handleAddIngredient={handleAddIngredient}
							/>

							<IngredientsList ingredients={recipe.ingredients} />

							<Instructions setRecipe={setRecipe} recipe={recipe} />
						</div>
						<div xs={4}>
							<div>
								<Image recipe={recipe} />
								<RecipeDetails />
							</div>
						</div>
						<div xs={12} className="text-center">
							<button type="submit">Submit</button>
						</div>
					</div>
				</form>
			)}
		</AuthUserContext.Consumer>
	)
}
const condition = authUser => !!authUser
export default withAuthorization(condition)(AddRecipe)
