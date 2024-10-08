# Rangkuman React Fundamental

## JSX

- **Singkatan JSX**: JavaScript XML.
- **Kenapa menggunakan JSX**: Memudahkan penulisan elemen React dengan sintaks yang mirip HTML.
- **JSX** adalah cara menulis elemen UI dengan gaya HTML yang lebih ringkas dan intuitif.
- **React.createElement** adalah cara manual untuk membuat elemen React tanpa JSX, yang kurang intuitif.
- **Ekspresi pada JSX**: JSX dapat menyisipkan ekspresi JavaScript di dalamnya dengan kurung kurawal `{}`.

## React Component

- **Apa itu Komponen**: Unit terkecil dalam React yang digunakan untuk membangun antarmuka pengguna (UI).
- **Membagi UI menjadi beberapa Komponen**: Setiap bagian UI bisa dibagi menjadi komponen-komponen kecil yang reusable.
- **Functional Component**: Komponen berbasis fungsi yang mengembalikan elemen JSX.
- **Class Component**: Komponen berbasis kelas yang mendukung lifecycle methods.

## Props

- **Singkatan Props**: Properti atau atribut yang diberikan ke komponen untuk mengatur perilaku atau tampilan.
- **One Way Data Flow**: Data dari parent component mengalir satu arah ke child component melalui props.

## React Lifecycle

- **Mounting**: Tahap saat komponen dibuat dan dimasukkan ke dalam DOM (misalnya `componentDidMount`).
- **Updating**: Tahap saat komponen diperbarui karena perubahan state atau props (misalnya `componentDidUpdate`).
- **Unmounting**: Tahap saat komponen dihapus dari DOM (misalnya `componentWillUnmount`).

## Conditional Rendering

- **Render Bersyarat**: Menampilkan elemen atau komponen berdasarkan kondisi tertentu (menggunakan `if`, `ternary operator`, dll).
- **Render List**: Menampilkan daftar elemen menggunakan fungsi `.map()`.
- **Key**: Atribut unik yang digunakan untuk mengidentifikasi elemen dalam list, penting untuk performa dan konsistensi render.

## Directory Struktur

- **Pengelompokan Berdasarkan Fitur**: Struktur file yang mengelompokkan komponen sesuai fungsionalitas atau fitur yang mereka tangani.
- **Berdasarkan File**: Mengelompokkan file sesuai tipe, seperti komponen, layanan, atau utilitas.
- **Hindari Terlalu Banyak Nesting**: Menghindari folder atau struktur yang terlalu dalam untuk mempermudah navigasi dan pengelolaan kode.

## Styling

- **Classes dan CSS**: Menggunakan `className` dan file CSS terpisah untuk styling komponen.
- **Atribut Style**: Menambahkan styling inline dengan objek JavaScript.
- **Modul CSS**: Menggunakan modul CSS untuk menghindari konflik nama class dengan scoping otomatis.
