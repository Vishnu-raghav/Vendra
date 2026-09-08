import { useState } from "react";
import { Cart } from "../../components/Cart/Cart";
import { CartSummary } from "../../components/CartSummary/CartSummary";

export function Checkout(){
    const [checkOutStep, setCheckOutStep] = useState("cart")

    return(
        <>
        {checkOutStep === "cart" && 
         <Cart setCheckOutStep = {setCheckOutStep} />
        }
        {
            checkOutStep === "summary" &&
            <CartSummary setCheckOutStep = {setCheckOutStep} />
        }
        </>
    )
}