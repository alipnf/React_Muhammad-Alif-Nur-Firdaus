export default function Welcome() {
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/assets/welcome-image.png"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Welcome"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to My Portfolio!</h1>
          <p className="py-6">
            I’m a passionate developer dedicated to building modern, efficient,
            and innovative web applications. Explore my work and let’s create
            something amazing together!
          </p>
          <a href="/portfolio" className="btn btn-primary">
            Explore My Work
          </a>
        </div>
      </div>
    </div>
  );
}
