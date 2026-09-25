import "./PaymentFooter.css"

export function PaymentFooter(){
    return(
     <div className="payment-footer">
        <div className="Payment-policies-container">
            policies: 
            <span className="policies">Return Policy</span> |
            <span className="policies">Term of Use</span> |
            <span className="policies">Security</span> |
            <span className="policies">Privacy</span> |
        </div>
        <div className="credit">2026 &bull; Vendra</div>
        <div className="payment-help">
            Need help? Visit the 
            <span className="payment-help-option">Help Center</span>
            or 
            <span className="payment-help-option">Contact Us</span>
        </div>
     </div>
    )
}