import { combineReducers } from "redux";
import { coordinatesReducer } from "./coordinatesReducer";

export const rootReducer = combineReducers({ coordinates: coordinatesReducer });
export type RootState = ReturnType<typeof rootReducer>;
