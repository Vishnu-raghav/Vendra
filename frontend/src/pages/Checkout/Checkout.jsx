// import { useState } from "react";
// import { Cart } from "../../components/Cart/Cart";
// import { CartSummary } from "../../components/CartSummary/CartSummary";
import { Outlet } from "react-router-dom";

export function Checkout(){
    // const [checkOutStep, setCheckOutStep] = useState("cart")

    return(
        <>
         <Outlet />
        </>
    )
}