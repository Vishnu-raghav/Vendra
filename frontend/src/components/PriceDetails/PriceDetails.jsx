export function PriceDetails() {
    return (
        <div className="price-details-container">
            <h3 className="price-details-title">Price Details</h3>

            <div className="price-details">
                <div className="price-detail-rows">
                    <div className="price-row">
                        <div className="price-label">Price</div>
                        <div className="price-value">₹234</div>
                    </div>

                    <div className="price-row">
                        <div className="price-label">Discount</div>
                        <div className="price-value">₹234</div>
                    </div>

                    <div className="price-row">
                        <div className="price-label">Delivery Charges</div>
                        <div className="price-value">₹234</div>
                    </div>
                </div>

                <div className="product-total">
                    <div className="price-row">
                        <div className="price-label">Total Amount</div>
                        <div className="price-value">₹234</div>
                    </div>

                    <div className="saved-amount">
                        You save <span className="price">₹1,345</span> on this order
                    </div>
                </div>
            </div>

            <div className="safe-payment-container">
                Safe and secure payments. Easy return. 100% Authentic products.
            </div>
        </div>
    );
}