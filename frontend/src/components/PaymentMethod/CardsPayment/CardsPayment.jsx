import { PlaceOrderButton } from "../../PlaceOrderButton/PlaceOrderButton";
import { CardPaymentForm } from "../CardPaymentForm/CardPaymentForm";
import "./CardsPayment.css";

export function CardsPayment() {
  return (
    <div className="card-payment-container">
          <div className="payment-method-content">
      <CardPaymentForm />
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
