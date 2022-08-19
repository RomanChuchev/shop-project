import "./basketItem.css";
function BasketItem(props) {
  const {
    id,
    name,
    price,
    icon,
    quantity,
    removeFromBasket = Function.prototype,
    minusQuantity = Function.prototype,
    plusQuantity = Function.prototype,
  } = props;
  return (
    <li className="list-group-item list-group-item-action text-dark flex order small">
      <div>
        <img
          className="card-img-top margin-right"
          style={{ width: "2rem", height: "2rem" }}
          src={icon}
          alt={name}
        />
        <span className="margin-right">{name}</span>{" "}
        <span className="small">{price}</span>
        <i className="fas fa-coins small text-warning"></i>{" "}
        <i className="fas fa-times m-2 text-white"></i>{" "}
        <span>
          <button
            className="btn btn-primary btn-inc-dec"
            onClick={() => minusQuantity(id)}
          >
            <i className="fas fa-minus small"></i>
          </button>
          <button className="btn btn-dark btn-inc-dec">
            {" "}
            <strong>{quantity}</strong>{" "}
          </button>
          <button
            className="btn btn-primary btn-inc-dec"
            onClick={() => plusQuantity(id)}
          >
            <i className="fas fa-plus small "></i>
          </button>
        </span>{" "}
        <i className="fas fa-equals m-2 text-white"></i>{" "}
        <strong>{quantity * price}</strong>{" "}
        <i className="fas fa-coins small text-warning"></i>{" "}
      </div>
      <i
        onClick={() => removeFromBasket(id)}
        className="fas fa-trash-alt m-2 delete"
      ></i>
    </li>
  );
}
export { BasketItem };
