import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import { Prelouder } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(true);

  const addToBusket = (item) => {
    console.log("Добавить в корзину", item);
    const newItem = {
      ...item,
      quantity: 1,
    };
    // setOrder([...order, item]);
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop[0].granted && setGoods(data.shop[0].granted);
        setLoading(false);
      });
  }, []);
  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? (
        <Prelouder />
      ) : (
        <GoodsList goods={goods} addToBusket={addToBusket} />
      )}
    </main>
  );
}

export { Shop };
