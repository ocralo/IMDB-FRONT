import { createStore, combineReducers } from "redux";
import Reducer from "../Reducer/index";

const reducers = combineReducers({
	Reducer,
});

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
