import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const CartNavigationContext = createContext()

export function CartNavigationProvider({children}){

      const navigate = useNavigate();

    function navigateToSummary() {
      navigate("/checkout/summary");
    }

     function navigateToPayment(){
        navigate("/checkout/payment")
    }


    return(
      <CartNavigationContext.Provider 
      value={
        {navigateToSummary, navigateToPayment}
    }
      >
        {children}
      </CartNavigationContext.Provider>
    )

}

