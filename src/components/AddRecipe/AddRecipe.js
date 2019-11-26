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
				<div className="add-recipe-container">
					<form onSubmit={handleSubmit}>
						<div>
							<div>
								<RecipeTitle recipe={recipe} setRecipe={setRecipe} />
								<AddIngredient
									setIngredient={setIngredient}
									ingredient={ingredient}
									handleAddIngredient={handleAddIngredient}
								/>

								<IngredientsList ingredients={recipe.ingredients} />

								<Instructions setRecipe={setRecipe} recipe={recipe} />
							</div>
							<div>
								<div>
									<Image recipe={recipe} />
									<RecipeDetails />
								</div>
							</div>
							<div className="text-center">
								<button type="submit">Submit</button>
							</div>
						</div>
					</form>
				</div>
			)}
		</AuthUserContext.Consumer>
	)
}
const condition = authUser => !!authUser
export default withAuthorization(condition)(AddRecipe)
