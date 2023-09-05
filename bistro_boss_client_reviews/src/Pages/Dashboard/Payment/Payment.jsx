import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="w-full px-10">
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            <SectionTitle subHeading={'Please proceed to'} heading={'Payment'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;