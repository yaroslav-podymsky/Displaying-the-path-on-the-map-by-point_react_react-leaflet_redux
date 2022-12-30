import { data } from "../../data";
import {
  CoordinatesActionTypes,
  CoordinatesAction,
  ICoordinatesState,
  ICurrentCoordinates,
} from "../../types/coordinates";

const initialState: ICoordinatesState = {
  currentCoordinates: data[0],
  selectedKeys: ["1"],
};

export const coordinatesReducer = (
  state = initialState,
  action: CoordinatesAction
): ICoordinatesState => {
  switch (action.type) {
    case CoordinatesActionTypes.CHANGE_CURRENT_COORDINATES:
      return { ...state, currentCoordinates: action.payload };
    case CoordinatesActionTypes.CHANGE_SELECTED_KEYS:
      return { ...state, selectedKeys: action.payload };
    default:
      return state;
  }
};

export const currentCoordinatesChange = (payload: ICurrentCoordinates) => ({
  type: CoordinatesActionTypes.CHANGE_CURRENT_COORDINATES,
  payload,
});
export const selectedKeysChange = (payload: string[]) => ({
  type: CoordinatesActionTypes.CHANGE_SELECTED_KEYS,
  payload,
});
