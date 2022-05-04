import React from 'react';
import Payment from './Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IlD9gG6j4QexfF0rBrBqtQRB00gxOQ5xXuuSi5q5Vo3fUAeaVsCfpQeg67YvfUBVLPUD9wEF9jCavziWrfZ3dJ700paNZljKj');
const MakePayment = ({setPayment}) => {
    return (

        <Elements stripe={stripePromise}>
            <Payment setPayment={setPayment}></Payment>
        </Elements>

    );
};

export default MakePayment;