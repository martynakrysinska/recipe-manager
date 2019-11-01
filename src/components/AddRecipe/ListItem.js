import React from "react"
import {
	Container,
	Row,
	Col,
	Input,
	InputGroup,
	InputGroupAddon
} from "reactstrap"
const ListItem = props => {
	let { ingredient, unit, deleteItem } = props

	return (
		<Container className="m-1">
			<Row>
				<Col xs={5}>
					<InputGroup>
						<InputGroupAddon
							onClick={e => deleteItem(e, ingredient.id)}
							type="button"
							addonType="prepend"
						>
							-
						</InputGroupAddon>
						<Input
							onChange={e => console.log(e)}
							className="ingredient-name-input"
							defaultValue={ingredient.name}
						></Input>
					</InputGroup>
				</Col>
				<Col xs={4}>
					<Input
						onChange={e => console.log(e)}
						className="ingredient-amount-input"
						value={ingredient.measures[unit].amount}
						type="number"
					></Input>
				</Col>
				<Col xs={3}>
					<Input
						onChange={e => console.log(e)}
						className="ingredient-unit-input"
						value={ingredient.measures[unit].unitShort}
					></Input>
				</Col>
			</Row>
		</Container>
	)
}

export default ListItem
