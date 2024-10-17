# Rangkuman React Form

## Penggunaan Form

Form di React digunakan untuk mengumpulkan input dari pengguna, seperti:

- **Input**: untuk menerima teks pendek
- **Textarea**: untuk menerima teks yang lebih panjang
- **Select**: untuk membuat dropdown pilihan
- **Radio Button**: untuk pilihan tunggal dari beberapa opsi
- **Checkbox**: untuk pilihan biner (ya/tidak)

## Controlled Component

**Controlled Component** adalah komponen di mana nilai dari input form sepenuhnya dikendalikan oleh state React. Setiap perubahan pada input akan memicu event handler yang memperbarui state, yang kemudian memperbarui nilai input.

### Kelebihan Controlled Component

- **Kendali penuh**: State React sepenuhnya mengontrol input, sehingga mudah untuk memvalidasi dan memanipulasi data secara real-time.
- **Data sinkron**: State selalu up-to-date dengan input pengguna.

### Kekurangan Controlled Component

- **Lebih kompleks**: Memerlukan lebih banyak kode dan boilerplate untuk setiap input.
- **Kinerja**: Dalam form besar, pengelolaan state bisa lebih rumit dan dapat mengakibatkan sedikit penurunan kinerja.

## Uncontrolled Component

**Uncontrolled Component** adalah komponen di mana nilai input tidak langsung dikendalikan oleh state React. Sebaliknya, nilai disimpan langsung di DOM, dan kita hanya mengambil nilai tersebut saat dibutuhkan, biasanya menggunakan `ref`.

### Kelebihan Uncontrolled Component

- **Lebih sederhana**: Tidak perlu menulis event handler dan state untuk setiap input.
- **Kinerja lebih baik**: Mengurangi jumlah render yang tidak perlu karena tidak ada pengelolaan state React.

### Kekurangan Uncontrolled Component

- **Kontrol terbatas**: Lebih sulit untuk memvalidasi atau mengelola input secara real-time.
- **Tidak sinkron**: Nilai input hanya bisa diakses setelah pengguna berinteraksi, sehingga pengelolaan data bisa kurang konsisten.

## Validasi Dasar (Basic Validation)

### Kenapa Perlu Divalidasi?

Validasi form penting untuk memastikan data yang dimasukkan oleh pengguna sesuai dengan format dan aturan yang diinginkan. Hal ini mencegah kesalahan input seperti data yang tidak valid, tidak lengkap, atau melanggar batasan.

### Tipe Validasi Data Formulir

1. **Client-Side Validation**: Validasi dilakukan di sisi pengguna, menggunakan JavaScript untuk memverifikasi input sebelum dikirim ke server.
2. **Server-Side Validation**: Validasi dilakukan di server setelah data dikirim. Ini adalah langkah penting karena pengguna bisa memodifikasi atau mem-bypass validasi di sisi client.

### Built-in Form Validation

- **required**: Menandakan bahwa input wajib diisi.
- **minLength** / **maxLength**: Membatasi jumlah minimum atau maksimum karakter yang dapat dimasukkan.
- **min** / **max**: Membatasi nilai minimum dan maksimum yang diperbolehkan untuk input bertipe angka.
- **type**: Menentukan tipe input (misalnya, email, number) untuk memeriksa format data yang benar.
- **pattern**: Memvalidasi input berdasarkan regular expression (regex).

### Menggunakan JavaScript untuk Validasi

Meskipun HTML5 menyediakan validasi dasar, JavaScript sering digunakan untuk menambahkan validasi yang lebih kompleks. Dengan JavaScript, kita bisa memeriksa input, memberikan pesan kesalahan kustom, dan mencegah form dikirim jika data tidak valid.
