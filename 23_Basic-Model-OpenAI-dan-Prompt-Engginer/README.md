# Rangkuman Basic Model OpenAI dan Prompt Engineering

## Apa Itu Model OpenAI?

OpenAI menyediakan beberapa model kecerdasan buatan (AI) yang berbeda untuk berbagai tugas, termasuk pemahaman bahasa alami, pembuatan gambar, dan lainnya. Berikut adalah beberapa model utama OpenAI:

### 1. **GPT-4**

- **Generative Pre-trained Transformer 4 (GPT-4)** adalah model AI canggih yang mampu memahami dan menghasilkan teks. Dikenal lebih kuat dari versi sebelumnya dalam memahami konteks yang lebih kompleks dan memberikan tanggapan yang lebih akurat.

### 2. **GPT-3.5**

- **GPT-3.5** adalah versi lanjutan dari GPT-3 dengan perbaikan pada kemampuan pemahaman konteks dan tanggapan yang lebih relevan, tetapi tidak sekuat GPT-4.

### 3. **DALL-E**

- **DALL-E** adalah model OpenAI untuk menghasilkan gambar dari deskripsi teks. Ia mampu membuat gambar unik berdasarkan input deskriptif yang diberikan oleh pengguna.

### 4. **Whisper**

- **Whisper** adalah model untuk **speech recognition** yang dapat mengubah suara menjadi teks dengan akurasi tinggi, mendukung berbagai bahasa.

### 5. **Embeddings**

- **Embeddings** adalah representasi vektor dari teks yang digunakan untuk mengukur kemiripan antara kalimat atau kata. Mereka digunakan dalam pencarian semantik, klusterisasi data, dan aplikasi NLP lainnya.

### 6. **Moderation**

- **Moderation** adalah model yang dirancang untuk mendeteksi dan menyaring konten yang tidak pantas, berbahaya, atau melanggar kebijakan. Ini digunakan untuk memastikan keamanan dan kepatuhan pada aplikasi yang melibatkan interaksi publik.

### 7. **GPT-3**

- **GPT-3** adalah model generatif dari OpenAI yang memulai tren model berbasis transformer skala besar untuk pemrosesan bahasa alami. Mampu menghasilkan teks yang menyerupai tulisan manusia dalam berbagai topik.

### 8. **Codex**

- **Codex** adalah model yang dilatih khusus untuk memahami dan menghasilkan kode pemrograman. Ini mendukung berbagai bahasa pemrograman dan digunakan dalam alat seperti GitHub Copilot.

---

## Apa Itu Prompt Engineering?

**Prompt Engineering** adalah seni merancang input atau prompt untuk mendapatkan hasil optimal dari model AI seperti GPT. Dengan memberikan konteks yang jelas, contoh, atau instruksi yang tepat, kita bisa membimbing model untuk memberikan keluaran yang lebih sesuai dengan kebutuhan.

### Contoh Penggunaan Prompt Engineering

Berikut adalah beberapa contoh penggunaan prompt engineering dalam berbagai aplikasi:

1. **Text Classification (Klasifikasi Teks)**

   - Meminta model untuk mengklasifikasikan teks ke dalam beberapa kategori. Misalnya:

     ```
     Text: "I love this product! It's amazing."
     Category: Positive
     ```

2. **Question Answering (Menjawab Pertanyaan)**

   - Memberikan pertanyaan berbasis teks dan meminta model untuk menjawab berdasarkan informasi yang ada. Misalnya:

     ```
     Q: Who is the current president of the United States?
     A: Joe Biden.
     ```

3. **Summarization (Ringkasan Teks)**

   - Meminta model untuk meringkas teks panjang menjadi bentuk lebih singkat. Misalnya:

     ```
     Summarize the following text: "Artificial Intelligence is a field of computer science..."
     Summary: "AI is a branch of computer science focused on creating machines that can perform tasks requiring human intelligence."
     ```

4. **Dialog System (Sistem Dialog)**
   - Meminta model untuk bertindak seperti agen dalam percakapan. Misalnya:

     ```
     User: What is the weather like today?
     AI: The weather is sunny with a high of 75 degrees.
     ```

---

## Pengaturan API Pada OpenAI

Saat menggunakan API OpenAI, kita dapat mengatur berbagai parameter agar hasil keluaran model sesuai dengan kebutuhan.

### Contoh Pengaturan API

- **Engine**: `davinci`
- **Max Tokens**: `100` (Jumlah maksimum token untuk setiap respon)
- **Temperature**: `0` (Semakin rendah, semakin deterministik model. 0 berarti model sangat fokus pada jawaban yang pasti)
- **Top P**: `1.0` (Menyusun probabilitas berdasarkan distribusi paling memungkinkan)
- **Frequency Penalty**: `0.0` (Tidak ada penalti pada frekuensi penggunaan token)
- **Presence Penalty**: `0.0` (Tidak ada penalti untuk keberadaan kata baru)

Dengan pengaturan ini, model akan memberikan tanggapan yang lebih fokus dan konsisten sesuai dengan data yang tersedia.
