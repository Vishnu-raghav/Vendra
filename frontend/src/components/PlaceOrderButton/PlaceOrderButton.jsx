import "./PlaceOrderButton.css";
export function PlaceOrderButton({ onPlaceOrder, className = "" }) {
  return (
    <button className={`order-button ${className}`}  onClick={onPlaceOrder}>
      Place order
    </button>
  );
}
