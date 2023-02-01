import "./style.css";


interface DotProps {
    positionY: number,
    positionX: number,
    testid?: string,
}

export function Dot({ positionX, positionY, testid = "test-dot" }: DotProps) {
    return (
        <span
            className="dot"
            data-testid={testid}
            style={{
                top: positionY,
                left: positionX
            }}
        />
    )
}