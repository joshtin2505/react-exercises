import { winnerComb } from "../constans"

// Funcion para Chekear ganador
const checkWinerFrom = (boardToCheck) => {
    for (const combo of winnerComb) {
        const [a, b, c] = combo
        if (
            (boardToCheck[a]) &&
            (boardToCheck[a] == boardToCheck[b]) &&
            (boardToCheck[a] === boardToCheck[c])
        ) {
            return boardToCheck[a]
        }
    }
}
export default checkWinerFrom

// Funcion para Chekear Empate
export const checkEndGame = (newBoard) => {
    // revisa en cada posicion del arreglo si es difernte de "null"
    return newBoard.every((square) => square !== null)
}