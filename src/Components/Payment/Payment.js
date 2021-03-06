import  { useState } from 'react';
import { CardElement,useElements,useStripe } from '@stripe/react-stripe-js';

import { Button } from 'react-bootstrap';


const Payment = ({setPayment}) => {
  const [showError, setShowError] = useState("");
  const [ShowSuccess, setShowSuccess] = useState(false)
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
      setPayment(true)
      setShowSuccess(true)
      console.log('[PaymentMethod]', paymentMethod);
      setShowError("")
     
    }
  };

  return (
    <form onSubmit={handleSubmit} >
  
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
   <p style={{color:"green"}}>{ShowSuccess ? 'Payment Success': '' }</p>
        <p style={{color:"red"}}>{showError.message ? showError.message: '' }</p>
        <Button className="btn mt-2 w-50" type="submit" disabled={!stripe}>
          Pay
      </Button>
      
    </form>
  );
};
export default Payment;