import {ProductCard} from "../ProductCard/ProductCard"
import "./productGrid.css"
const products = [
                 {
                    id:1,
                    name:"vivo",
                    price:"300",
                    rating:4.5,
                    brand : "asus",
                    image : "/Product-image-1.avif" 
                 },
                 {
                    id:2,
                    name:"Oppo",
                    price:"300",
                    rating:4.5,
                    brand : "asus",
                    image : "/Product-image-1.avif" 
                 },
                 {
                    id:3,
                    name:"vivo",
                    price:"300",
                    rating:4.5,
                    brand : "asus",
                    image : "/Product-image-1.avif" 
                 },
                 {
                    id:4,
                    name:"vivo",
                    price:"300",
                    rating:4.5,
                    brand : "asus",
                    image : "/Product-image-1.avif" 
                 },
                 {
                    id:5,
                    name:"vivo",
                    price:"300",
                    rating:4.5,
                    brand : "asus",
                    image : "/Product-image-1.avif" 
                 }
                ]

export function ProductGrid(){
    return(
        <div className="ecommerce-product-grid">
            {products.map((product) => (
                <ProductCard 
                key={product.id} 
                product={product}
             />
            ))}
        </div>
    )
}