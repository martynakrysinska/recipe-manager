import React from "react"

const IngredientsList = props => {
	const { ingredients } = props

	return (
		<ul>
			{ingredients.map((ingredient, i) => {
				return <li key={i}>{ingredient}</li>
			})}
		</ul>
	)
}

export default IngredientsList
