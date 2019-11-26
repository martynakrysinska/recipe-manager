import React, { useState } from "react"

const UrlBar = props => {
	const [url, setUrl] = useState("Your url")

	return (
		<div xs={10}>
			<input
				style={{ width: "70%" }}
				defaultValue={url}
				onChange={e => setUrl(e.target.value)}
			></input>
			<button type="submit">Submit</button>
		</div>
	)
}

export default UrlBar
