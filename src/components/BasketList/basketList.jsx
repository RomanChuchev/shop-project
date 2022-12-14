import { useContext } from "react";
import { ShopContext } from "../../context";
import { BasketItem } from "../BasketItem/basketItem";
import "./basketList.css";

function BasketList() {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    clearGoods = Function.prototype,
  } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => sum + el.price * el.quantity, 0);

  return (
    <ul className="list-group basket-list">
      <li className="flex list-group-item list-group-item-action bg-primary border-item ">
        Корзина
        <span className="close" aria-hidden="true" onClick={handleBasketShow}>
          &times;
        </span>
      </li>

      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className="list-group-item list-group-item-action text-center">
          Корзина пуста
        </li>
      )}
      {order.length ? (
        <li className="flex list-group-item list-group-item-action bg-primary">
          <span>
            Общая стоимость: <span className="text-white">{totalPrice}</span>{" "}
            <i className="fas fa-coins small text-warning"></i>
          </span>
          <button className="btn btn-info checkout" onClick={clearGoods}>
            Оформить заказ <i className="fas fa-wallet small text-warning"></i>
          </button>
        </li>
      ) : null}
    </ul>
  );
}

export { BasketList };
