function GoodsItem(props) {
  const { id, name, description, price, full_background } = props;
  return (
    <div className="card" id={id} style={{ width: "auto" }}>
      <img className="card-img-top" src={full_background} alt={name} />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary">Купить</button>
        <span className="right">{price}</span>
      </div>
    </div>
  );
}

export { GoodsItem };
