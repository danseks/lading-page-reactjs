import React from "react";

//include images into your bundle
import { MyJumbotron } from "./myjumbotron.jsx";

//create your first component
export function Home() {
	return (
		<MyJumbotron
			title="Most expected series in 2021"
			description="React is the most popular rendering library in the world"
			buttonLabel="Find out all of them!"
		/>
	);
}
