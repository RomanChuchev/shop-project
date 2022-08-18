function GoodsItem(props) {
  const { id, name, description, images } = props;
  const { full_background } = images;
  return (
    <div className="card" id={id} style={{ width: "auto" }}>
      <img className="card-img-top" src={full_background} alt={name} />

      <div className="card-body text-center">
        <h5 className="card-text small">{description}</h5>
        <button className="btn btn-dark">Купить</button>
      </div>
    </div>
  );
}

export { GoodsItem };
