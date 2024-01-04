import './Products.css'
import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './icons'
function Products({products}) {
    const { addToCart, cart, removeFromCart } = useCart()
    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

  return (
    <main className="products">
        <ul>
            {
                products.slice(0, 10).map((product) =>{ 
                    const isProductInCart = checkProductInCart(product)
                    return (
                    <li key={product.id}>
                        <img 
                            src={product.thumbnail} 
                            alt={product.title} 
                        />
                        <div className="">
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div className="">
                            <button style={{
                                backgroundColor: isProductInCart ? '#fb3030' : '#09f',
                            }}
                                onClick={()=> {
                                isProductInCart ? removeFromCart(product) : addToCart(product)
                            }}>
                                {
                                    isProductInCart ? <RemoveFromCartIcon/> : <AddToCartIcon />
                                }
                            </button>
                        </div>
                    </li>
                )
            })
            }
        </ul>
    </main>
  )
}

export default Products