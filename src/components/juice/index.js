import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {BeatLoader} from "react-spinners"

import { Container, CheckoutDiv, PriceDiv, Button, JuiceName, JuiceDesc, JuiceImg } from "./juiceStyle";

import MangoImage from "../../images/mango.svg";
import AvocadoImage from "../../images/avocado.svg";
import PassionImage from "../../images/passion.svg";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51Ks44kKyYiGvhI7ZMHSpujNsdIVncNjVbCdYdUQE6NblwWlQTTlH9oNR3QQ7XL9fYCmOWOrNm5ZMlb6DY7cwiA1e00bB7RoEZE");
  }
  return stripePromise;
};


export const MangoJuice = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1KwW6OKyYiGvhI7Zd8nXK0eG",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/qrcode/mango`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
   
    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <Container >
    <JuiceName >Mango Juice</JuiceName>
    <JuiceDesc >
    Refreshing drink made using fresh Mango fruits.
    </JuiceDesc>
   
    <JuiceImg
      
      src={MangoImage}
      alt="Product"
    />
    <CheckoutDiv>
    <PriceDiv>1,200<sup style={{fontSize:"1rem", color:"#0A8F8B"}} >TZS</sup></PriceDiv>
    <Button
      
      onClick={redirectToCheckout}
      disabled={isLoading}
    >
     
     {isLoading ? <BeatLoader color="#0A8F8B"/>: "Buy"}
    </Button>
    </CheckoutDiv>
  </Container>
  );
};

export const PassionJuice = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1KwWK6KyYiGvhI7ZvQVoXh4C",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/qrcode/passion`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
   
    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <Container >
      <JuiceName >Passion Juice</JuiceName>
      <JuiceDesc >
      Refreshing drink made using fresh Passion fruits.
      </JuiceDesc>
     
      <JuiceImg
        
        src={PassionImage}
        alt="Product"
      />
      <CheckoutDiv>
      <PriceDiv>1,200<sup style={{fontSize:"1rem", color:"#0A8F8B"}} >TZS</sup></PriceDiv>
      <Button
        
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
       
        
       {isLoading ? <BeatLoader color="red"/>: "Buy"}
        
      </Button>
      </CheckoutDiv>
    </Container>
  );
};

export const AvocadoJuice = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1KwWCbKyYiGvhI7ZUOsn4oMQ",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/qrcode/avocado`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
   
    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <Container >
    <JuiceName >Avocado Juice</JuiceName>
    <JuiceDesc >
    Refreshing drink made using fresh Avocado fruits.
    </JuiceDesc>
   
    <JuiceImg
      
      src={AvocadoImage}
      alt="Product"
    />
    <CheckoutDiv>
    <PriceDiv>1,200<sup style={{fontSize:"1rem", color:"#0A8F8B"}} >TZS</sup></PriceDiv>
    <Button
      
      onClick={redirectToCheckout}
      disabled={isLoading}
    >
     
      
     {isLoading ? <BeatLoader color="red"/>: "Buy"}
     
    </Button>
    </CheckoutDiv>
  </Container>
  );
};


