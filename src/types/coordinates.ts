export enum CoordinatesActionTypes {
	CHANGE_CURRENT_COORDINATES = "CHANGE_CURRENT_COORDINATES",
	CHANGE_POINTS_COORDINATES = "CHANGE_POINTS_COORDINATES",
	// CHANGE_CENTER_COORDINATES = "CHANGE_CENTER_COORDINATES",
}

export type CoordinatesAction =
	| ICurrentCoordinatesСhangeAction
	| ICoordinatesPointsСhangeAction;
// | ICenterСhangeAction;

interface ICurrentCoordinatesСhangeAction {
	type: CoordinatesActionTypes.CHANGE_CURRENT_COORDINATES;
	payload: ICurrentCoordinates;
}
interface ICoordinatesPointsСhangeAction {
	type: CoordinatesActionTypes.CHANGE_POINTS_COORDINATES;
	payload: number[];
}
// interface ICenterСhangeAction {
// 	type: CoordinatesActionTypes.CHANGE_CENTER_COORDINATES;
// 	payload: ICenter;
// }
export interface ICurrentCoordinates {
	ingFrom?: number;
	latFrom?: number;
	ingTo?: number;
	latTo?: number;
	requestNumber?: string;
	key?: string;
}
// export interface ICenter {
// 	ingFrom?: number;
// 	latFrom?: number;
// 	ingTo?: number;
// 	latTo?: number;
// }

export interface ICoordinatesState {
	currentCoordinates: ICurrentCoordinates;
	pointsCoordinates: number[];
	// center: ICenter;
}
