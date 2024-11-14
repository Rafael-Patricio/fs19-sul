interface HeaderProps {
    content: string
}

export function Header (props: HeaderProps) {
    return(
        <header>{props.content}</header>
    )
}