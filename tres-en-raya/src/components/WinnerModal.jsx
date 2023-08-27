import Square from "./Square"
function WinnerModal({winner, resetGame}) {
    if (winner === null) return null
    const winnerTxt = winner === false
    ? 'Empate!'
    : 'Ganó: '
  return (
        /* Si se gano o perdio */
        (
          <section className="winner">
            <div className="text">
              <h2>{winnerTxt}</h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Jugar de nuevo</button>
              </footer>
            </div>
          </section>
        )
  )
}

export default WinnerModal