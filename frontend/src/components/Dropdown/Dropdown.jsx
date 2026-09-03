import "./Dropdown.css"


export function Dropdown({heading, options}){
    return(
        <div className="ecommerce-dropdown">
            <h4>{heading}</h4>
            <div className="dropdown-options">
                 {options.map((option) => (
                    <div className="dropdown-option">
                   {option}
                </div>        
                ))}
                
            </div>
        </div>
    )
}