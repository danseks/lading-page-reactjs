import React from "react";
import PropTypes from "prop-types";

import "../../styles/navbar.scss";

export const Navbar = props => {
	return (
		<div className="row align-items-center navbar">
			<div className="col-3 d-flex justify-content-center align-items-center">
				<i class="fas fa-film fa-4x" />
				<h1>{props.title}</h1>
			</div>
			<button type="button" className="col-1 rounded">
				<label>{props.label1}</label>
			</button>
			<button type="button" className="col-1 rounded">
				<label>{props.label2}</label>
			</button>
			<button type="button" className="col-1 rounded">
				<label>{props.label3}</label>
			</button>
			<form className="col-5 d-flex justify-content-center">
				<input
					className="form-control col-6"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
				<button
					className="col-2 rounded searchButton"
					type="button"
					type="submit">
					<label>{props.label4}</label>
				</button>
			</form>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string,
	label1: PropTypes.string,
	label2: PropTypes.string,
	label3: PropTypes.string,
	label4: PropTypes.string
};
