import { Coordinates } from "../../types/Coordinates";
import { Action, ActionType } from "./actions";


export interface CoordinatesState {
    coordinates: Coordinates[];
    undoCoordinates: Coordinates[]
}




export function coordinatesReducer(state: CoordinatesState, action: Partial<ActionType>) {
    switch (action.type) {
        case Action.MARK_NEW_COORDINATE:
            return {
                coordinates: [...state.coordinates, action.payload!.newCoordinates],
                undoCoordinates: []
            }
            break;
        case Action.UNDO_LAST_COORDINATE:
            return {
                coordinates: [...state.coordinates].slice(0, -1),
                undoCoordinates: [...state.undoCoordinates, [...state.coordinates].pop() as Coordinates]
            }
            break;
        case Action.REDO_LAST_UNDO_COORDINATE:
            return {
                coordinates: [...state.coordinates, [...state.undoCoordinates].pop() as Coordinates],
                undoCoordinates: [...state.undoCoordinates].slice(0, -1),
            }
            break;
        default:
            return state
            break;
    }
}