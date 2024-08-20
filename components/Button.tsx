type StandardButtonPropTypes = {
    text: string;
    bgColorClass?: string;
    fontColorClass?: string;
    className?: string;

}

export default function StandardButton({
    text,
    bgColorClass,
    fontColorClass,
    className
}: StandardButtonPropTypes) {
    return <button className={
        `rounded ${bgColorClass ?? `bg-green-500`} 
        ${fontColorClass ?? `text-white`} 
        px-3 py-1 shadow-md
        ${className}
        `
    }>{text}</button>
}