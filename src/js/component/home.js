import React from "react";

//include images into your bundle
import { MyJumbotron } from "./myjumbotron.jsx";

//create your first component
export function Home() {
	return (
		<MyJumbotron
			title="Most expected series in 2021"
			description="The TV shows do not stop in 2021, this year comes loaded with news, but also with old acquaintances who return to continue where they left off. Platforms such as Netflix, HBO, Amazon Prime Video, Disney +, Apple TV +, Movistar +, Filmin or Starzplay will bring us from January those that will become the best series of 2021"
			buttonLabel="Find out all of them!"
		/>
	);
}
