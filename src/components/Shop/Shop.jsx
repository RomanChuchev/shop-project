import React, { useEffect, useContext } from "react";
import { ShopContext } from "../../context";
import { API_KEY, API_URL } from "../../config";

import Prelouder from "../Prelouder";
import GoodsList from "../GoodsList";
import Cart from "../Cart";
import "./shop.css";
import BasketList from "../BasketList";
import Alert from "../Alert";
import AlertBye from "../AlertBye";

function Shop() {
  const { loading, order, isBasketShow, alertName, alertNameBye, setGoods } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {isBasketShow ? <BasketList /> : null}
      {loading ? <Prelouder /> : <GoodsList />}
      {alertName && <Alert />}
      {alertNameBye && <AlertBye />}
    </main>
  );
}

export { Shop };
