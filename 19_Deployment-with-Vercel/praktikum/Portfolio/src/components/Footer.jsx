export default function Footer() {
  return (
    <footer className="mt-10 p-6 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Kolom Kiri */}
        <div className="flex flex-col items-start">
          <p className="mb-4 text-lg font-bold">Alipnf Portfolio</p>
          <div className="flex space-x-4">
            <a
              href="https://web.facebook.com/alipnf"
              className="text-blue-400 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://github.com/alipnf"
              className="text-blue-400 hover:underline"
            >
              Github
            </a>
            <a
              href="https://www.instagram.com/_alipnf/"
              className="text-blue-400 hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Kolom Tengah */}
        <div className="flex flex-col items-center">
          <p className="text-sm">Phone: 081229845771</p>
          <p className="text-sm">Address: Kudus, Central Java</p>
        </div>

        {/* Kolom Kanan */}
        <div className="flex flex-col items-end">
          <p className="text-sm">© 2024 Alipnf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
