import React from "react";
import PropTypes from "prop-types";

const footerStyle = {
	background: "#006E90",
	height: "5rem",
	display: "flex",
	justifyContent: "center",
	alignContent: "center",
	marginTop: "2rem"
};
const textStyle = {
	color: "white",
	alignSelf: "center",
	marginTop: "1rem"
};

const heartStyle = {
	color: "white",
	alignSelf: "center",
	marginLeft: "1rem"
};

export const Footer = props => {
	return (
		<div style={footerStyle}>
			<p style={textStyle}>{props.text}</p>
			<i style={heartStyle} className="far fa-heart" />
		</div>
	);
};

Footer.propTypes = {
	text: PropTypes.string
};
