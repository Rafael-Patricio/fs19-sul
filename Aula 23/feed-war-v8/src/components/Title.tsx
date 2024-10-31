// kebab case => nome-dividido-por-traco
// snake case => nome_dividido_por_underline
// camel case => divididoPorMaiuscula (a partir da segunda palavra)
// pascal case => DivididoPorMaiuscula (a partir da primeira palavra)

interface TitleProps {
    value: string
}

export function Title(props: TitleProps) {
    return (
        <h1>{props.value}</h1>
    )
}