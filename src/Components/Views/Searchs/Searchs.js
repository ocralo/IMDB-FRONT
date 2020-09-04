import React, { useEffect, useState } from "react";

//importacion de librerias externas
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";

//importacion de actions de redux

//importacion de state de redux

//importacion de reducer de redux
import {
	getSeriesPending,
	getSeriesSearch,
	getSeriesErrorSearch,
} from "../../../Redux/Reducer/index";

//importacion de componentes
import CardSerie from "../../Components/CardSerie/CardSerie";
import { fetchSearchSeries } from "../../../Requests/Requests";

/**
 * Vista de una busqueda de serie en la aplicacion
 */
const Searchs = ({ fetchSeries, series, error }) => {
	let { query } = useParams();
	const [pageCount, setPageCount] = useState(1);

	useEffect(() => {
		let auxCount = 1;

		fetchSeries(
			"https://api.themoviedb.org/3/search/tv",
			auxCount,
			query
		);
		auxCount++;
		setPageCount(auxCount);
	}, [query]);

	/**
	 * Funcion que se encarga de de hacer la peticion,
	 * para traer los nuevos datos de la paginacion,
	 * ademas de sumar al contador pageCount
	 */
	const getSerieFromPage = () => {
		let auxCount = pageCount;
		fetchSeries(
			"https://api.themoviedb.org/3/search/tv",
			pageCount,
			query
		);
		auxCount++;
		setPageCount(auxCount);
	};
	console.log(series);
	return !error && series.length > 0 ? (
		<Container className="mt-4">
			<Row>
				<Col>
					<h1>Series relacionadas a: "{query}"</h1>
				</Col>
			</Row>
			<Row>
				<InfiniteScroll
					dataLength={series.length} //tamaño del arreglo a utilizar
					next={getSerieFromPage}
					hasMore={true}
					loader={<h4>Loading...</h4>}
					className="row">
					{series.map((value, i) => {
						//console.log("", value);
						return (
							<Col
								xs={12}
								md={6}
								sm={6}
								lg={4}
								key={i + "-" + value.id}>
								<CardSerie
									title={value.name}
									imageURL={value.backdrop_path}
									vote_average={value.vote_average}
									idSerie={value.id}
								/>
							</Col>
						);
					})}
				</InfiniteScroll>
			</Row>
		</Container>
	) : (
		<Container className="mt-4">
			<Row>
				<Col className="text-center">
					<h1>
						No se encontro coincidencia en la busqueda
					</h1>
					<img
						src={`${process.env.PUBLIC_URL}/img/question.svg`}
						width="300"
						alt="not found"
						className="mt-4"
					/>
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
	error: getSeriesErrorSearch(state),
	series: getSeriesSearch(state),
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
			fetchSeries: fetchSearchSeries,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Searchs);
