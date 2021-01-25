import React from "react";
import PropTypes from "prop-types";
import { CardDeck, Card, Button, Col } from "react-bootstrap";

export const Cards = props => {
	return (
		<Card>
			<Card.Img variant="top" src={props.image} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.description}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button variant="primary" href={props.url}>
					Go to view the Serie
				</Button>{" "}
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
