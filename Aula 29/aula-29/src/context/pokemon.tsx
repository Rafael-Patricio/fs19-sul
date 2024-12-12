'use client'


import { Pokemon } from "@/@types/pokemon";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const PokemonContext = createContext({})

export function PokemonProvider({ children }: { children: ReactNode }) {
    const [pokemon, setPokemon] = useState<Pokemon[]>([])

async function getPokemonById(id: number) {
    try {
        const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/${id}`
        const response = await fetch(url)
        
        return await response.json() as Pokemon
    } catch (error) {
        console.error(error)
    }
}

async function getPokemon() {
    for (let i =1; i<= 9; i++) {
        const pokemon = await getPokemonById(i)

        if (pokemon) {
            setPokemon((state) => [...state, pokemon])
        }
    }
}

useEffect(() => {
    getPokemon()
}, [])

    return (
        <PokemonContext.Provider value={{ pokemon }}>
            {children}
        </PokemonContext.Provider>
    )
}

export function usePokemon() {
    const context = useContext(PokemonContext)

    if(!context) {
        throw new Error("usePokemon deve ser utilizado com PokemonProvider")
    }

    return context
}
