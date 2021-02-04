import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

import "../../styles/myjumbotron.scss";

export const MyJumbotron = props => {
	return (
		<Jumbotron className="jumbotron jumbotron-fluid jumbotron_container">
			<h1 className="jumbotron_text">{props.titleJumbotron}</h1>
			<p className="jumbotron_text">{props.descriptionJumbotron}</p>
			<p>
				<Button className="jumbotron_button">
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
