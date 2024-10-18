import "./LandingPage.css";

export default function LandingPage() {
  return (
    <>
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
              <span className="navbar-toggler-icon" />
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
      <main>
        {/* hero-section */}
        <div className="hero-section">
          <div className="header">
            <h1>Better Solutions For Your Business</h1>
            <p>
              We are team of talented designers making websites with Bootstrap
            </p>
          </div>
          <div className="cta">
            <a href="#">
              <p>Get Started</p>
            </a>
            <a href="#">
              <p>Watch Video</p>
            </a>
          </div>
        </div>
        <div className="image">
          <img src="/hero-img.png.png" alt="hero-img" width="636px" />
        </div>
        {/* hero-section */}
      </main>
      <div className="title">
        <div className="join">
          <h1>Join Our Newsletter</h1>
          <label htmlFor="lorem">
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </label>
        </div>
        <div className="subscribe">
          <input type="text" id="lorem" name="lorem" required="" />
          <a href="#">
            <p>Subscribe</p>
          </a>
        </div>
      </div>
      <footer>
        <div className="menu">
          <div className="arsha">
            <h1>Arsha</h1>
            <p className="adam">
              A108 Adam Street New York, NY 535022 United States
            </p>
            <div className="text">
              <p>
                <span style={{ fontWeight: 700 }}>Phone:</span> +1 5589 55488 55
              </p>
              <p>
                <span style={{ fontWeight: 700 }}>Email:</span> info@example.com
              </p>
            </div>
          </div>
          <div className="links">
            <h1>Useful Links</h1>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="services">
            <h1>Our Services</h1>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Mangaement</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="sosial">
            <h1>Our Sosial Network</h1>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <ul>
              <li>
                <a href="#">
                  <img src="/circle.png" alt="circle" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/circle.png" alt="circle" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/circle.png" alt="circle" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/circle.png" alt="circle" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/circle.png" alt="circle" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <p className="copy">
            © Copyright <span style={{ fontWeight: 700 }}>Arsha</span>. All
            Rights Reserved
          </p>
          <p className="bootstrap">
            Designed by <span style={{ color: "#47b2e4" }}>BootstrapMade</span>
          </p>
        </div>
      </footer>
    </>
  );
}
