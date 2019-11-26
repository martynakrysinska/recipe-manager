import React from "react"

const ListHeader = props => {
	const { setUnit } = props

	return (
		<div>
			<div xs={5}>
				<h5>Ingredient</h5>
			</div>
			<div xs={4}>
				<h5>Amount</h5>
			</div>
			<div xs={3}>
				<input
					onChange={e => setUnit(e.target.value.toLowerCase())}
					type="select"
				>
					<option onClick={() => setUnit("metric")}>Metric</option>
					<option onClick={() => setUnit("us")}>US</option>
				</input>
			</div>
		</div>
	)
}

export default ListHeader
