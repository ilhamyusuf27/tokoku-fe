import * as Type from "./type";

const initialState = {
	buy: [],
	total: 0,
};

const addTotal = (id, data, num) => {
	let find = data.findIndex((element) => element.id === id);
	data[find] = {
		...data[find],
		total: data[find].total + num,
		totalPrice: (data[find].total + num) * data[find].price,
	};
	return data;
};

const minTotal = (id, data, num) => {
	let find = data.findIndex((element) => element.id === id);
	data[find] = {
		...data[find],
		total: data[find].total - num,
		totalPrice: (data[find].total - num) * data[find].price,
	};
	return data;
};

const addChecked = (id, data, checked) => {
	let find = data.findIndex((element) => element.id === id);
	data[find] = {
		...data[find],
		isChecked: checked,
	};
	return data;
};

const reducer = (state = initialState, action) => {
	let { type, payload } = action;
	switch (type) {
		case Type.SET_PRODUCT:
			return { ...state, buy: [...state.buy, payload] };
		case Type.SET_PLUS:
			return {
				...state,
				buy: addTotal(payload.id, state.buy, payload.num),
			};
		case Type.SET_MIN:
			return { ...state, buy: minTotal(payload.id, state.buy, payload.num) };
		case Type.PRODUCT_DELETE:
			return { ...state, buy: state.buy.filter((item) => item.id !== payload.idProductDelete) };
		case Type.SET_CHECK:
			return { ...state, buy: addChecked(payload.id, state.buy, payload.isChecked) };
		case Type.CLEAR:
			return { ...state, buy: [] };
		default:
			return state;
	}
};

export default reducer;
export * from "./type";
