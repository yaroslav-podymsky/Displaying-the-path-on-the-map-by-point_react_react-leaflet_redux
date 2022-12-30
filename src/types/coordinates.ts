export enum CoordinatesActionTypes {
  CHANGE_CURRENT_COORDINATES = "CHANGE_CURRENT_COORDINATES",
  CHANGE_SELECTED_KEYS = "CHANGE_SELECTED_KEYS",
}

export type CoordinatesAction =
  | ICurrentCoordinatesСhangeAction
  | ISelectedKeysСhangeAction;

interface ICurrentCoordinatesСhangeAction {
  type: CoordinatesActionTypes.CHANGE_CURRENT_COORDINATES;
  payload: ICurrentCoordinates;
}

interface ISelectedKeysСhangeAction {
  type: CoordinatesActionTypes.CHANGE_SELECTED_KEYS;
  payload: string[];
}

export interface ICurrentCoordinates {
  ingFrom: number;
  latFrom: number;
  ingTo: number;
  latTo: number;
  requestNumber?: string;
  key: string;
}

export interface ICoordinatesState {
  currentCoordinates: ICurrentCoordinates;
  selectedKeys: string[];
}
