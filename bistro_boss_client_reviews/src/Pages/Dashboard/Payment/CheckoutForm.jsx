import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import './checkoutForm.css';

const CheckoutForm = ({ cart, price }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transcriptionId, setTranscriptionId] = useState('');


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
            console.log('error message', error)
        }
        else {
            setCardError('');
            console.log('paymentMethod', paymentMethod)
        }
        // processing start now;
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'unknown',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent)

        // processing si stop;
        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTranscriptionId(paymentIntent.id);
            // sev payment information to the server side;
            const payment = {
                email: user?.email,
                transcriptionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                status: 'service pending',
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                itemName: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data.deleteResult)
                    if (res.data) {
                        // Display conform;
                    }
                })
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                <button className="btn btn-active btn-primary btn-sm mt-7" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-400 mt-2">{cardError}</p>}
            {transcriptionId && <p>Transcription Completed ID: <span className="text-green-400 mt-5 text-xl">{transcriptionId}</span></p>}
        </>
    );
};

export default CheckoutForm;