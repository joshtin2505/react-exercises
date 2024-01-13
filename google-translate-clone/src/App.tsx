import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,  Row, Col, Button, Stack} from 'react-bootstrap'
import './App.css'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/icons'
import LanguageSelector from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'
import { useEffect } from 'react'
import { translate } from './services/translate'
function App() {
  const {fromLanguage,fromText,loading,resultText,toLanguage, interChangeLenguages, setFromLanguages, setFromText, setResultText, setTolanguage} = useStore()
  
  useEffect(()=>{
    if (fromText === '') return
    translate({text: fromText,fromLanguage,toLanguage})
      .then(res => {
        if (res == null) return
        console.log(res)
        setResultText(res)
      })
      .catch((e) => console.log(e))
  },[fromText, fromLanguage, toLanguage])
  
  return (
    <>
      <Container fluid>
        <h1>Google Translate</h1>
        <Row >
          <Col>
            <Stack gap={2}>
              <LanguageSelector 
                type={SectionType.From} 
                value={fromLanguage} 
                onChange={setFromLanguages}
              />
              <TextArea 
                type={SectionType.From}
                value={fromText}
                onChange={setFromText}
              />
              
            </Stack>
          </Col>
          <Col xs='auto'>
            <Button
              variant='link'
              disabled={fromLanguage ===  AUTO_LANGUAGE}
              onClick={() => interChangeLenguages()}
            >
              <ArrowsIcon/>
            </Button>
          </Col>
          <Col>
          <Stack gap={2}>
            <LanguageSelector 
            type={SectionType.To} 
            value={toLanguage} 
            onChange={setTolanguage}
            />
            <TextArea 
              type={SectionType.To}
              value={resultText}
              loading={loading}
              onChange={setResultText}
            />
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
