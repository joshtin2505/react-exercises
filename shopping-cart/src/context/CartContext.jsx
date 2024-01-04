import { createContext, useEffect, useReducer } from "react"
import {initialState, cartReducer, CART_ACTIONS} from "../reducers/cartReducer.js"
export const CartContext = createContext()

function useCartReducer(){
    const [state, dispatch] = useReducer(cartReducer, initialState)
    
    const addToCart = product => dispatch({
        type: CART_ACTIONS.ADD_TO_CART, 
        payload: product
    })
    const removeFromCart = product => dispatch({
        type: CART_ACTIONS.REMOVE_FROM_CART,
        payload: product
    })
    const clearCart = () => dispatch({type: CART_ACTIONS.CLEAR_CART, payload: []})

    return {state, addToCart, removeFromCart, clearCart}
}
function CartProvider({children}) {
    const {state, addToCart, removeFromCart, clearCart } = useCartReducer()

    // useEffect(()=> {
    //     const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    // })
  return (
    <CartContext.Provider value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider