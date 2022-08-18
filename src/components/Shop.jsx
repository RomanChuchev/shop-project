import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import { Prelouder } from "./Preloader";
import { GoodsList } from "./GoodsList";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

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
      {loading ? <Prelouder /> : <GoodsList goods={goods} />}
    </main>
  );
}

export { Shop };
