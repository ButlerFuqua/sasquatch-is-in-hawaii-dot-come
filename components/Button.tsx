type StandardButtonPropTypes = {
    text: string;
    borderColor?: string;
    fontColorClass?: string;
    className?: string;

}

export default function StandardButton({
    text,
    borderColor,
    fontColorClass,
    className
}: StandardButtonPropTypes) {
    return <button
        style={{ minWidth: 100 }}
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