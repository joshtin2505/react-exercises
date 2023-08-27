import { useEffect, useState } from "react"
import { randomFact } from "../services/facts"

export function useCatFact() {
    const [fact, setFact] = useState()

    const getRandomFact = () => {
        randomFact().then(newFact => setFact(newFact))
    }
    useEffect(getRandomFact, [])

    return { fact, getRandomFact }

}