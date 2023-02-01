import "./style.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    testid?: string;
}


export function Button({ text, testid = "button-test", type = "button", ...rest }: ButtonProps) {
    return (
        <button
            type={type}
            data-testid={testid}
            {...rest}
        >
            {text}
        </button>
    )
}