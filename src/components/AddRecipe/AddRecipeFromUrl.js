import React, { useState } from "react"
import { Input, Row, Col } from "reactstrap"
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
	console.log(json)
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
			<Row style={{ width: "80%", margin: "0 auto", padding: "1rem 0 0 0 " }}>
				{/* <UrlBar></UrlBar> */}

				<Col xs={4}>
					<Input defaultValue={json.title}></Input>
					<p>{json.diets.map(diet => `${diet} `)}</p>
					<img src={json.image} width="100%"></img>
					<h3>Instructions</h3>
					<Input
						onChange={e => console.log(e.target.value)}
						type="textarea"
						style={{ height: "400px" }}
						defaultValue={json.instructions}
					></Input>
				</Col>
				<Col xs={7}>
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
				</Col>
			</Row>
		</section>
	)
}

export default AddFromUrl
