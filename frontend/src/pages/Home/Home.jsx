import "./Home.css"
import { ProductGrid } from "../../components/ProductGrid/ProductGrid"

export function Home(){
    return(
        <div className="ecommerce-home-page">
            
            <ProductGrid />
        </div>
    )
}