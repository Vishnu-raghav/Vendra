import { CardsPayment } from "./CardsPayment/CardsPayment";
import { CashOnDelivery } from "./CashOnDelivery/CashOnDelivery";
// import { RecommendedPayment } from "./RecommendedPayment/RecommendedPayment";
import { UPIPayment } from "./UPIPayment/UPIPayment";

export function PaymentMethod({ paymentMethodStep }) {
  return (
    <>
      {/* {paymentMethodStep === "recommended" && <RecommendedPayment />} */}

      {paymentMethodStep === "cards" && <CardsPayment />}

      {paymentMethodStep === "UPI" && <UPIPayment />}

      {paymentMethodStep === "cashOnDelivery" && <CashOnDelivery />}
    </>
  );
}
