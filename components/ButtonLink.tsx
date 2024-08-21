type ButtonLinkPropTypes = {
    text: string;
    href: string;
}

export default function ButtonLink({ href, text }: ButtonLinkPropTypes) {
    if (href.includes('https')) {
        return (
            <a
                style={{ minWidth: 100, display: `inline-block` }}
                className={`
                no-underline
                text-black
                font-bold
                border
                border-black
                border-l-4
                border-b-4
                rounded-lg
                px-3 py-1 
                `} href={href} target="_blank">{text} ↗️</a>
        )
    }

    // TODO return router link
    return null;
}