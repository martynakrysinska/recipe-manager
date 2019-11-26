import React from "react"

const Image = props => {
	const { recipe } = props
	return (
		<div>
			<img src={recipe.image}></img>
		</div>
	)
}

export default Image
