import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Characters } from "./views/characters";
import { CharactersDetail } from "./views/charactersDetail";
import { Planet } from "./views/planet";
import { PlanetDetail } from "./views/planetDetail";
import { Vehicles } from "./views/vehicles";
import { VehiclesDetail } from "./views/vehiclesDetails";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/characters">
							<Characters />
						</Route>
						<Route exact path="/characters/:char_id/detail">
							<CharactersDetail />
						</Route>
						<Route exact path="/planet">
							<Planet />
						</Route>
						<Route exact path="/planet/:char_id/detail">
							<PlanetDetail />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
						<Route exact path="/vehicles/:char_id/detail">
							<VehiclesDetail />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
