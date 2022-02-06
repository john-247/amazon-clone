import React from "react";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/Primeevent/XCM_Manual_1500x300_1218905_1138182_R1_51fe0ef1_16bf_43c7_84a2_ecda6a1f2396_jpg._CB436084429_.jpg"
          alt=""
        />
        <div>
          <h3>{user?.multiFactor.user.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};
export default Checkout;
