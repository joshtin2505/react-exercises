import './Footer.css'
import { IS_DEV } from '../config.js'
import { useFilters } from '../hooks/useFilters.js'

function Footer() {

  const { filters } = useFilters()

  return (
    <footer className="footer">

        {
            !IS_DEV && (
                <>
                    <h4>Prueba técnica de React ⁕ - <span>@Jostin C Dev</span></h4>
            
                    <h5>Shopping Cart con useContext & useReducer</h5>
                </>
            )
        }
        {
            IS_DEV && (
                <p>
                    {JSON.stringify(filters)}
                </p>
            )
        }
        ...
    </footer>
  )
}

export default Footer