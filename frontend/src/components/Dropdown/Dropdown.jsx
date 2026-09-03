import "./Dropdown.css";
import {Link} from "react-router-dom"

export function Dropdown({ heading, options }) {
  return (
    <div className="ecommerce-dropdown">
      <h4>{heading}</h4>
      <div className="dropdown-options">
        {options.map((option) => (
            <Link to={option.path} className="ecommerce-cart-link">
            <div className="dropdown-option" key={option.label}>
                <span className="dropdown-icon">{option.icon}</span>
                {option.label}
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
}
