# Rangkuman Jejak Karbon Website

## Perhitungan Jejak Karbon Digital

Saat ini, belum ada standar yang diterima secara universal untuk mengukur dampak lingkungan dari sebuah website. Namun, beberapa faktor dapat diukur untuk memperkirakan jejak karbon digital sebuah website.

### Apa yang Dapat Dilakukan dan Diukur?

1. **Transfer Data**: Jumlah data yang ditransfer antara server dan pengguna.
2. **Intensitas Energi dari Data Web**: Jumlah energi yang dikonsumsi untuk setiap GB data yang ditransfer.
3. **Sumber Energi yang Digunakan oleh Pusat Data**: Apakah menggunakan energi terbarukan atau tidak.
4. **Intensitas Karbon dari Listrik**: Berapa banyak emisi karbon yang dihasilkan dari konsumsi listrik.
5. **Website Traffic**: Jumlah pengunjung dan data yang digunakan oleh setiap pengunjung.

---

## Sumber Data Perhitungan

1. **Satuan yang Digunakan**: kWh per GB (kWh/GB) – satuan untuk mengukur konsumsi energi berdasarkan jumlah data yang ditransfer.
2. **Konsumsi Energi**: Mengacu pada artikel "New perspectives on internet electricity use in 2030" untuk estimasi penggunaan energi internet.
3. **Intensitas Karbon**: Nilai default adalah **442g/kWh**, yaitu jumlah gram CO2e yang dihasilkan per kWh listrik.
4. **Energi Pusat Data**: Digunakan untuk mentransfer data dari server pusat data ke pengguna akhir.

### Data Penting

- **Energi Internet per Tahun**: 1988 TWh
- **End User Traffic per Tahun**: 2444 EB
- **Rasio Energi Internet per Traffic**: 0,81 TWh/EB atau 0,81 kWh/GB
- **Faktor Karbon Indonesia**: 652 g/kWh
- **Faktor Karbon Sumber Energi Terbarukan**: 50 g/kWh

---

## Formula Kalkulasi Emisi

### 1. **Energi per Visit dalam kWh (E)**

E = [Transfer data per visit (pengunjung baru) dalam GB x 0,81 kWh/GB x 0,75] + [Transfer data per visit (pengunjung yang kembali) dalam GB x 0,81 kWh/GB x 0,25 x 0,02]

---

### 2. **Emisi per Visit dalam gram CO2e (`C`)**

C = E x 652 g/kWh

---

### 3. **Energi Tahunan dalam kWh (AE)**

AE = E x Jumlah pengunjung bulanan x 12

---

### 4. **Energi Tahunan dalam gram CO2e (AC)**

AC = C x Jumlah pengunjung bulanan x 12

---

## Segmen Energi Tahunan

Energi tahunan dibagi menjadi beberapa segmen berdasarkan perangkat dan infrastruktur yang digunakan:

1. **Energi Perangkat Konsumer**: `AE x 0,52`
2. **Energi Jaringan**: `AE x 0,14`
3. **Energi Pusat Data**: `AE x 0,15`
4. **Energi Produksi**: `AE x 0,19`

---

## Segmen Emisi Tahunan

Emisi karbon juga dibagi menjadi beberapa segmen berdasarkan perangkat dan infrastruktur yang berkontribusi pada emisi tersebut:

1. **Emisi Perangkat Konsumer**: `AC x 0,52`
2. **Emisi Jaringan**: `AC x 0,14`
3. **Emisi Pusat Data**: `AC x 0,15`
4. **Emisi Produksi**: `AC x 0,19`

---

Dengan memperhitungkan berbagai faktor ini, kita dapat mengestimasi jejak karbon dari sebuah website dan mengambil langkah-langkah untuk menguranginya, seperti mengoptimalkan ukuran file, mengurangi penggunaan data yang tidak perlu, dan memanfaatkan energi terbarukan.
