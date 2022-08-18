function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
      <div className="container-fluid ">
        <h1 className="lead" href="#">
          React Shop
        </h1>

        <a
          className="btn btn-outline-light btn-header btn-sm"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/RomanChuchev"
          role="button"
        >
          Repo
        </a>
      </div>
    </nav>
  );
}

export { Header };
