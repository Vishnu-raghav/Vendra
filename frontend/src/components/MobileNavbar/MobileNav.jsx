   import { 
    ShoppingCart,
    LayoutGrid,
    House,
    User
  } from "lucide-react";

  import "./MobileNav.css"

export function MobileNav(){
    return(
        <>
        <nav className="mobile-nav">
              <button className="mobile-nav-actions">
                <House className="mobile-nav-actions-icon" />
                Home
            </button>
              <button className="mobile-nav-actions">
                <LayoutGrid className="mobile-nav-actions-icon" />
                Category  
            </button>
              <button className="mobile-nav-actions">
                <User className="mobile-nav-actions-icon" />
                Account
            </button>
              <button className="mobile-nav-actions">
                <ShoppingCart className="mobile-nav-actions-icon" />
                Cart
            </button>
        </nav>
        </>
    )
}