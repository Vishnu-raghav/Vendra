import "./Dropdown.css"


export function Dropdown({heading}){
    return(
        <div className="ecommerce-dropdown">
            <h4>Account</h4>
            <div className="dropdown-options">
                <div className="dropdown-option">My Profile</div>
                <div className="dropdown-option">My Profile</div>
                <div className="dropdown-option">Orders</div>
                <div className="dropdown-option">Logout</div>
            </div>
        </div>
    )
}