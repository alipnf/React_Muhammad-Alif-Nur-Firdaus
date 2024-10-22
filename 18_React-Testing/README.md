# Rangkuman React Testing

## Apa itu Testing?

Testing adalah proses memverifikasi bahwa test assertion kita benar dan memastikan bahwa kode kita tetap bekerja dengan benar sepanjang masa aplikasi. Dengan testing, kita bisa mendeteksi bug dan menjaga stabilitas aplikasi seiring berkembangnya fitur.

## Manfaat Testing

- Membantu menemukan bug sejak dini.
- Memberikan rasa percaya diri saat melakukan perubahan kode.
- Menjamin stabilitas aplikasi dalam jangka panjang.

## Kategori Testing

1. **Rendering component trees**: Menguji bahwa komponen di-render dengan benar.
2. **Menjalankan aplikasi lengkap**: Menguji aplikasi secara keseluruhan untuk memverifikasi bahwa seluruh komponen bekerja bersama dengan benar.

## Kecepatan Iterasi vs Environment yang Realistis

Dalam testing, terdapat perbedaan antara kecepatan iterasi dan seberapa realistis environment pengujian:

- **Kecepatan iterasi**: Testing harus cepat dan memberikan feedback segera, biasanya menggunakan mocking untuk mempercepat proses.
- **Environment yang realistis**: Memastikan pengujian dilakukan dalam lingkungan yang mendekati kondisi nyata, namun bisa lebih lambat.

## Seberapa Banyak Mock

Penggunaan mock bergantung pada kompleksitas pengujian dan seberapa realistis environment yang diinginkan. Lebih banyak mock mungkin diperlukan untuk mempercepat testing, tapi juga bisa mengurangi keakuratan hasil pengujian.

## Rekomendasi Tools

- **Jest**: Framework testing untuk JavaScript yang banyak digunakan di proyek React.
- **React Testing Library (RTL)**: Alat yang digunakan untuk memfasilitasi pengujian komponen React dengan memfokuskan pada bagaimana user berinteraksi dengan aplikasi.

## Membuat Basic Testing dengan RTL

Berikut beberapa hal dasar yang dilakukan dengan React Testing Library (RTL):

### Rendering Components

Menggunakan RTL untuk melakukan render komponen dan memastikan bahwa mereka dirender dengan benar tanpa error.

### Render dan Debug

RTL menyediakan metode untuk melakukan debug pada komponen yang dirender, sehingga kita bisa melihat apa yang sedang di-render pada saat pengujian.

### Memilih Elemen

Dengan RTL, kita bisa memilih elemen di dalam DOM dengan cara yang mirip seperti pengguna berinteraksi dengan aplikasi, misalnya menggunakan `getByText`, `getByRole`, atau `getByLabelText`.

### Kategori Testing

- **Handle event**: Menguji bagaimana komponen merespon berbagai event seperti klik, input, dll.
- **Handle asynchronous**: Menguji fungsi asinkron seperti pemanggilan API atau state yang diperbarui secara async.

## Testing Custom Hook

Ketika menggunakan **custom hooks** di React, kita juga perlu menulis pengujian untuk memastikan bahwa hook bekerja dengan benar.

### Menggunakan React Hook Testing Library

- **React Hook Testing Library** membantu melakukan pengujian pada custom hook, memungkinkan kita untuk mengisolasi hook dari komponen dan mengujinya secara langsung.

### Testing Value

Memastikan nilai yang dikembalikan oleh hook sudah sesuai dengan ekspektasi.

### Testing Callback

Menguji callback yang diberikan pada hook, apakah sudah berfungsi sebagaimana mestinya.

### Testing Rerender

Menggunakan **rerender** dalam pengujian untuk memeriksa bagaimana custom hook merespons perubahan dalam props atau state.
