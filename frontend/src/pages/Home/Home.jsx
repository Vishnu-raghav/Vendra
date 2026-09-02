import "./Home.css"
import { ProductGrid } from "../../components/ProductGrid/ProductGrid"
import { Hero } from "../../components/HeroSection/Hero"

export function Home(){
    return(
        <div className="ecommerce-home-page">
            <Hero />
            
            <ProductGrid />
        </div>
    )
}