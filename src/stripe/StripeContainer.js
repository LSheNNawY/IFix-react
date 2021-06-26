import React, {useState} from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {Button, Col, Container, Form, Modal} from "react-bootstrap";

import {CheckoutForm} from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51J5eE2E2CuIQ1rCYOfgWBHy9aO9SGrJGNwBVv2B5pvLXeuZY0ewCm95S3r62o3sDXFbiUDAgu25K32jmGEsLVmbu00TGEXnyBj";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = (props) => {
    const {job_id, price, show, onHide} = props;

    return (
        <Modal
            {...props}
        >
            <Elements stripe={stripeTestPromise}>
            <CheckoutForm job_id={job_id} price={price} onHide={onHide} show={show}/>
        </Elements>
        </Modal>
    );
};

export default Stripe;