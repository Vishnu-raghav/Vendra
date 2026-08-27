import {Star} from "lucide-react"
import "./ProductCard.css"
export function ProductCard(){

    return(
        <>

        <div className="ecommerce-product-card">
            <div className="product-image-container">
                <img 
                    src="/Product-image-1.avif" 
                    alt="Product"
                    className="product-image"
                 />
                <div className="product-rating">
                    <Star className="product-rating-icon" />
                    <span>4.4</span>
                </div>
            </div>
            <div className="product-info">
                <div className="product-name">
                    <h3 className="product-name">
                        <span className="product-brand-name">Asus</span> Vivobook 14
                    </h3>
                </div>
                <div className="product-price">400</div>

            </div>

        </div>
        
        </>
    )
}