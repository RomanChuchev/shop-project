import { BasketItem } from "../BasketItem/basketItem";
import "./basketList.css";

function BasketList({ order = [], handleBasketShow = Function.prototype }) {
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
        <li className="list-group-item list-group-item-action">
          Корзина пуста
        </li>
      )}
      <li className="list-group-item list-group-item-action bg-primary">
        Общая стоимость: <span className="text-white">{totalPrice}</span>{" "}
        <i className="fas fa-coins small text-warning"></i>
      </li>
    </ul>
  );
}

export { BasketList };
