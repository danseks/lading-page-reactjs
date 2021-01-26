import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

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
		<Jumbotron className="jumbotron m-5" style={jumbotronStyle}>
			<h1 style={textStyle}>{props.titleJumbotron}</h1>
			<p style={textStyle}>{props.descriptionJumbotron}</p>
			<p>
				<Button style={buttonStyle}>
					{props.buttonLabelJumbotron}
				</Button>
			</p>
		</Jumbotron>
	);
};

MyJumbotron.propTypes = {
	titleJumbotron: PropTypes.string,
	descriptionJumbotron: PropTypes.string,
	buttonLabelJumbotron: PropTypes.string
};
