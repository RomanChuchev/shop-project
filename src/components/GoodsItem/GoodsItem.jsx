import { useState, useContext, useEffect } from "react";
import { ShopContext } from "../../context";
import "./goodsItem.css";

function GoodsItem(props) {
  const { id, name, price, description, icon, full_background } = props;

  const [isAdd, setIsAdd] = useState(false);
  const {
    addToBusket,
    minusQuantity,
    plusQuantity,
    order = [],
    removeFromBasket,
  } = useContext(ShopContext);

  const quantity = order
    .map((el) => {
      if (el.id === id) {
        return el.quantity;
      } else {
        return null;
      }
    })
    .join("");

  useEffect(() => {
    if (quantity > 0) {
      setIsAdd(true);
    } else {
      removeFromBasket(id);
      setIsAdd(false);
    }
    // eslint-disable-next-line
  }, [quantity]);

  return (
    <div className="card" style={{ width: "auto" }}>
      <img className="card-img-top" src={full_background} alt={name} />

      <div className="card-body text-center">
        <h5 className="card-text small">{description}</h5>
        {isAdd ? (
          <span>
            <button
              className="btn btn-dark btn-inc-dec"
              onClick={() => {
                minusQuantity(id);
              }}
            >
              <i className="fas fa-minus small"></i>
            </button>
            <button className="btn btn-light btn-inc-dec text-dark">
              {" "}
              <strong>{quantity}</strong>
            </button>
            <button
              className="btn btn-dark btn-inc-dec"
              onClick={() => {
                plusQuantity(id);
              }}
            >
              <i className="fas fa-plus small "></i>
            </button>
          </span>
        ) : (
          <button
            className="btn btn-dark"
            style={{ fontSize: "x-small" }}
            onClick={() => {
              addToBusket({ id, name, price, icon });
            }}
          >
            В корзину
          </button>
        )}
      </div>
    </div>
  );
}

export { GoodsItem };
