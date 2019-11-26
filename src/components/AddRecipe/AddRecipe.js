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
import { Button, Form, Container, Row, Col } from "reactstrap"

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
				<Container>
					<Form onSubmit={handleSubmit}>
						<Row>
							<Col xs={7}>
								<RecipeTitle recipe={recipe} setRecipe={setRecipe} />
								<AddIngredient
									setIngredient={setIngredient}
									ingredient={ingredient}
									handleAddIngredient={handleAddIngredient}
								/>

								<IngredientsList ingredients={recipe.ingredients} />

								<Instructions setRecipe={setRecipe} recipe={recipe} />
							</Col>
							<Col xs={4}>
								<div>
									<Image recipe={recipe} />
									<RecipeDetails />
								</div>
							</Col>
							<Col xs={12} className="text-center">
								<Button type="submit">Submit</Button>
							</Col>
						</Row>
					</Form>
				</Container>
			)}
		</AuthUserContext.Consumer>
	)
}
const condition = authUser => !!authUser
export default withAuthorization(condition)(AddRecipe)
