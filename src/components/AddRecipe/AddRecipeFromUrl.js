import React, { useState } from "react"
import ListItem from "./ListItem"
import ListHeader from "./ListHeader"
import AddItem from "./AddItem"
import UrlBar from "./UrlBar"
const shortid = require("shortid")
const json = require("./test-data/tom-kha.json")
// subcomponents
// ingredient list item
// image uploader

const AddFromUrl = props => {
	let { extendedIngredients } = json
	const [unit, setUnit] = useState("metric")
	const [ingredients, setIngredient] = useState(extendedIngredients)

	const deleteItem = (e, id) => {
		setIngredient(ingredients.filter(item => item.id !== id))
	}
	const addItem = e => {
		const newIngredient = {
			id: shortid(),
			name: "",
			measures: {
				metric: { amount: 0, unitShort: "", unitLong: "" },
				us: { amount: 0, unitShort: "", unitLong: "" }
			}
		}
		setIngredient(ingredients.concat(newIngredient))
	}

	return (
		<section div="url-recipe-editor">
			<div>
				{/* <UrlBar></UrlBar> */}

				<div xs={4}>
					<input defaultValue={json.title}></input>
					<p>{json.diets.map(diet => `${diet} `)}</p>
					<img src={json.image} width="100%"></img>
					<h3>Instructions</h3>
					<input
						onChange={e => console.log(e.target.value)}
						type="textarea"
						style={{ height: "400px" }}
						defaultValue={json.instructions}
					></input>
				</div>
				<div xs={7}>
					<ListHeader setUnit={setUnit}></ListHeader>
					<ul>
						{ingredients.map((ingredient, i) => {
							return (
								<ListItem
									deleteItem={deleteItem}
									unit={unit}
									key={ingredient.id}
									ingredient={ingredient}
								/>
							)
						})}
						<AddItem addItem={addItem} />
					</ul>
				</div>
			</div>
		</section>
	)
}

export default AddFromUrl
