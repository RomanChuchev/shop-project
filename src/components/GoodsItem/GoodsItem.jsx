import { useContext } from "react";
import { ShopContext } from "../../context";
import "./goodsItem.css";

function GoodsItem(props) {
  const { id, name, price, description, icon, full_background } = props;

  const { addToBusket } = useContext(ShopContext);

  return (
    <div className="card" style={{ width: "auto" }}>
      <img className="card-img-top" src={full_background} alt={name} />

      <div className="card-body text-center">
        <h5 className="card-text small">{description}</h5>
        <button
          className="btn btn-dark"
          style={{ fontSize: "x-small" }}
          onClick={() => addToBusket({ id, name, price, icon })}
        >
          В корзину
        </button>
      </div>
    </div>
  );
}

export { GoodsItem };
