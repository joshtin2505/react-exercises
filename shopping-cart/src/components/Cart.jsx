import "./Cart.css"
import { useId } from "react"
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./icons.jsx"
import { useCart } from "../hooks/useCart.jsx"
function CartItem({ item, addToCart, removeFromCart }) {    
    return (
        <li>
            <img src={item.thumbnail} alt={item.title} />
            <div>
                <strong>{item.title}</strong> - ${item.price * item.quantity }
            </div>

            <footer>
                <small>
                    Qty: {item.quantity}
                </small>
                <button onClick={addToCart}>+</button>
                <button onClick={() => removeFromCart(item)}>
                    <RemoveFromCartIcon/>
                </button>
            </footer>
        </li>
    )}
function Cart() {
    const cartCheckBoxID = useId()
    const { cart, clearCart, addToCart, removeFromCart } = useCart()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckBoxID}>
                <CartIcon />
            </label>
            <input type="checkbox" hidden id={cartCheckBoxID} />
            <aside className="cart">
                <ul>
                    {
                        cart?.map((item) => {
                            return (
                                <CartItem key={item.id} item={item} addToCart={() => addToCart(item)} removeFromCart={removeFromCart} />
                            )
                        })
                    }
                    <strong>TOTAL: $</strong>
                </ul>
                <button onClick={
                    () => {
                        clearCart()
                    }
                }>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}

export default Cart