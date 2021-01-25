import React from "react";
import PropTypes from "prop-types";
import { Jumbotron, Button } from "react-bootstrap";

const jumbotronStyle = {
	background: "#ADCAD6"
};
const textStyle = {
	color: "white"
};
const buttonStyle = {
	background: "#F18F01",
	border: "1px solid #F18F01"
};

export const MyJumbotron = props => {
	return (
		<Jumbotron class="jumbotron m-5" style={jumbotronStyle}>
			<h1 style={textStyle}>{props.title}</h1>
			<p style={textStyle}>{props.description}</p>
			<p>
				<Button style={buttonStyle}>{props.buttonLabel}</Button>
			</p>
		</Jumbotron>
	);
};

MyJumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string
};
