import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const cardButtonStyle = {
	background: "#F18F01",
	border: "1px solid #F18F01"
};

export const Cards = props => {
	return (
		<Card>
			<Card.Img variant="top" src={props.image} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.description}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button style={cardButtonStyle} href={props.url}>
					Go to view the Serie
				</Button>
			</Card.Footer>
		</Card>
	);
};

Cards.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	url: PropTypes.string
};
