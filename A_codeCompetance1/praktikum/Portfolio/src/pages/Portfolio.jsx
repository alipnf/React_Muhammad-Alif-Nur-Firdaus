export default function Portfolio() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center ">
        <h1 className="mb-4 text-4xl font-bold">Page Under Construction</h1>
        <p className="mb-8 text-lg">
          We are currently working on this page. Please check back later!
        </p>
        <img
          src="/assets/404.png"
          alt="Under Construction"
          className="max-w-md"
        />
        <a href="/" className="btn btn-primary mt-6">
          Go Back Home
        </a>
      </div>
    </>
  );
}
