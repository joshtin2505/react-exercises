// Turn --------------------->
export const Turns = {
    x: "X",
    o: "◯"
}

// Combos ganadores -------------------->
export const winnerComb = [
    // horizontales
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Diagonal 1
    [0, 3, 6],
    // Diagonal 2
    [1, 4, 7],
    // verticales
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6] // combos de tres en linea

]