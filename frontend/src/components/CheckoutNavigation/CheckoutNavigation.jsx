import './CheckoutNavigation.css'
import { useLocation } from 'react-router-dom'

export function CheckoutNavigation() {

    const location = useLocation()

    const showNavigation =
        location.pathname === "/checkout/summary"

    if (!showNavigation) {
        return null
    }

    return (
        <div className="checkout-navigation">

            <div className="checkout-stepper">

                <div className="checkout-step completed">
                    <div className="step-circle">
                        ✓
                    </div>

                    <div className="step-label">
                        Address
                    </div>
                </div>

                <div className="step-line"></div>

                <div className="checkout-step active">
                    <div className="step-circle">
                        2
                    </div>

                    <div className="step-label">
                        Order Summary
                    </div>
                </div>

                <div className="step-line"></div>

                <div className="checkout-step">
                    <div className="step-circle">
                        3
                    </div>

                    <div className="step-label">
                        Payment
                    </div>
                </div>

            </div>

        </div>
    )
}