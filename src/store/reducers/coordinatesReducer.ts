import {
	CoordinatesActionTypes,
	CoordinatesAction,
	ICoordinatesState,
} from "../../types/coordinates";

const initialState: ICoordinatesState = {
	currentCoordinates: {
		key: "1",
		requestNumber: "№1",
		latFrom: 59.84660399,
		ingFrom: 30.29496392,
		latTo: 59.82934196,
		ingTo: 30.42423701,
	},
	pointsCoordinates: [],
	// center: { ingFrom: 59.84660399, latFrom: 30.29496392 },
};

export const coordinatesReducer = (
	state = initialState,
	action: CoordinatesAction,
): ICoordinatesState => {
	switch (action.type) {
		case CoordinatesActionTypes.CHANGE_CURRENT_COORDINATES:
			return { ...state, currentCoordinates: action.payload };
		case CoordinatesActionTypes.CHANGE_POINTS_COORDINATES:
			return { ...state, pointsCoordinates: action.payload };
		// case CoordinatesActionTypes.CHANGE_CENTER_COORDINATES:
		// 	return { ...state, center: action.payload };
		default:
			return state;
	}
};
