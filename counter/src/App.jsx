import {useState} from 'react'
function App() {
  const [counter, setCounter] = useState(0)
  function handleClick(){
    let cont = counter
    setCounter(cont + 1)
  }
  return (
    <>
      <div className='h-screen bg-zinc-900 text-white font-medium flex justify-center items-center flex-col gap-4'>
        <button className='bg-zinc-700 p-3 py-1 rounded-sm text-xl hover:shadow-xl shadow-black hover:scale-[1.06] active:bg-zinc-800 transition-all' onClick={handleClick}>Plus</button>
        <p>Counter: <span className='bg-zinc-500 p-2 py-1 rounded-sm underline'>{counter}</span></p>
      </div>
    </>
  )
}

export default App
