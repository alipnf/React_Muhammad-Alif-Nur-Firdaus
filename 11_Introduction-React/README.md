# Rangkuman Introduction React

## Apa itu React?

**React** adalah pustaka (library) JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) yang interaktif dan efisien. React dikembangkan oleh Facebook dan banyak digunakan untuk membuat aplikasi web yang cepat dan skalabel.

## Kenapa Menggunakan React?

1. **Deklaratif**: React menggunakan pendekatan deklaratif untuk membangun antarmuka, yang berarti developer dapat lebih fokus pada "apa yang harus terjadi" daripada "bagaimana melakukannya". Hal ini membuat pengembangan UI menjadi lebih mudah diprediksi dan dikelola.

2. **Berbasis Komponen**: React membagi UI menjadi komponen kecil yang dapat digunakan kembali. Setiap komponen memiliki logika dan struktur tersendiri, yang mempermudah pengembangan dan pemeliharaan aplikasi.

3. **Belajar Sekali, Tulis di Mana Saja**: Setelah Anda memahami konsep React, Anda dapat menerapkannya di berbagai platform, baik itu web, mobile (melalui React Native), atau bahkan desktop.

4. **Populer**: React adalah salah satu pustaka JavaScript yang paling populer dengan komunitas besar, dokumentasi lengkap, serta ekosistem yang kaya.

## Virtual DOM React

React menggunakan **Virtual DOM** untuk meningkatkan performa aplikasi. Virtual DOM adalah representasi ringan dari DOM asli. Ketika ada perubahan di UI, React hanya memperbarui bagian yang berubah di Virtual DOM, lalu membandingkannya dengan DOM asli dan melakukan pembaruan hanya pada elemen yang berubah. Ini membuat React lebih cepat dan efisien dibandingkan manipulasi DOM langsung.

## Setup React

### 1. Menggunakan CRA (Create React App)

CRA adalah tool yang digunakan untuk memulai proyek React dengan konfigurasi standar. Ini adalah cara termudah untuk setup proyek React tanpa harus mengonfigurasi build tools seperti Webpack atau Babel secara manual.

#### Langkah-langkah

- Jalankan perintah berikut di terminal:

  ```bash
  npx create-react-app my-app
  cd my-app
  npm start
  ```

### 2. Menggunakan Vite

**Vite** adalah build tool modern yang lebih cepat dan ringan dibandingkan dengan CRA. Vite dirancang untuk memberikan pengalaman pengembangan yang lebih cepat dengan hot-reloading yang lebih efisien. Selain itu, Vite menggunakan bundler yang lebih optimal untuk mempercepat waktu kompilasi dan pengembangan.

#### Langkah-langkah Setup Vite

- Untuk memulai proyek React dengan Vite, jalankan perintah berikut di terminal:

  ```bash
  npm create vite@latest
  cd my-vite-app
  npm install
  npm run dev
  ```
