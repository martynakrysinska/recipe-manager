import React, { useState } from "react"
import { Button, Input, Col } from "reactstrap"

const UrlBar = props => {
	const [url, setUrl] = useState("Your url")
	// use flexbox?
	return (
		<Col xs={10}>
			<Input
				style={{ width: "70%" }}
				defaultValue={url}
				onChange={e => setUrl(e.target.value)}
			></Input>
			<Button>Submit</Button>
		</Col>
	)
}

export default UrlBar
