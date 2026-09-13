import { PlaceOrderButton } from "../PlaceOrderButton/PlaceOrderBbutton";
import { PriceDetails } from "../PriceDetails/PriceDetails";
import "./CartPayment.css";
import {
  MoveLeft,
  LockKeyhole,
  ThumbsUp,
  WalletCards,
  CreditCard,
  IndianRupee,
} from "lucide-react";

export function CartPayment() {
  return (
    <div className="payment-container">
      <div className="payment-header">
        <div className="go-back">
          <MoveLeft />
          <h4>Complete payment</h4>
        </div>

        <div className="payment-secure">
          <LockKeyhole className="payment-secure-icon" />
          100% secure
        </div>
      </div>

      <div className="payment-content">
        <div className="payment-methods">
          <div className="payment-method-item">
            <div className="payment-box-entity">
              <ThumbsUp className="payment-box-icon" />
              Recommended for you
            </div>
            <div className="payment-box-entity">
              <WalletCards className="payment-box-icon" />
              cards
            </div>
            <div className="payment-box-entity">
              <CreditCard className="payment-box-icon" />
              UPI
            </div>
            <div className="payment-box-entity">
              <IndianRupee className="payment-box-icon" />
              Cash on Delivery
            </div>
          </div>

        
            <div className="payment-method-details">
              <div className="payment-method-content">
                <div className="payment-method-title">Cash on Delivery</div>

                <div className="payment-method-description">
                  Due to handling costs, a normal fee of ₹7 will be charged for
                  orders placed using this option. Avoid this fee by paying
                  online now.
                </div>

                <PlaceOrderButton />
              </div>
            </div>
          
        </div>

        <div className="payment-summary">
          <PriceDetails />
        </div>
      </div>
    </div>
  );
}
