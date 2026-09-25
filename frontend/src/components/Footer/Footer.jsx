import "./Footer.css"
import { useLocation } from "react-router-dom"

export function Footer(){
    
    const location = useLocation()

    const hideFooterContent = location.pathname === "/checkout/payment"

    return(
        !hideFooterContent && (
             <div className="ecommerce-footer">
            <div className="footer-info-section">
                <h3>About</h3>
                <div className="footer-info">Contact Us</div>
                <div className="footer-info">About Us</div>
                <div className="footer-info">Career</div>
            </div>
            <div className="footer-info-section">
                <h3>About</h3>
                <div className="footer-info">Contact Us</div>
                <div className="footer-info">About Us</div>
                <div className="footer-info">Career</div>
            </div>
            <div className="footer-info-section">
                <h3>About</h3>
                <div className="footer-info">Contact Us</div>
                <div className="footer-info">About Us</div>
                <div className="footer-info">Career</div>
            </div>
           
        </div>
        )
    )
}