// Imports <-------------------->
import './App.css'
import { useState } from 'react'
import confetti from "canvas-confetti"
import Square from './components/Square'
import { Turns } from './constans'
import checkWinerFrom from './logic/board'
import WinnerModal from './components/WinnerModal'
import { checkEndGame } from './logic/board'

// App -------------------------->
function App() {
  // inicialiso un array de 9 pocisiones vacio dentro de un estado para poder actualizar las posiciones
  const [board, setBoard] = useState( ()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) :
    Array(9).fill(null)
  }
  )
  // Esta de Turn
  const [turn, setTurn] = useState( ()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? Turns.x
  })
  // null es que aun no hay ganador yel false es que hay un empate
  const [winner, setWinner] = useState(null)
  
  // --------------------------->

  
  // Funcion para actualizar el tablero
  const updateBoard = (index)=>{
    // si ya hay un valor en esa pocicion del array 
    if(board[index] || winner ) return
    //Asignar el valor del turno a la caaja
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //Cambio de turno
    const newTurn = turn === Turns.x ? Turns.o : Turns.x
    setTurn(newTurn)
    // Guardar partida
      window.localStorage.setItem('board',JSON.stringify(newBoard))
      window.localStorage.setItem('turn',JSON.stringify(newTurn))
    const newWiner = checkWinerFrom(newBoard)
    if (newWiner){
      confetti()
      setWinner(newWiner)
    }
    else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }
  const resetGame = ()=>{
    setBoard(Array(9).fill(null))
    setTurn(Turns.x)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }
  // --------------------------->

  return (
    <>
    <main className="board">
      <h1>Tres En Raya</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game"f>
        {
          //Recorrer cada pocicion del array y poniendo un caja dentro de cada recorrido 
          board.map((square, index)=>{
            return(
              <Square key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === Turns.x}> {Turns.x} </Square>
        <Square isSelected={turn === Turns.o}> {Turns.o} </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
    </>
  )
}

export default App
