import { useReducer } from "react";

import { markNewCoordinates, redoLastUndo, undoLastMArk } from "../../reducers/coordinates/actions";
import { coordinatesReducer } from "../../reducers/coordinates/reducer";
import { Coordinates } from "../../types/Coordinates";
import { Dot } from "../Dot";
import { NavBar } from "../NavBar";

import "./style.css";

export function Canvas() {
    const [points, dispatch] = useReducer(coordinatesReducer, {
        coordinates: [],
        undoCoordinates: []
    });

    const { coordinates } = points;

    const handleMarkCanvas = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        const newCoordinates = {
            positionX: event.clientX,
            positionY: event.clientY
        };

        dispatch(markNewCoordinates(newCoordinates));
    }

    const handleUndoMark = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation()

        dispatch(undoLastMArk());
    }

    const handleRedoMark = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation()

        dispatch(redoLastUndo())
    }

    const renderCoordinates = (coordinate: Coordinates, index: number) => (
        <Dot
            key={index}
            positionX={coordinate.positionX}
            positionY={coordinate.positionY}
        />

    )

    return (
        <div className="canvas" onClick={handleMarkCanvas}>
            <NavBar
                points={points}
                onClickUndo={handleUndoMark}
                onClickRedo={handleRedoMark}
            />

            {coordinates.map(renderCoordinates)}

        </div >
    )
}