const initialState = { data: "" };

// action es el valor devuelto por el action
//action.payload será el valor que quiero añadir, borrar, etc
export default (state = initialState, action) => {
	if (action.type === "MODIFY") {
		return {
			...state, //Lo que devuelve un reducer es lo que se quedará en el state, por tanto, debe devolver todo lo que había antes (además de la información que cambia)
			data: action.payload,
		};
	}

	return state;
};

export const selectActiveWord = (state) =>
	state.palabraReducer.palabra;
