import React, { Fragment } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.jsx";

//create your first component
export function Home() {
	return (
		<Fragment>
			<Navbar
				title="Serie IN seriE"
				label1="HOME"
				label2="ABOUT"
				label3="BLOG"
				label4="SEARCH"
			/>
		</Fragment>
	);
}
