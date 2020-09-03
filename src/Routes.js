import React from "react";

//importacion de librerias externas
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

//importacion de componenetes
import Home from "./Components/Views/Home/Home";
import Search from "./Components/Views/Searchs/Searchs";
import Series from "./Components/Views/Series/Series";
import NavBar from "./Components/Components/NavBar/NavBar";

/**
 * Componenete que maneja las rutas de la aplicacion
 */
export default function Routes() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/Series/:id">
					<Series />
				</Route>
				<Route path="/search/:query">
					<Search />
				</Route>
			</Switch>
		</Router>
	);
}
