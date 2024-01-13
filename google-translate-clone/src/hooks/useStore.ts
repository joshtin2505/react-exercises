import { useReducer } from 'react'
import { type State, type Action, FromLanguage, Languages } from '../types.d'
import { AUTO_LANGUAGE } from '../constants'
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  resultText: '',
  loading: false
}
function reducer(state: State, action: Action){
  const { type } = action
  if (type === 'INTERCHANGE_LANGUAGE'){
    if(state.fromLanguage === AUTO_LANGUAGE) return state
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    }
  
  }
  else if (type === 'SET_FROM_LANGUAGE'){
    const loading = state.fromText !== ''
    return {
      ...state,
      fromLanguage: action.payload,
      resultText: '',
      loading      
    }
  }
  else if (type === 'SET_TO_LANGUAGE'){
    return {
      ...state,
      toLanguage: action.payload
    }
  }
  else if (type === 'SET_FROM_TEXT'){
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      resultText: ''
    }
  }
  else if (type === 'SET_RESULT_TEXT'){
    return {
      ...state,
      loading: false,
      resultText: action.payload
    }
  }
  return state
  
}

export function useStore(){
    const [{fromLanguage,fromText,loading,resultText,toLanguage}, dispatch] = useReducer(reducer, initialState)
    const interChangeLenguages = () => dispatch({ type: 'INTERCHANGE_LANGUAGE' })
    
    const setFromLanguages = (payload: FromLanguage) => dispatch({ type: 'SET_FROM_LANGUAGE', payload })

    const setTolanguage = (payload: Languages) => dispatch({ type: 'SET_TO_LANGUAGE', payload })

    const setFromText = (payload: string) => dispatch({ type: 'SET_FROM_TEXT', payload })

    const setResultText = (payload: string) => dispatch({ type: 'SET_RESULT_TEXT', payload })

    return { fromLanguage,fromText,loading,resultText,toLanguage, interChangeLenguages, setFromLanguages, setTolanguage, setFromText, setResultText}
}