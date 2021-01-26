import React, { Fragment } from "react";

//include images into your bundle
import { Navbar } from "./navbar.jsx";
import { MyJumbotron } from "./myjumbotron.jsx";

//create your first component
export function Home() {
	return (
		<Fragment>
			<Navbar
				titleNavbar="Serie IN seriE"
				label1="HOME"
				label2="ABOUT"
				label3="BLOG"
				label4="SEARCH"
			/>

			<MyJumbotron
				titleJumbotron="Most expected series in 2021"
				descriptionJumbotron="The TV shows do not stop in 2021, this year comes loaded with news, but also with old acquaintances who return to continue where they left off. Platforms such as Netflix, HBO, Amazon Prime Video, Disney +, Apple TV +, Movistar +, Filmin or Starzplay will bring us from January those that will become the best series of 2021"
				buttonLabelJumbotron="Find out all of them!"
			/>
		</Fragment>
	);
}
