import { Form } from "react-bootstrap"
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants"
import { FromLanguage, Languages, SectionType } from "../types.d"

type Props = 
    | { type: SectionType.From, value: FromLanguage, onChange: (payload: FromLanguage) => void }
    | { type: SectionType.To, value: Languages, onChange: (payload: Languages) => void }

function LanguageSelector({ type, value, onChange }: Props) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Languages)
    }
  return (
    <Form.Select onChange={handleChange} aria-label="Selecciona el idioma" value={value}>
        {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
        {
        Object.entries(SUPPORTED_LANGUAGES).map(([key,literal]) =>(
            <option key={key} value={key}>
                {literal}
            </option>
        ))
        }
    </Form.Select>
  )
}

export default LanguageSelector