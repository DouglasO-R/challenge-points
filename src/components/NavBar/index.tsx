import { CoordinatesState } from "../../reducers/coordinates/reducer";
import { Button } from "../Button";

import "./style.css"

interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
    testid?: string,
    points: CoordinatesState,
    onClickUndo: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    onClickRedo: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function NavBar({ testid = "test-navBar", points, onClickUndo, onClickRedo, ...rest }: NavBarProps) {
    const { coordinates, undoCoordinates } = points;

    const disableUndoButton = coordinates.length <= 0;
    const disableRedoButton = undoCoordinates.length <= 0;

    return (
        <nav className="nav" data-testid={testid} {...rest}>
            <Button
                text="undo"
                onClick={onClickUndo}
                disabled={disableUndoButton}
            />

            <Button
                text="redo"
                onClick={onClickRedo}
                disabled={disableRedoButton}
            />
        </nav>
    )
}