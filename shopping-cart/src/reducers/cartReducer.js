export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []
export const CART_ACTIONS = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    DECREASE_QUANTITY: 'DECREASE_QUANTITY',
    CLEAR_CART: 'CLEAR_CART',
}

// actualizar localStotrage con estado del carrito

export const updateLocalStorage = (cart) => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
}
export const cartReducer = (state, action ) => { 
    const { type: actionType, payload: actionPayload } = action
    const {id} = actionPayload
    var newState = initialState
    switch (actionType) {
        case CART_ACTIONS.ADD_TO_CART:
            const productInCartIndex = state.findIndex(item => item.id === id)

            if(productInCartIndex >= 0){
                newState = structuredClone(state)
                newState[productInCartIndex].quantity++
                updateLocalStorage(newState)
                return newState
            }
            newState = [...state, {...actionPayload, quantity: 1}]
            updateLocalStorage(newState)
            return newState
        case CART_ACTIONS.REMOVE_FROM_CART:
            newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        case CART_ACTIONS.CLEAR_CART:
            updateLocalStorage([])
            return []
        default:
            return state
    }
}
