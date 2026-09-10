import "./CartPayment.css"
import { 
 MoveLeft,
 LockKeyhole,
 ThumbsUp
 } from "lucide-react";

export function CartPayment(){

    return(
        <div className="payemnt-container">
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
            <div className="payment-box">
                <div className="payment-box-entity">
                    <ThumbsUp />
                    Recommended for you
                </div>
            </div>
            <div className="payment-box"></div>
            <div className="payment-box"></div>
            
        </div>
    )
}