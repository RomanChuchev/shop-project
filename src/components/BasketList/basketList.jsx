import { BasketItem } from "../BasketItem/basketItem";
import "./basketList.css";

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    minusQuantity = Function.prototype,
    plusQuantity = Function.prototype,
  } = props;
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
        order.map((item) => (
          <BasketItem
            key={item.id}
            removeFromBasket={removeFromBasket}
            minusQuantity={minusQuantity}
            plusQuantity={plusQuantity}
            {...item}
          />
        ))
      ) : (
        <li className="list-group-item list-group-item-action text-center">
          Корзина пуста
        </li>
      )}
      {order.length ? (
        <li className="list-group-item list-group-item-action bg-primary">
          Общая стоимость: <span className="text-white">{totalPrice}</span>{" "}
          <i className="fas fa-coins small text-warning"></i>
        </li>
      ) : null}
    </ul>
  );
}

export { BasketList };
