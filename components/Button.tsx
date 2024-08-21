type StandardButtonPropTypes = {
    text: string;
    borderColor?: string;
    fontColorClass?: string;
    className?: string;
    onClick?: any;
    buttonType?: "button" | "submit" | "reset";

}

export default function StandardButton({
    text,
    borderColor,
    onClick,
    className,
    buttonType,
}: StandardButtonPropTypes) {
    return <button
        onClick={onClick}
        style={{ minWidth: 100 }}
        type={buttonType ?? 'button'}
        className={
            `
        bg-white
        text-black
        font-bold
        border
        border-l-4
        border-b-4
        ${borderColor ?? `border-primary`}
        rounded-lg
        px-3 py-1 
        ${className}
        `
        }>{text}</button>
}