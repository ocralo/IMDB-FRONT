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
	getSeriesEspecificSeasons,
	getSeriesErrorSeason,
} from "../../../Redux/Reducer/index";

//importacion de componentes
import {
	fetchEspecificSeries,
	fetchSeasonsSeries,
} from "../../../Requests/Requests";

const Series = ({
	fetchSeries,
	fetchSeasons,
	serie,
	serieSeason,
	errorSeason,
}) => {
	let { id } = useParams();

	useEffect(() => {
		fetchSeries("https://api.themoviedb.org/3/tv/", id);
		fetchSeasons("https://api.themoviedb.org/3/tv/", id, 0);
	}, [fetchSeasons, fetchSeries, id]);

	useEffect(() => {
		fetchSeasons("https://api.themoviedb.org/3/tv/", id, 1);
	}, [errorSeason, fetchSeasons, id]);

	const handleClickSeason = (tv_id, season_number) => {
		fetchSeasons(
			"https://api.themoviedb.org/3/tv/",
			tv_id,
			season_number
		);
	};

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
								defaultActiveKey="1"
								onSelect={(i) => {
									handleClickSeason(
										id,
										i
										//season?.season_number
									);
								}}>
								{Array.isArray(serie?.seasons)
									? serie?.seasons.map((season) => {
											return (
												<Nav.Item
													key={season?.id}>
													<Nav.Link
														eventKey={`${season?.season_number}`}>
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
								{Array.isArray(
									serieSeason.episodes
								) ? (
									serieSeason.episodes.map(
										(value) => {
											return (
												<ListGroup.Item
													key={value.id}
													className="border-top-0 rounded-0 rounded-bottom d-flex justify-content-between">
													<span>
														{value.name}
													</span>
													<span>
														Episodio{" "}
														{
															value.episode_number
														}
													</span>
												</ListGroup.Item>
											);
										}
									)
								) : (
									<ListGroup.Item className="border-top-0 rounded-0 rounded-bottom">
										{" "}
									</ListGroup.Item>
								)}
							</ListGroup>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

/**
 * trae los estados de la storage
 * @param {*} state
 */
const mapStateToProps = (state) => ({
	error: getSeriesError(state),
	serie: getSeriesEspecific(state),
	serieSeason: getSeriesEspecificSeasons(state),
	pending: getSeriesPending(state),
	errorSeason: getSeriesErrorSeason(state),
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
			fetchSeasons: fetchSeasonsSeries,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Series);
