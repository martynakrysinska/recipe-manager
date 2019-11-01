import React, { useState } from "react"
import { Button, Form, Input } from "reactstrap"

const AddRecipe = props => {
	const [ingredients, addIngredient] = useState([])
	const [ingredient, setIngredient] = useState("")
	const [step, setStep] = useState("")
	const [steps, addStep] = useState([])
	const handleAddIngredient = e => {
		addIngredient(ingredients.concat(ingredient))
		setIngredient("")
	}

	const handleAddStep = e => {
		addStep(steps.concat(step))
		setStep("")
	}

	const handleKeyPress = target => {
		if (target.charCode === 13) {
			addIngredient(ingredients.concat(ingredient))
			setIngredient("")
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
	}
	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<p>Add ingredients</p>
				<Input
					type="text"
					onKeyPress={handleKeyPress}
					onChange={e => setIngredient(e.target.value)}
					value={ingredient}
				></Input>
				<Button onClick={handleAddIngredient}>+</Button>
				{ingredients.map((ingredient, i) => {
					return <li key={i}>{ingredient}</li>
				})}
				<p>Add steps</p>
				<Input
					type="text"
					onChange={e => setStep(e.target.value)}
					value={step}
				></Input>
				<Button onClick={handleAddStep}>+</Button>
				{steps.map((step, i) => {
					return <li key={i}>{step}</li>
				})}
				<p>Add an image</p>
				<Input type="file"></Input>
				<p>
					<Button>Submit</Button>
				</p>
			</Form>
		</div>
	)
}

export default AddRecipe
