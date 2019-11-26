import React from "react"

const AddItem = props => {
	const { addItem } = props

	return (
		<button className="mt-1" onClick={addItem}>
			Add ingredient
		</button>
	)
}

export default AddItem
