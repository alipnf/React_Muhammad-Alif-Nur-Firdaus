export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid px-5">
          <a className="navbar-brand fw-semibold" href="#">
            Simple Header
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-md-end"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-3 mt-3 mt-md-0">
              <li className="nav-item bg-primary rounded">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
