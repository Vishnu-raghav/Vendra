import { PlaceOrderButton } from "../../PlaceOrderButton/PlaceOrderButton";
import "./CardsPayment.css";

export function CardsPayment() {
  return (
    <div className="card-payment-container">
          <div className="payment-method-content">
      <form action="" className="card-detail-form">
        <div className="card-detail">
          <div className="card-title">Card Number</div>
          <div className="card-input-container">
            <input
              className="card-detail-input"
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              max={16}
            />
          </div>
        </div>

        <div className="card-details">
          <div className="card-detail">
            <div className="card-title">Valid Thru</div>
            <div className="card-input-container">
              <input
                className="card-detail-input"
                type="text"
                placeholder="MM / YY"
              />
            </div>
          </div>

          <div className="card-detail">
            <div className="card-title">CVV</div>
            <div className="card-input-container">
              <input
                className="card-detail-input"
                type="text"
                placeholder="CVV"
              />
            </div>
          </div>
        </div>

        <div className="place-order-button">
          <PlaceOrderButton className="payment-place-order" />
        </div>
      </form>

      
    </div>

    <div className="card-payment-note">
        <span className="card-note">Note:</span>
        <p className="note-value">
          please ensure your card can be used forn online transaction.
          <span className="learn-more"> Learn More</span>
        </p>
      </div>

    </div>
  );
}
