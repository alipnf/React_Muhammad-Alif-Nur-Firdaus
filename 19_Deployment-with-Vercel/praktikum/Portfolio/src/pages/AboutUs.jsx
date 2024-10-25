export default function AboutUs() {
  return (
    <div className="hero min-h-screen">
      <div className="container mx-auto p-6">
        <h2 className="mb-6 text-center text-4xl font-bold">About Me</h2>
        <div className="flex flex-col items-center md:flex-row">
          <img
            src="/assets/about-us-image.png"
            alt="About Me"
            className="mb-6 w-full rounded-lg shadow-lg md:mb-0 md:mr-6 md:w-1/2"
          />
          <div className="md:w-1/2">
            <p className="mb-4 text-lg">
              Saya adalah seorang pengembang web yang berdedikasi untuk
              menciptakan solusi web yang inovatif. Dengan pengalaman dan
              pengetahuan yang terus berkembang, saya berkomitmen untuk
              memberikan hasil terbaik dalam setiap proyek yang saya kerjakan.
            </p>
            <p className="mb-4 text-lg">
              Saat ini, saya mendalami teknologi front-end, khususnya React.
              React memungkinkan saya untuk membangun aplikasi web yang
              interaktif dan efisien, dengan komponen yang dapat digunakan
              kembali dan pengelolaan state yang lebih mudah.
            </p>
            <p className="text-lg">
              Saya percaya bahwa teknologi dapat mengubah cara orang
              berinteraksi dengan dunia, dan saya ingin menjadi bagian dari
              perjalanan itu. Mari bersama-sama menciptakan masa depan yang
              lebih baik!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
