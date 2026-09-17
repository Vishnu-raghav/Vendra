import { CardsPayment } from "./CardsPayment"
import { CashOnDelivery } from "./CashOnDelivery"
import { RecommendedPayment } from "./RecommendedPayment"
import { UPIPayment } from "./UPIPayment"

export function PaymentMethod({paymentMethodStep}){
   
    return(
  <>
  {
         paymentMethodStep === "recommended" && (
            <RecommendedPayment />
            )
            

        }

         {
            paymentMethodStep === "cards" && (
            <CardsPayment />
            )
        }

        {
            paymentMethodStep === "UPI" && (
            <UPIPayment />
            )
        }

          {
            paymentMethodStep === "cashOnDelivery" && (
             <CashOnDelivery />
            )
            

        }

  </>
       
    )
}