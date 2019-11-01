import React from "react"
import { Container, Row, Col, Input } from "reactstrap"
const ListHeader = props => {
	const { setUnit } = props

	return (
		<Container className="m-1">
			<Row>
				<Col xs={5}>
					<h5>Ingredient</h5>
				</Col>
				<Col xs={4}>
					<h5>Amount</h5>
				</Col>
				<Col xs={3}>
					<Input
						onChange={e => setUnit(e.target.value.toLowerCase())}
						type="select"
					>
						<option onClick={() => setUnit("metric")}>Metric</option>
						<option onClick={() => setUnit("us")}>US</option>
					</Input>
				</Col>
			</Row>
		</Container>
	)
}

export default ListHeader
