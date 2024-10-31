interface DescriptionProps {
    value: string
}

export function Description(props: DescriptionProps) {
    return (
        <p>{props.value}</p>
    )
}