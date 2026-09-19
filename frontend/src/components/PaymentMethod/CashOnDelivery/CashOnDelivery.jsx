import { PlaceOrderButton } from "../../PlaceOrderButton/PlaceOrderButton"

export function CashOnDelivery(){
    return(
        <div className="payment-method-content">
                            <div className="payment-method-title">Cash on Delivery</div>
            
                            <div className="payment-method-description">
                              Due to handling costs, a normal fee of ₹7 will be charged for
                              orders placed using this option. Avoid this fee by paying
                              online now.
                            </div>
            
                            <div className="place-order-button">
                            <PlaceOrderButton 
                              className="payment-place-order"
                            />
                            </div>      
             </div>
    )
}