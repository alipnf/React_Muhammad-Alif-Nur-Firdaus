# Rangkuman: Data Structure di JavaScript

## Mengapa Belajar Data Structure?

- **Kualitas Kode**: Struktur data yang baik membantu meningkatkan kualitas kode dengan membuatnya lebih terorganisir, mudah dibaca, dan lebih mudah dipelihara.
- **Efisiensi**: Pemilihan struktur data yang tepat dapat meningkatkan efisiensi dalam pengolahan data, baik dari segi waktu (kecepatan) maupun penggunaan memori.

## Apa Itu Data?

Data adalah representasi dari informasi yang bisa diolah oleh komputer, misalnya angka, teks, atau objek.

## Apa Itu Data Structure?

Data structure adalah cara mengorganisasikan dan menyimpan data sehingga dapat digunakan dengan lebih efisien dan efektif.

## Basic Data Structures

1. **Array**: Koleksi data yang disimpan secara berurutan dalam satu variabel, diakses melalui indeks.
2. **Set**: Kumpulan data unik, tidak berurutan, dan tidak mengizinkan duplikasi.

## Operasi Dasar pada Data Structures

1. **Read**: Membaca data dari struktur.
2. **Delete**: Menghapus data.
3. **Search**: Mencari data di dalam struktur.
4. **Insert**: Menambahkan data baru ke dalam struktur.

---

### Array

- **Reading**: Membaca elemen berdasarkan indeks.
- **Searching**: Mencari elemen menggunakan indeks atau nilai tertentu.
- **Insert**: Menyisipkan elemen baru pada indeks tertentu.
- **Delete**: Menghapus elemen dari indeks tertentu.

### Set

- **Reading**: Membaca elemen, namun karena Set tidak memiliki indeks, elemen tidak diakses secara langsung melalui indeks.
- **Searching**: Mencari elemen menggunakan nilai.
- **Insert**: Menambahkan elemen baru (unik) ke dalam set.
- **Delete**: Menghapus elemen tertentu dari set.

---

# Penjelasan Method pada Array dan Set di JavaScript

## Array Methods

1. **`arr[index]` - Reading**

   - Mengambil elemen dari array berdasarkan indeks yang diberikan.
   - Contoh: `arr[2]` mengakses elemen di indeks 2.

2. **`indexOf(value)` - Searching**

   - Mencari indeks dari elemen yang pertama kali ditemukan dalam array. Jika elemen tidak ditemukan, mengembalikan `-1`.
   - Contoh: `arr.indexOf(40)` mencari nilai `40` dalam array dan mengembalikan indeksnya.

3. **`push(value)` - Inserting**

   - Menambahkan elemen baru di akhir array.
   - Contoh: `arr.push(60)` menambahkan elemen `60` ke akhir array.

4. **`splice(index, deleteCount)` - Deleting**
   - Menghapus elemen dari array berdasarkan indeks yang diberikan. Parameter pertama adalah indeks, dan parameter kedua adalah jumlah elemen yang akan dihapus.
   - Contoh: `arr.splice(2, 1)` menghapus 1 elemen di indeks 2.

---

## Set Methods

1. **`forEach(callback)` - Reading**

   - Mengiterasi setiap elemen dalam set tanpa urutan tertentu.
   - Contoh:

     ```javascript
     mySet.forEach((value) => console.log(value));
     ```

2. **`has(value)` - Searching**

   - Mengecek apakah elemen tertentu ada dalam set. Mengembalikan `true` jika elemen ditemukan, dan `false` jika tidak.
   - Contoh: `mySet.has(3)` memeriksa apakah nilai `3` ada di dalam set.

3. **`add(value)` - Inserting**

   - Menambahkan elemen baru ke dalam set. Jika elemen sudah ada, maka tidak akan ditambahkan lagi karena Set hanya mengizinkan elemen unik.
   - Contoh: `mySet.add(5)` menambahkan nilai `5` ke dalam set.

4. **`delete(value)` - Deleting**
   - Menghapus elemen dari set berdasarkan nilai yang diberikan.
   - Contoh: `mySet.delete(2)` menghapus elemen `2` dari set.

---

## Kesimpulan

- **Array** adalah struktur data berurutan yang mengizinkan duplikasi dan elemen dapat diakses melalui indeks.
- **Set** adalah struktur data yang hanya menyimpan elemen unik tanpa urutan tertentu, dan elemen diakses berdasarkan nilai, bukan indeks.
