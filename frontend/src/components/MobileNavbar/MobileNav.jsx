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
        <div className="mobile-nav">
              <div className="mobile-nav-actions">
                <House className="mobile-nav-actions-icon" />
                Home
            </div>
              <div className="mobile-nav-actions">
                <LayoutGrid className="mobile-nav-actions-icon" />
                Category  
            </div>
              <div className="mobile-nav-actions">
                <User className="mobile-nav-actions-icon" />
                Acount
            </div>
              <div className="mobile-nav-actions">
                <ShoppingCart className="mobile-nav-actions-icon" />
                Cart
            </div>
        </div>
        </>
    )
}