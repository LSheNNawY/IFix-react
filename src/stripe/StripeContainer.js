import React from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {Modal} from "react-bootstrap";

import {CheckoutForm} from "./CheckoutForm";

const PUBLIC_KEY = process.env.REACT_APP_ENV_STRIPE_PUBLIC_KEY;

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = (props) => {
    const {job_id, price, show, onHide,setJob} = props;

    return (
        <Modal
            {...props}

        >
            <Elements stripe={stripeTestPromise}>
            <CheckoutForm job_id={job_id} price={price} setJob={setJob}  onHide={onHide} show={show}/>
            </Elements>
        </Modal>
    );
};

export default Stripe;