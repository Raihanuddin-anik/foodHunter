import react, { useState } from 'react';
import { CardElement,useElements,useStripe } from '@stripe/react-stripe-js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';



const Payment = ({setPayment}) => {
  const [showError, setShowError] = useState("");
  console.log(showError)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setShowError(error)
      setPayment(false)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setShowError("")
      setPayment(true)
    }
  };

  return (
    <form onSubmit={handleSubmit} >
  <h4 className="p-5">Pay By Your Any Card</h4>
  {/* <FontAwesomeIcon className="fs-3 m-3" icon={faMoneyBillAlt} /> */}
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <br/>
        <p style={{color:"red"}}>{showError.message ? showError.message + "try with 4242424242424242": '' }</p>
        <button className="btn m-5" type="submit" disabled={!stripe}>
          Pay
      </button>
      
    </form>
  );
};
export default Payment;