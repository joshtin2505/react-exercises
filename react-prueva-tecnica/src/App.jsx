import './App.css'
import {useCatImg} from './hooks/useCatImg'
import {useCatFact} from './hooks/useCatFact'

function App() {
  const {fact, getRandomFact} = useCatFact()
  const {imgUrl} = useCatImg({fact})

  const handleClick = () => {
    getRandomFact()
  }

  return (
      <main>
        <h1>App de gatitos</h1>
          {fact && <p>{fact}</p>}
          {imgUrl && <img src={imgUrl} alt={`Image of first three words of: ${fact}`}/>}
          <button onClick={handleClick}>new fact</button>
      </main>
  )
}

export default App