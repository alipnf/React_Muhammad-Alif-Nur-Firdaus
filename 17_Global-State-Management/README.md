# Rangkuman Global State Management

## Kapan Saat yang Tepat Menggunakan Redux

Redux cocok digunakan ketika:

- Aplikasi memiliki banyak state yang dibutuhkan di berbagai komponen.
- Aplikasi memiliki logika state yang kompleks atau banyak state yang perlu dikelola.
- State aplikasi sering diperbarui atau ada banyak interaksi user.
- Dibutuhkan mekanisme debugging yang kuat dan history management yang jelas.

## Redux Library

Redux adalah pustaka JavaScript untuk mengelola state aplikasi dengan konsep _one-way data flow_. State disimpan di satu tempat yang terpusat, disebut **store**.

## React Redux

**React Redux** adalah binding resmi antara Redux dan React yang memudahkan integrasi Redux dengan komponen React. Ini menyediakan API sederhana seperti `useSelector` dan `useDispatch` untuk mengakses dan memodifikasi state dari Redux store.

## Redux Toolkit

**Redux Toolkit** adalah paket resmi dari Redux yang bertujuan untuk menyederhanakan pengaturan dan penulisan kode Redux. Toolkit ini menyediakan fitur seperti:

- Simplifikasi penulisan **reducers** dan **actions**.
- Dukungan otomatis untuk **immer.js** (untuk mengelola state secara immutability dengan lebih mudah).
- Dukungan langsung untuk **redux-thunk** untuk melakukan logika asinkron.

## Redux DevTools Extension

Redux DevTools Extension adalah alat pengembangan yang memungkinkan pengembang untuk:

- Melacak perubahan state secara real-time.
- Melihat **actions** yang telah dikirim.
- _Time traveling_ melalui state aplikasi dengan mengulang kembali atau membatalkan perubahan.

## Komponen Penting di Redux

### Action

**Action** adalah objek JavaScript sederhana yang menggambarkan perubahan yang ingin dilakukan pada state. Setiap action harus memiliki properti `type` yang mendeskripsikan jenis action.

### Reducer

**Reducer** adalah fungsi yang menentukan bagaimana state aplikasi berubah sebagai respons terhadap **action** yang dikirimkan. Reducer menerima state saat ini dan action sebagai argumen, kemudian mengembalikan state baru.

### Store

**Store** adalah objek yang menyimpan seluruh state aplikasi. Ini adalah sumber tunggal kebenaran di Redux, dan state hanya bisa diubah melalui dispatching actions.

## Memakai dan Mengubah State

### Hooks

**React Redux** menyediakan hooks seperti:

- `useSelector`: digunakan untuk membaca data dari Redux store.
- `useDispatch`: digunakan untuk mengirim **actions** untuk memperbarui state.

### Connect

**connect** adalah metode lama di **React Redux** yang digunakan untuk menghubungkan komponen React ke Redux store. Meski masih digunakan, hooks kini menjadi metode yang lebih populer dan modern.

## Redux Menggunakan Struktur One-Way Data Flow

Redux menerapkan konsep **one-way data flow**, yang berarti:

- Komponen hanya bisa mengirim **actions** ke **store** melalui dispatch.
- **Reducer** akan memproses action dan mengembalikan state baru.
- State yang baru kemudian disebarkan kembali ke komponen.

## Redux Thunk

**Redux Thunk** adalah middleware yang memungkinkan Anda menulis logika asinkron di Redux. Ini memungkinkan dispatching actions di dalam fungsi alih-alih langsung mengirim action object.

### Kenapa Perlu Redux Thunk

Redux Thunk diperlukan untuk menangani operasi asinkron (misalnya, API call) karena secara default Redux hanya mendukung pengiriman action yang sinkron.

### Asynchronous Dispatch

Dengan **redux-thunk**, kita bisa mengirim action asinkron. Misalnya, menunggu respons dari API dan kemudian mengirim action baru setelah mendapatkan hasil.

### Conditional Dispatch

**Redux Thunk** juga memungkinkan conditional dispatch, di mana kita bisa mengirim action hanya jika kondisi tertentu terpenuhi (misalnya, hanya mengirim action jika user sudah login).
