import React, { Fragment } from "react";

//include images into your bundle
import { Navbar } from "./navbar.jsx";
import { MyJumbotron } from "./myjumbotron.jsx";
import { Cards } from "./card.jsx";
import { Card, Container, Row, CardDeck, Col } from "react-bootstrap";

const netflixSeries = [
	{
		Image:
			"https://static01.nyt.com/images/2020/12/13/arts/13best-tv-shows-2020-01/merlin_171692925_299dde23-5ce9-4c3d-abfc-95a74c8b3d18-jumbo.jpg?quality=90&auto=webp",
		Title: "Better Call Saul",
		Sinopsis:
			"The prequel to “Breaking Bad” is television’s most finely rendered slow-motion car crash.",
		URL: "https://www.netflix.com/es-en/title/80021955"
	},
	{
		Image:
			"https://static01.nyt.com/images/2020/12/13/arts/13best-tv-shows-2020-02/merlin_177902889_22e2b164-fa8d-4113-9ffe-4d96fd502b61-jumbo.jpg?quality=90&auto=webp",
		Title: "Better Things",
		Sinopsis:
			"I feel like I don’t watch “Better Things” so much as live in it — which is less to say that it reminds me of my life than that it replicates the experience of inhabiting someone else’s.",
		URL:
			"https://www.hulu.com/series/better-things-70d330d1-cb23-403f-b3b6-f8f392c4ce5e"
	},
	{
		Image:
			"https://erizo.org/wp-content/uploads/2020/08/1593075028530-i-may-destroy-you-s1-cc1-1-.jpg",
		Title: "I May Destroy You",
		Sinopsis:
			"Michaela Coel’s revelatory series was to 2020 what Season 2 of “Fleabag” was to 2019: a seamlessly conceived masterwork that is impossible to imagine being written or performed by anyone else.",
		URL:
			"https://play.hbomax.com/series/urn:hbo:series:GXqHggg6FbLeIkwEAAAAv?camp=googleHBOMAX&action=play"
	},
	{
		Image:
			"https://static01.nyt.com/images/2020/12/13/arts/13best-tv-shows-2020-04/merlin_172004493_9a755986-f3b3-45d4-9a90-a85e8940c15f-jumbo.jpg?quality=90&auto=webp",
		Title: "Mrs. America",
		Sinopsis:
			"Dahvi Waller’s double-barreled story of the fights for and against the Equal Rights Amendment went a half-century into the past and found today.",
		URL: "https://www.hulu.com/series/96f330fe-878d-412e-949f-fd8b69b3adf2"
	}
];
//create your first component
const addCardsInfo = () => {
	return netflixSeries.map((item, index) => (
		<Col className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={index}>
			<Cards
				image={item.Image}
				title={item.Title}
				description={item.Sinopsis}
				url={item.URL}
			/>
		</Col>
	));
};

export const Home = () => {
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
			<Container className="mt-5">
				<Row>
					<CardDeck>{addCardsInfo()}</CardDeck>
				</Row>
			</Container>
		</Fragment>
	);
};
