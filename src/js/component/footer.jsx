import React from "react";
import PropTypes from "prop-types";

import "../../styles/footer.scss";

export const Footer = props => {
	return (
		<div className="footer_container">
			<p className="footer_text">{props.text}</p>
			<i className="far fa-heart footer_icon" />
		</div>
	);
};

Footer.propTypes = {
	text: PropTypes.string
};
