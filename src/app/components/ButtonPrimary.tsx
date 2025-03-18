interface ButtonPrimaryProps {
    text: string;
    onClick?: () => void;
    style?: string
}

export default function ButtonPrimary({ text, onClick, style='' } : ButtonPrimaryProps) {
    return (
        <button onClick={onClick} className={'border-2 border-primary bg-primary text-white rounded-lg p-2 mt-4 cursor-pointer ' + style}>
            {text}
        </button>
    );
}