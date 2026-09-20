import "./UPIPayment.css"
export function UPIPayment() {
  return (
    <div className="payment-method-content">
      <div className="upiPayment-conteiner">
        <h2 className="qr-heading">Scan QR and Pay</h2>
        <div className="QR-code-container">
            <div className="qr-code-box">
            <img className="qr-image" src="/qr-mage.avif" alt="" />
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
