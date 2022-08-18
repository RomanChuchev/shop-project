import "./prelouder.css";

function Prelouder() {
  return (
    <div className="spinner-grow text-light" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export { Prelouder };
