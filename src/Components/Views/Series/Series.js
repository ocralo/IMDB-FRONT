import React, { useEffect } from "react";

//importacion de librerias externas
import {
	Container,
	Row,
	Col,
	Card,
	Nav,
	ListGroup,
} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useParams } from "react-router-dom";

//importacion de reducer de redux
import {
	getSeriesError,
	getSeriesPending,
	getSeriesEspecific,
} from "../../../Redux/Reducer/index";

//importacion de componentes
import { fetchEspecificSeries } from "../../../Requests/Requests";

function Series({ fetchSeries, serie }) {
	let { query } = useParams();

	useEffect(() => {
		fetchSeries("https://api.themoviedb.org/3/tv/", query);
	}, [fetchSeries, query]);

	return (
		<Container className="mt-5 mb-5">
			<Row>
				<Col>
					<Card className="shadow">
						<Card.Img
							variant="top"
							src={
								serie?.poster_path
									? `https://image.tmdb.org/t/p/w500${serie.poster_path}`
									: "https://image.tmdb.org/t/p/w500/k1lICEYRpJeFRIRfjxYwmpO9LTu.jpg"
							}
							className="poster-img"
						/>
						<Card.Body>
							<Card.Title className="mb-0">
								{serie?.name}
							</Card.Title>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Row>
						<Col>
							<h3>Temporadas</h3>
						</Col>
					</Row>
					<Row>
						<Col>
							<Nav
								variant="tabs"
								defaultActiveKey="Link-0">
								{Array.isArray(serie?.seasons)
									? serie?.seasons.map((season) => {
											return (
												<Nav.Item
													key={season?.id}>
													<Nav.Link
														eventKey={`Link-${season?.season_number}`}>
														{
															season?.season_number
														}
													</Nav.Link>
												</Nav.Item>
											);
									  })
									: ""}
							</Nav>
						</Col>
					</Row>
					<Row>
						<Col>
							<ListGroup>
								<ListGroup.Item className="border-top-0 rounded-0 rounded-bottom">
									Cras justo odio
								</ListGroup.Item>
								<ListGroup.Item>
									Dapibus ac facilisis in
								</ListGroup.Item>
								<ListGroup.Item>
									Morbi leo risus
								</ListGroup.Item>
								<ListGroup.Item>
									Porta ac consectetur ac
								</ListGroup.Item>
								<ListGroup.Item>
									Vestibulum at eros
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

/**
 * trae los estados de la storage
 * @param {*} state
 */
const mapStateToProps = (state) => ({
	error: getSeriesError(state),
	serie: getSeriesEspecific(state),
	pending: getSeriesPending(state),
});

/**
 * metodo para emitir acciones, para modificar el estado
 * de la storage
 * @param {*} dispatch
 */
const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			fetchSeries: fetchEspecificSeries,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Series);
