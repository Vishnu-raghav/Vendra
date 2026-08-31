import {Star} from "lucide-react"
import "./ProductCard.css"

export function ProductCard({product}){
    return(
        <div className="ecommerce-product-card">
            <div className="product-image-container">
                <img 
                    src="/Product-image-1.avif" 
                    alt="Product"
                    className="product-image"
                 />
                <div className="product-rating">
                    <Star className="product-rating-icon" />
                    <span>{product.rating}</span>
                </div>
            </div>
            <div className="product-info">
                    <h3 className="product-name">
                        <span className="product-brand-name">{product.brand}</span>
                         {product.name}
                    </h3>
                <div className="product-price">{product.price}</div>

            </div>
        </div>
        
    )
}