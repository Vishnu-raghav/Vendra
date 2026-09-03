import { Dropdown } from "../Dropdown/Dropdown";
import "./Header.css";
import { 
  Search,
  UserRound,
  ChevronDown,
  ShoppingCart,
  CircleUserRound,
  Box,
  Heart,
  BellRing,
  LogOut,
  Store,
  BellDot
 } from "lucide-react";

 import {Link} from "react-router-dom"

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
            {
              label: "My Profile",
              icon : <CircleUserRound />,
              path : "/profile"
            },
              {
              label: "Orders",
              icon : <Box />,
              path : "/orders"
            },
            {
              label: "Wishlist",
              icon : <Heart />,
              path : "/wishlist"
            },
            {
              label: "Notification",
              icon : <BellRing />,
              path : "/notification"
            },
              {
              label: "Logout",
              icon : <LogOut />,
              path : "/logout"
            },
          ]
          }  />

    </div>


            <div className="ecommerce-header-action-wrapper">

        <div className="ecommerce-header-actions">
            More
            <ChevronDown className="ecommerce-header-actions-icon" />
        </div>

        <Dropdown heading="More" options={
          [
            {
              label:"Become a Seller",
              icon:<Store />,
              path: "/seller"
            },
            {
              label:"Notification Setting",
              icon:<BellDot />,
              path : "/setting"
            }
          ]
          } />

    </div>

 <Link to="/cart" className="ecommerce-cart-link">
  <div className="ecommerce-header-action-wrapper">

        <div className="ecommerce-header-actions">
            <div className="ecommerce-header-cart-item-numbers">
                <ShoppingCart className="ecommerce-header-actions-icon" />
                <div className="ecommerce-header-cart-number">1</div>
            </div>

            Cart
        </div>
    </div>
 
 </Link>
        
        </div>

      </div>
    </header>
  );
}
