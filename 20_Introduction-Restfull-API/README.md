# Rangkuman: Introduction to RESTful API

## Apa itu API

- **Application Programming Interface (API)** adalah mekanisme yang memungkinkan berbagai aplikasi untuk berkomunikasi dan bertukar data.

## Bagaimana API Bekerja

- API bekerja melalui permintaan dan respons antara klien dan server. Klien mengirim permintaan melalui URL atau endpoint, dan server merespons dengan data atau status tertentu.

## Apa itu REST

- **Representational State Transfer (REST)** adalah arsitektur yang digunakan untuk membangun API yang efisien dan dapat diskalakan.
- REST memanfaatkan metode HTTP seperti:
  - **GET**: Mengambil data dari server.
  - **POST**: Mengirim data baru ke server.
  - **PUT**: Memperbarui data di server.
  - **DELETE**: Menghapus data dari server.

## Contoh Format dan Method

- Metode seperti **GET**, **POST**, **PUT**, dan **DELETE** digunakan untuk mengelola data di server melalui API.

## Apa itu JSON

- **JavaScript Object Notation (JSON)** adalah format data ringan dan mudah dibaca yang sering digunakan untuk bertukar data di API.

## HTTP Response Code

- HTTP response code menunjukkan status permintaan API, seperti:
  - **200 OK**: Permintaan berhasil.
  - **201 Created**: Sumber daya berhasil dibuat.
  - **400 Bad Request**: Permintaan tidak valid.
  - **404 Not Found**: Sumber daya tidak ditemukan.
  - **500 Internal Server Error**: Kesalahan di server.

## Best Practices untuk REST API

- **Use nouns instead of verbs**: Gunakan kata benda untuk penamaan endpoint, misalnya `/users` alih-alih `/getUsers`.
- **Naming using plural nouns**: Gunakan kata benda jamak untuk menunjukkan banyak data, misalnya `/books`.
- **Use resource nesting to show relation or hierarchy**: Gunakan nested resources untuk menunjukkan hubungan, seperti `/users/1/posts` untuk postingan user tertentu.
- **Format response JSON**: Gunakan JSON sebagai format respons yang konsisten.
- **Filtering, sorting, pagination, dan searching**:
  - **Filtering**: Menyaring data sesuai kriteria, contohnya `?filter=status:active`.
  - **Sorting**: Mengurutkan data, contohnya `?sort=createdAt`.
  - **Pagination**: Membatasi data yang ditampilkan per halaman, contohnya `?page=1&limit=20`.
  - **Searching**: Mencari data berdasarkan kata kunci tertentu, contohnya `?search=query`.
- **Handle trailing slashes**: Konsisten dengan penggunaan tanda garis miring (`/`) di akhir endpoint.
- **Versioning**: Versikan API dengan menggunakan URL, misalnya `/v1/users`.
- **API Documentation**: Sediakan dokumentasi API yang lengkap untuk pengguna.

## RESTful API dengan JavaScript

### Cara Penggunaan MockAPI

- **MockAPI** adalah alat yang menyediakan API tiruan untuk pengujian tanpa server backend.
- Dengan MockAPI, kita bisa membuat, mengelola, dan menguji endpoint API dengan data tiruan.
