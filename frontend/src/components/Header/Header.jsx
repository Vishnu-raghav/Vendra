import { Dropdown } from "../Dropdown/Dropdown";
import "./Header.css";
import { Search, UserRound, ChevronDown, ShoppingCart } from "lucide-react";

export function Header() {
 
  return (
    <header className="ecommerce-header">
      <div className="ecommerce-header-inner">
        <div className="ecommerce-search-container">
          <Search className="ecommerce-search-icon" />

          <input
            type="text"
            placeholder="Search"
            className="ecommerce-search-input"
          />
        </div>

        <div className="ecommerce-header-actions-section">
        <div className="ecommerce-header-action-wrapper">

        <div className="ecommerce-header-actions">
            <UserRound className="ecommerce-header-actions-icon" />
            Vishnu
            <ChevronDown className="ecommerce-header-actions-icon" />
        </div>

        <Dropdown heading="Account" options={
          [
           "My Profile",
           "Orders",
           "Wishlist",
           "Notification",
           "Logout"
          ]
          }  />

    </div>


            <div className="ecommerce-header-action-wrapper">

        <div className="ecommerce-header-actions">
            More
            <ChevronDown className="ecommerce-header-actions-icon" />
        </div>

        <Dropdown heading="More" options={
          ["Become a Seller" , "Notification Setting"]
          } />

    </div>

         <div className="ecommerce-header-action-wrapper">

        <div className="ecommerce-header-actions">
            <div className="ecommerce-header-cart-item-numbers">
                <ShoppingCart className="ecommerce-header-actions-icon" />
                <div className="ecommerce-header-cart-number">1</div>
            </div>

            Cart
        </div>
    </div>
        </div>

      </div>
    </header>
  );
}
