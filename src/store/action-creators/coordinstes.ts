import { Dispatch } from "redux";
import {
	CoordinatesAction,
	CoordinatesActionTypes,
} from "../../types/coordinates";

export const fetchPointsCoordinates = () => {
	return async (dispatch: Dispatch<CoordinatesAction>) => {
		try {
			dispatch({
				type: CoordinatesActionTypes.CHANGE_POINTS_COORDINATES,
				payload: [],
			});
		} catch {
			// console.log(2);
		}
	};
};
