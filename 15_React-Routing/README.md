# Rangkuman React Routing

## Apa Itu Routing

Routing adalah proses penentuan jalur atau rute dalam aplikasi, biasanya untuk navigasi antara halaman atau komponen dalam aplikasi berbasis web.

## SPA (Single Page Application)

- **Definisi**: SPA adalah aplikasi web yang memuat satu halaman HTML tunggal dan mengupdate kontennya secara dinamis tanpa perlu melakukan refresh halaman.

### Keunggulan SPA:

- Lebih cepat karena tidak perlu memuat ulang seluruh halaman.
- Pengalaman pengguna yang lebih baik karena transisi halaman yang halus.

### Kekurangan SPA:

- SEO yang sulit karena hanya ada satu halaman yang dimuat.
- Waktu muat pertama lebih lambat karena aplikasi memuat semua sumber daya di awal.

## MPA (Multi Page Application)

- **Definisi**: MPA adalah aplikasi web yang terdiri dari beberapa halaman yang memerlukan pemuatan ulang halaman untuk navigasi.

### Keunggulan MPA:

- SEO yang lebih baik karena setiap halaman memiliki URL terpisah.
- Lebih mudah dibagi dalam modul independen.

### Kekurangan MPA:

- Transisi halaman yang lambat karena setiap halaman membutuhkan pemuatan ulang.
- Pengelolaan aplikasi yang lebih rumit saat semakin besar.

---

## React Routing

React Routing adalah teknik yang digunakan untuk membuat navigasi antar komponen di aplikasi React tanpa memuat ulang halaman.

### Browser Router

- `BrowserRouter` menyediakan API berbasis browser untuk melakukan navigasi antar rute di aplikasi React.

### Route

- `Route` adalah komponen yang digunakan untuk menentukan jalur dan komponen apa yang akan dirender pada jalur tersebut.

### Path

- `path` adalah properti yang digunakan untuk mendefinisikan jalur URL pada rute.

### Components

- Komponen yang akan dirender sesuai dengan jalur yang diakses.

### Switch

- `Switch` digunakan untuk memilih salah satu dari beberapa rute yang cocok dengan URL yang diminta.

### Exact

- `exact` adalah atribut untuk memastikan bahwa rute hanya akan dirender jika jalur URL persis cocok dengan yang didefinisikan.

### Link

- `Link` digunakan untuk membuat tautan navigasi tanpa perlu memuat ulang halaman, menggantikan elemen HTML `<a>`.

---

## URL Parameter

URL parameter digunakan untuk melewatkan data melalui URL. Pada React, ini dapat dilakukan menggunakan sintaks seperti `/route/:id`.

### Perbedaan Link dan Redirect

- **Link**: Digunakan untuk navigasi antar halaman tanpa memuat ulang halaman.
- **Redirect**: Digunakan untuk mengarahkan pengguna secara otomatis ke halaman lain setelah tindakan tertentu.

---

## Hook Routing React

### useHistory

- `useHistory` adalah _hook_ yang digunakan untuk mengakses dan memanipulasi riwayat penjelajahan.

### useLocation

- `useLocation` adalah _hook_ yang memberikan informasi tentang lokasi/jalur saat ini, termasuk URL, pathname, state, dll.

### useParams

- `useParams` adalah _hook_ yang mengembalikan parameter URL yang diambil dari rute yang diakses.

### useRouteMatch

- `useRouteMatch` adalah _hook_ yang digunakan untuk mencocokkan jalur URL dengan rute yang didefinisikan.
