import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { PlaceOrderButton } from "../../PlaceOrderButton/PlaceOrderButton";
import "./CardPaymentForm.css";

function isValidCardNumber(cardNumber) {
  const digits = cardNumber.replace(/\s/g, "");

  let sum = 0;
  let shouldDouble = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = Number(digits[i]);

    if (shouldDouble) {
      digit = digit * 2;

      if (digit > 9) {
        digit = digit - 9;
      }
    }

    sum += digit;

    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

function isValidExpiry(expiry) {
  const cleanExpiry = expiry.replace(/\s/g, "");

  const [month, year] = cleanExpiry.split("/");

  if (!month || !year) {
    return false;
  }

  const expiryMonth = Number(month);
  const expiryYear = Number(year);

  if (expiryMonth < 1 || expiryMonth > 12) {
    return false;
  }

  const currentDate = new Date();

  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  if (expiryYear < currentYear) {
    return false;
  }

  if (expiryYear === currentYear && expiryMonth < currentMonth) {
    return false;
  }

  return true;
}

const cardPaymentSchema = z.object({
  cardNumber: z
    .string()
    .min(1, "Card number is required")
    .refine((value) => {
      const digits = value.replace(/\s/g, "");

      return /^\d+$/.test(digits);
    }, "Card number can contain only numbers")
    .refine((value) => {
      const digits = value.replace(/\s/g, "");

      return digits.length === 16;
    }, "Card number must contain 16 digits")
    .refine((value) => {
      return isValidCardNumber(value);
    }, "Invalid card number"),

  expiry: z
    .string()
    .min(1, "Expiry date is required")
    .regex(/^(0[1-9]|1[0-2])\s\/\s\d{2}$/, "Enter expiry as MM / YY")
    .refine((value) => isValidExpiry(value), "Card has expired"),

  cvv: z
    .string()
    .min(1, "CVV is required")
    .regex(/^\d{3,4}$/, "CVV must contain 3 or 4 digits"),
});

export function CardPaymentForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(cardPaymentSchema),
    defaultValues: {
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  });

  const handleCardNumberChange = (event) => {
    let value = event.target.value;

    value = value.replace(/\D/g, "");

    value = value.slice(0, 16);

    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");

    setValue("cardNumber", value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleExpiryChange = (event) => {
    let value = event.target.value;

    value = value.replace(/\D/g, "");

    value = value.slice(0, 4);

    if (value.length > 2) {
      value = value.slice(0, 2) + " / " + value.slice(2);
    }

    setValue("expiry", value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleCVVChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    value = value.slice(0, 4);

    setValue("cvv", value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const onSubmit = (data) => {
    console.log("Valid card details:", data);
    // payment gateway call
  };

  return (
    <form className="card-detail-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="card-detail">
        <div className="card-title">Card Number</div>

        <div className="card-input-container">
          <input
            className="card-detail-input"
            type="text"
            inputMode="numeric"
            placeholder="XXXX XXXX XXXX XXXX"
            maxLength={19}
            {...register("cardNumber", {
              onChange: handleCardNumberChange,
            })}
          />
        </div>

        <p className="input-error">{errors.cardNumber?.message || ""}</p>
      </div>

      <div className="card-details">
        <div className="card-detail">
          <div className="card-title">Valid Thru</div>

          <div className="card-input-container">
            <input
              className="card-detail-input"
              type="text"
              inputMode="numeric"
              placeholder="MM / YY"
              maxLength={7}
              {...register("expiry", {
                onChange: handleExpiryChange,
              })}
            />
          </div>

          <p className="input-error">{errors.expiry?.message || ""}</p>
        </div>

        <div className="card-detail">
          <div className="card-title">CVV</div>

          <div className="card-input-container">
            <input
              className="card-detail-input"
              type="password"
              inputMode="numeric"
              placeholder="CVV"
              maxLength={4}
              {...register("cvv", {
                onChange: handleCVVChange,
              })}
            />
          </div>

          <p className="input-error">{errors.cvv?.message || ""}</p>
        </div>
      </div>
      <div className="place-order-button">
        <PlaceOrderButton className="payment-place-order" />
      </div>
    </form>
  );
}
