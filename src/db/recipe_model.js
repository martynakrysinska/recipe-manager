const shortid = require("shortid")

const recipe = {
	id: shortid(),
	name: "string",
	portions: "number",
	image: "string",
	cookingTime: "number in minutes",
	addedAt: "date",
	ingredients: [],
	src: "string (url)",
	tags: [],
	types: [],
	servings: "number",
	cuisines: []
}

const ingredient = {
	id: shortid(),
	name: "string",
	measures: {
		metric: {
			amount: "number",
			unit: "string"
		},
		us: {
			amount: "number",
			unit: "string"
		}
	}
}
