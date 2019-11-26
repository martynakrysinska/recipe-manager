import React from "react"
const AddIngredient = props => {
	const { setIngredient, ingredient, handleAddIngredient } = props
	return (
		<div>
			<label htmlFor="recipe-ingredient">Ingredients:</label>
			<input
				id="recipe-ingredient"
				type="text"
				onChange={e => setIngredient(e.target.value)}
				value={ingredient}
			/>

			<button onClick={handleAddIngredient}>+</button>
		</div>
	)
}

export default AddIngredient
