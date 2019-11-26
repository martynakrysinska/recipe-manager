import React from "react"
import { Label, Input, Button } from "reactstrap"
const AddIngredient = props => {
	const { setIngredient, ingredient, handleAddIngredient } = props
	return (
		<div>
			<Label for="recipe-ingredient">Ingredients:</Label>
			<Input
				id="recipe-ingredient"
				type="text"
				onChange={e => setIngredient(e.target.value)}
				value={ingredient}
			/>

			<Button onClick={handleAddIngredient}>+</Button>
		</div>
	)
}

export default AddIngredient
