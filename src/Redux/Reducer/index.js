import {
	FETCH_SERIES_PENDING,
	FETCH_SERIES_SUCCESS,
	FETCH_SERIES_ERROR,
	FETCH_SERIES_PAGE_PENDING,
	FETCH_SERIES_PAGE_SUCCESS,
	FETCH_SERIES_PAGE_ERROR,
	FETCH_SERIES_SEARCH_PENDING,
	FETCH_SERIES_SEARCH_SUCCESS,
	FETCH_SERIES_SEARCH_ERROR,
	FETCH_SERIES_SEARCH_PAGE_PENDING,
	FETCH_SERIES_SEARCH_PAGE_SUCCESS,
	FETCH_SERIES_SEARCH_PAGE_ERROR,
	FETCH_SERIES_ESPECIFIC_PENDING,
	FETCH_SERIES_ESPECIFIC_SUCCESS,
	FETCH_SERIES_ESPECIFIC_ERROR,
	FETCH_SERIES_ESPECIFIC_SEASONS_PENDING,
	FETCH_SERIES_ESPECIFIC_SEASONS_SUCCESS,
	FETCH_SERIES_ESPECIFIC_SEASONS_ERROR,
} from "../Actions/index";

const initialState = {
	pending: false,
	series: [],
	seriesSearch: [],
	seriesEspecific: {},
	seriesEspecificSeason: {},
	error: null,
	errorSeason: null,
	errorSearch: null,
};

/**
 * Manejador de acciones
 * @param {JSON} state
 * @param {*} action
 */
export default function productsReducer(
	state = initialState,
	action
) {
	switch (action.type) {
		case FETCH_SERIES_PENDING:
			return {
				...state,
				pending: true,
			};
		case FETCH_SERIES_SUCCESS:
			return {
				...state,
				pending: false,
				series: action.series,
			};
		case FETCH_SERIES_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		case FETCH_SERIES_PAGE_PENDING:
			return {
				...state,
				pending: true,
			};
		case FETCH_SERIES_PAGE_SUCCESS:
			const actionSerie = action.series;
			return {
				...state,
				pending: false,
				series: state.series.concat(actionSerie),
			};
		case FETCH_SERIES_PAGE_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
				series: state.series,
			};
		case FETCH_SERIES_SEARCH_PENDING:
			return {
				...state,
				pending: true,
				seriesSearch: state.seriesSearch,
			};
		case FETCH_SERIES_SEARCH_SUCCESS:
			return {
				...state,
				pending: false,
				seriesSearch: action.seriesSearch,
			};
		case FETCH_SERIES_SEARCH_PAGE_ERROR:
			return {
				...state,
				pending: false,
				errorSearch: action.error,
				seriesSearch: state.seriesSearch,
			};
		case FETCH_SERIES_SEARCH_PAGE_PENDING:
			return {
				...state,
				pending: true,
				seriesSearch: state.seriesSearch,
			};
		case FETCH_SERIES_SEARCH_PAGE_SUCCESS:
			const actionSerieSearch3 = action.seriesSearch;
			return {
				...state,
				pending: false,
				seriesSearch: state.seriesSearch.concat(
					actionSerieSearch3
				),
			};
		case FETCH_SERIES_SEARCH_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
				seriesSearch: state.seriesSearch,
			};
		case FETCH_SERIES_ESPECIFIC_PENDING:
			return {
				...state,
				pending: true,
				seriesEspecific: state.seriesEspecific,
			};
		case FETCH_SERIES_ESPECIFIC_SUCCESS:
			return {
				...state,
				pending: false,
				seriesEspecific: action.seriesEspecific,
			};
		case FETCH_SERIES_ESPECIFIC_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
				seriesEspecific: state.seriesEspecific,
			};
		case FETCH_SERIES_ESPECIFIC_SEASONS_PENDING:
			return {
				...state,
				pending: true,
				seriesEspecificSeason: state.seriesEspecificSeason,
			};
		case FETCH_SERIES_ESPECIFIC_SEASONS_SUCCESS:
			return {
				...state,
				pending: false,
				seriesEspecificSeason: action.seriesEspecificSeason,
			};
		case FETCH_SERIES_ESPECIFIC_SEASONS_ERROR:
			return {
				...state,
				pending: false,
				errorSeason: action.error,
				seriesEspecificSeason: state.seriesEspecificSeason,
			};
		default:
			return state;
	}
}

export const getSeries = (state) => state.series;
export const getSeriesSearch = (state) => state.seriesSearch;
export const getSeriesEspecific = (state) => state.seriesEspecific;
export const getSeriesEspecificSeasons = (state) =>
	state.seriesEspecificSeason;
export const getSeriesPending = (state) => state.pending;
export const getSeriesError = (state) => state.error;
export const getSeriesErrorSearch = (state) => state.errorSearch;
export const getSeriesErrorSeason = (state) => state.errorSeason;
