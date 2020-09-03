import React, { useState, useRef } from "react";

//importacion de librerias externas
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	Popover,
	Overlay,
} from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";

//importacion de componenetes

/**
 * componente Navbar, el cual sera el menu superior de la aplicacion
 */
export default function NavBar() {
	const [showOverlay, setShowOverlay] = useState(false);
	const [targetOverlay, setTargetOverlay] = useState(null);
	const [search, setSearch] = useState("");

	const ref = useRef(null);

	let location = useLocation();
	let history = useHistory();

	console.log(location.pathname);

	const handleSubmit = (event) => {
		event.preventDefault();
		history.push(`/search/${search}`);
	};
	const handleChange = (event) => {
		const target = event.target;
		const value = target.value;
		setSearch(value);
	};

	/**
	 * funcion que activa o desactiva el overlay del buscador
	 * @param {*} event
	 */
	const handleClick = (event) => {
		setShowOverlay(!showOverlay);
		setTargetOverlay(event.target);
	};
	return (
		<Navbar bg="dark" expand="lg" variant="dark" sticky={"top"}>
			<div className="container">
				<Navbar.Brand href="/">NVC Movie</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						{location.pathname.indexOf("Series") >= 0 ? (
							<Nav.Link
								onClick={() => history.goBack()}>
								Regresar
							</Nav.Link>
						) : (
							""
						)}
						{/* <Nav.Link href="#home">Inicio</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link> */}
					</Nav>
					<div ref={ref}>
						<Button
							variant="outline-success"
							onClick={handleClick}
							className="btn-search">
							<img
								src={`${process.env.PUBLIC_URL}/img/search.svg`}
								alt=""
								width="25"
							/>
						</Button>

						<Overlay
							show={showOverlay}
							target={targetOverlay}
							placement="bottom"
							container={ref.current}
							containerPadding={20}>
							<Popover id="popover-contained">
								<Popover.Title as="h3">
									¿Que serie Buscas?
								</Popover.Title>
								<Popover.Content>
									<Form onSubmit={handleSubmit}>
										<FormControl
											type="text"
											placeholder="Buscar..."
											className="mr-sm-2 mb-2"
											onChange={handleChange}
											name="search"
										/>
										<Button
											variant="success"
											type="submit"
											block>
											Buscar
										</Button>{" "}
									</Form>
								</Popover.Content>
							</Popover>
						</Overlay>
					</div>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}
