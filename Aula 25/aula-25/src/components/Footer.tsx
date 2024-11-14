interface FooterProps {
    value: string
}

export function Footer (props: FooterProps) {
    return(
        <footer>{props.value}</footer>
    )
}