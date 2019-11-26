import React from "react"

const ListItem = props => {
	let { ingredient, unit, deleteItem } = props

	return (
		<div>
			<div xs={5}>
				<button onClick={e => deleteItem(e, ingredient.id)}>-</button>
				<input
					onChange={e => console.log(e)}
					// className="ingredient-name-input"
					defaultValue={ingredient.name}
				></input>
			</div>
			<div xs={4}>
				<input
					onChange={e => console.log(e)}
					className="ingredient-amount-input"
					value={ingredient.measures[unit].amount}
					type="number"
				></input>
			</div>
			<div xs={3}>
				<input
					onChange={e => console.log(e)}
					className="ingredient-unit-input"
					value={ingredient.measures[unit].unitShort}
				></input>
			</div>
		</div>
	)
}

export default ListItem
