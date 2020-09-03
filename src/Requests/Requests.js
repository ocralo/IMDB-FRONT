//importacion de librerias externas
import * as axios from "axios";

//importacion de acciones de redux
import {
	fetchSeriesPending,
	fetchSeriesSuccess,
	fetchSeriesError,
	fetchSeriesPagePending,
	fetchSeriesPageSuccess,
	fetchSeriesPageError,
	fetchSearchSeriesPending,
	fetchSearchSeriesSuccess,
	fetchSearchSeriesError,
	fetchSearchSeriesPagePending,
	fetchSearchSeriesPageSuccess,
	fetchSearchSeriesPageError,
	fetchEspecificSeriesPending,
	fetchEspecificSeriesSuccess,
	fetchEspecificSeriesError,
	fetchEspecificSeriesSeasonsPending,
	fetchEspecificSeriesSeasonsSuccess,
	fetchEspecificSeriesSeasonsError,
} from "../Redux/Actions/index";

/**
 * Funcion que realiza peticion get a la api de TMDB con la key generada
 * que retorna las series mas populares
 * @param {string} url
 * @param {int} page
 */
export const fetchSeries = (url, page = 1) => {
	return (dispatch) => {
		if (page !== 1) {
			dispatch(fetchSeriesPagePending());
			axios
				.get(
					`${url}?api_key=b2907782d07859a652052d3bae537475&page=${page}`
				)
				.then((response) => {
					// handle success
					const dataResult = response.data.results;
					dispatch(fetchSeriesPageSuccess(dataResult));
					return dataResult;
				})
				.catch((error) => {
					// handle error
					console.log(error);
					dispatch(fetchSeriesPageError(error));
				});
		} else {
			dispatch(fetchSeriesPending());
			axios
				.get(
					`${url}?api_key=b2907782d07859a652052d3bae537475&page=${page}`
				)
				.then((response) => {
					// handle success
					const dataResult = response.data.results;
					dispatch(fetchSeriesSuccess(dataResult));
					return dataResult;
				})
				.catch((error) => {
					// handle error
					console.log(error);
					dispatch(fetchSeriesError(error));
				});
		}
	};
};

/**
 * Funcion que realiza peticion get a la api de TMDB con la key generada
 * que retorna la busqueda de una palabra, con relacion a
 * un nombre de serie
 * @param {string} url
 * @param {int} page
 * @param {string} query
 */
export const fetchSearchSeries = (url, page = 1, query = "a") => {
	return (dispatch) => {
		if (page !== 1) {
			dispatch(fetchSearchSeriesPagePending());
			axios
				.get(
					`${url}?api_key=b2907782d07859a652052d3bae537475&page=${page}&query=${query}`
				)
				.then((response) => {
					// handle success
					const dataResult = response.data.results;
					dispatch(
						fetchSearchSeriesPageSuccess(dataResult)
					);
					return dataResult;
				})
				.catch((error) => {
					// handle error
					console.log(error);
					dispatch(fetchSearchSeriesPageError(error));
				});
		} else {
			dispatch(fetchSearchSeriesPending());
			axios
				.get(
					`${url}?api_key=b2907782d07859a652052d3bae537475&page=${page}&query=${query}`
				)
				.then((response) => {
					// handle success
					const dataResult = response.data.results;
					dispatch(fetchSearchSeriesSuccess(dataResult));
					return dataResult;
				})
				.catch((error) => {
					// handle error
					console.log(error);
					dispatch(fetchSearchSeriesError(error));
				});
		}
	};
};

/**
 * Funcion que realiza peticion get a la api de TMDB con la key generada
 * que retorna la busqueda de una palabra, con relacion a
 * un nombre de serie
 * @param {string} url
 * @param {int} id
 */
export const fetchEspecificSeries = (url, id = 63174) => {
	return (dispatch) => {
		dispatch(fetchEspecificSeriesPending());
		axios
			.get(
				`${url}${id}?api_key=b2907782d07859a652052d3bae537475`
			)
			.then((response) => {
				// handle success
				const dataResult = response.data;
				dispatch(fetchEspecificSeriesSuccess(dataResult));
				return dataResult;
			})
			.catch((error) => {
				// handle error
				console.log(error);
				dispatch(fetchEspecificSeriesError(error));
			});
	};
};

/**
 * Funcion que realiza peticion get a la api de TMDB con la key generada
 * que retorna la busqueda de las emporadas y el rating
 * @param {string} url
 * @param {int} episode_number
 * @param {int} tv_id
 */
export const fetchSeasonsSeries = (
	url,
	tv_id = 1,
	season_number = 1
) => {
	return (dispatch) => {
		dispatch(fetchEspecificSeriesSeasonsPending());
		axios
			.get(
				`${url}${tv_id}/season/${season_number}?api_key=b2907782d07859a652052d3bae537475`
			)
			.then((response) => {
				// handle success
				const dataResult = response.data;
				dispatch(
					fetchEspecificSeriesSeasonsSuccess(dataResult)
				);
				return dataResult;
			})
			.catch((error) => {
				// handle error
				console.log(error);
				dispatch(fetchEspecificSeriesSeasonsError(error));
			});
	};
};
