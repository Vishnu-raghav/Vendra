import { useContext, useState } from "react";
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
import { CartNavigationContext } from "../../context/CartNavigationContext";
import { PaymentMethod } from "../PaymentMethod/PaymentMethod";

export function CartPayment() {
  const [paymentMethodStep, setPaymentMethodStep] = useState("cards")

  const {navigateToSummary} = useContext(CartNavigationContext)

  return (
    
     <div className="payment-container">
      <div className="payment-header">
        <div className="go-back">
          <button
           className="backToSummaryButton"
           onClick={navigateToSummary}
           >
            <MoveLeft />
          </button>
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
            <div 
            onClick={() => setPaymentMethodStep("cards")}
            className={`payment-box-entity ${paymentMethodStep === "cards" ? "active" : ""}`}>
              <WalletCards className="payment-box-icon" />
              cards
            </div>

            <div 
            onClick={() => setPaymentMethodStep("UPI")}
            className={`payment-box-entity ${paymentMethodStep === "UPI" ? "active" : ""}`}
            >
              <CreditCard className="payment-box-icon" />
              UPI
            </div>
            <div 
            onClick={() => setPaymentMethodStep("cashOnDelivery")}
            className={`payment-box-entity ${paymentMethodStep === "cashOnDelivery" ? "active" : ""} `}>
              <IndianRupee className="payment-box-icon" />
              Cash on Delivery
            </div>
          </div>

        
            <div className="payment-method-details">
              <PaymentMethod paymentMethodStep={paymentMethodStep} />
            </div>
          
        </div>

        <div className="payment-summary">
          <PriceDetails />
        </div>
      </div>
    </div>
  );
}
