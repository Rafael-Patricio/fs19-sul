import { ReactNode } from "react"

interface MainProps {
    children: ReactNode
}

export function Main (props: MainProps) {
    return(
        <main>
            {props.children}
        </main>
    )
}