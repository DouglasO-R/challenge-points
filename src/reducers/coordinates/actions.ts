import { Coordinates } from "../../types/Coordinates";

export enum Action {
    MARK_NEW_COORDINATE = "MARK_NEW_COORDINATE",
    UNDO_LAST_COORDINATE = "UNDO_LAST_COORDINATE",
    REDO_LAST_UNDO_COORDINATE = "REDO_LAST_UNDO_COORDINATE"
}

export type ActionType = {
    type: Action,
    payload: {
        newCoordinates: Coordinates
    }
}


export function markNewCoordinates(newCoordinates: Coordinates): ActionType {
    return {
        type: Action.MARK_NEW_COORDINATE,
        payload: {
            newCoordinates
        }
    }
}

export function undoLastMArk(): Partial<ActionType> {
    return {
        type: Action.UNDO_LAST_COORDINATE
    }
}

export function redoLastUndo(): Partial<ActionType> {
    return {
        type: Action.REDO_LAST_UNDO_COORDINATE
    }
}