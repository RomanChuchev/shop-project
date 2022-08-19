import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../config";

import Prelouder from "../Prelouder";
import GoodsList from "../GoodsList";
import Cart from "../Cart";
import "./shop.css";
import BasketList from "../BasketList";
import Alert from "../Alert";
import AlertBye from "../AlertBye";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");
  const [alertNameBye, setAlertNameBye] = useState("");

  const addToBusket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };

  const plusQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        return {
          ...el,
          quantity: el.quantity + 1,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  const minusQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId && el.quantity > 0) {
        return {
          ...el,
          quantity: el.quantity - 1,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  const closeAlert = () => {
    setAlertName("");
  };
  const closeAlertBye = () => {
    setAlertNameBye("");
  };

  const clearGoods = () => {
    setAlertNameBye("Close");
    setOrder([]);
  };

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {isBasketShow ? (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          plusQuantity={plusQuantity}
          minusQuantity={minusQuantity}
          clearGoods={clearGoods}
        />
      ) : null}
      {loading ? (
        <Prelouder />
      ) : (
        <GoodsList goods={goods} addToBusket={addToBusket} />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
      {alertNameBye && (
        <AlertBye name={alertNameBye} closeAlertBye={closeAlertBye} />
      )}
    </main>
  );
}

export { Shop };
