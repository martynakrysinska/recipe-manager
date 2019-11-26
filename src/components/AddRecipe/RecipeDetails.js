import React from "react"
import { Container, Row, Col, Input, Label } from "reactstrap"

const RecipeDetails = props => {
	return (
		<Container>
			<Row>
				<Col xs={4}>
					<Label for="recipe-prep-time">prep-time...</Label>
					<Input type="number" id="recipe-prep-time" />
				</Col>
				<Col xs={4}>
					<Label for="recipe-cook-time">cook-time...</Label>
					<Input type="number" id="recipe-cook-time" />
				</Col>
				<Col xs={4}>
					<Label for="recipe-servings">servings...</Label>
					<Input type="number" id="recipe-servings" />
				</Col>

				<Col xs={6}>
					<Label for="recipe-cuisines">Cuisines...</Label>
				</Col>
				<Col xs={6}>
					<Label for="recipe-tags">tags...</Label>
				</Col>
				<Col xs={6}>
					<Input id="recipe-cuisines" />
				</Col>
				<Col xs={6}>
					<Input id="recipe-tags" />
				</Col>
			</Row>
		</Container>
	)
}

export default RecipeDetails
