import React from "react"
import { withAuthorization } from "../Session"
const HomePage = () => {
	return <div>Home Page</div>
}

const condition = authUser => !!authUser
export default withAuthorization(condition)(HomePage)
