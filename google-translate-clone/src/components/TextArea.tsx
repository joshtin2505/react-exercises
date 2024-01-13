import { Form } from "react-bootstrap"
import { SectionType } from "../types.d"

interface Props {
    type: SectionType,
    value: string,
    loading?: boolean,
    onChange: (value: string) => void,
}

const commonStyles = { height: '150px', border: 0, resize: 'none', outline: 'none' }

const getPlaceholder = ({type, loading}: {type : SectionType, loading?: boolean} ) => {
    if(type === SectionType.From) return 'Introducir texto'
    else if(loading === true) return 'Loading...'
    return 'Traduccion'
}

export const TextArea = ({type, loading, value, onChange}: Props) => {
    const styles = type === SectionType.From ? commonStyles : { ...commonStyles, backgroundColor: '#f5f5f5' }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value)
    }
    return(
        <Form.Control
              as='textarea'
              disabled={type === SectionType.To ? true : false}
              autoFocus={type === SectionType.From ? true : false}
              placeholder={getPlaceholder({type, loading})}
              style={styles as React.CSSProperties}
              onChange={handleChange}
              value={value}
            />
    )
}