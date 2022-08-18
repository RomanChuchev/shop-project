import { GoodsItem } from "./GoodsItem";

function GoodsList({ goods = [], addToBusket = Function.prototype }) {
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => {
        return <GoodsItem key={item.id} {...item} addToBusket={addToBusket} />;
      })}
    </div>
  );
}

export { GoodsList };
