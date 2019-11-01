import React from "react"
import { Button } from "reactstrap"

const AddItem = props => {
	const { addItem } = props

	return (
		<Button className="mt-1" onClick={addItem}>
			Add ingredient
		</Button>
	)
}

export default AddItem
