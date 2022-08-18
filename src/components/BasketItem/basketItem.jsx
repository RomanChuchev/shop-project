import "./basketItem.css";
function BasketItem(props) {
  const { id, name, price, quantity } = props;
  return (
    <li
      id={id}
      className="list-group-item list-group-item-action text-dark flex order"
    >
      <div>
        {name} <i className="fas fa-times m-2 text-white"></i> {quantity}{" "}
        <i className="fas fa-equals m-2 text-white"></i> {quantity * price}{" "}
        <i className="fas fa-coins small text-warning"></i>{" "}
      </div>
      <i className="fas fa-trash-alt m-2 delete"></i>
    </li>
  );
}
export { BasketItem };
