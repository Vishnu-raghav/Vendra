import "./UPIPayment.css"
export function UPIPayment() {
  return (
    <div className="payment-method-content">
      <div className="upiPayment-conteiner">
        <h3 className="qr-heading">Scan QR and Pay</h3>

        <div className="QR-code-container">
            <div className="qr-code-box">
            <img className="qr-image" src="/qr-mage.avif" alt="" />
            </div>

            <div className="QR-overlay">

              <div className="total-upi-amount">
                <span className="amount-key">Amount</span>
               <span className="amount-value">432</span>
              </div>

              <div className="show-qr-code">
                <button className="show-qr-code-button">Show QR code</button>
              </div>
             

             <div className="other-upi-apps">or any other UPI app</div>

            </div>
        </div>

        <div className="transaction-precaution">
            Do not hit back or close this screen
            until the transaction is complete
        </div>
      </div>
    </div>
  );
}
