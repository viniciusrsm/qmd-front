interface ButtonSecondaryProps {
    text: string;
    onClick?: () => void;
    style?: string
}

export default function ButtonSecondary({ text, onClick, style='' } : ButtonSecondaryProps) {
    return (
        <button onClick={onClick} className={'border-2 border-primary text-primary rounded-lg p-2 mt-4 cursor-pointer ' + style}>
            {text}
        </button>
    );
}