import './Products.css'
import { AddToCartIcon } from './icons'
function Products({products}) {
  return (
    <main className="products">
        <ul>
            {
                products.slice(0, 10).map((product) => (
                    <li key={product.id}>
                        <img 
                            src={product.thumbnail} 
                            alt={product.title} 
                        />
                        <div className="">
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div className="">
                            <AddToCartIcon />
                        </div>
                    </li>
                ))
            }
        </ul>
    </main>
  )
}

export default Products