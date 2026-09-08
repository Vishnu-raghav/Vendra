import "./PlaceOrderButton.css"
export function PlaceOrderButton({onPlaceOrder}){

    return(
    <div className="place-order-container">
      <span className="total-amount">536</span>
      <button 
      className="order-button"
      onClick = {onPlaceOrder}
      >Place order</button>
    </div>
    )
}