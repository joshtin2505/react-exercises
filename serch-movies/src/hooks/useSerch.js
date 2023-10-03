import {useEffect, useState, useRef} from 'react'
function useSerch(){
    const [err, setErr] = useState(null)
    const [serch, setSerch] = useState('')
    const firstRender = useRef(true)
    useEffect(() => {
        if (firstRender.current){
            //cuando se escribe algo en el input esta condicion es false y por fuera no hay manera de que vuelva a ser true, sino hasta que se reinicie la pagina
            firstRender.current = serch === ''
            return
        }
        else if (serch === ''){
            setErr('La busueda esta vacia')
            return
        }
        else if (serch.startsWith(' ')) {
            setErr('No puede haber un espacio al inicio')
            return
        }
        else if (serch.match(/^\d+$/)){
            setErr('No puede iniciar con un numero')
            return
         }
      setErr(null)
    },[serch])
  
    return [serch,setSerch,err]
  }
export default useSerch