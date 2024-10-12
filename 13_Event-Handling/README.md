# Rangkuman Event Handling

## Apa Itu State?

State adalah data atau kondisi dinamis yang digunakan oleh suatu komponen untuk melacak perubahan dalam aplikasi. State sering kali digunakan untuk memanipulasi tampilan UI sesuai dengan perubahan data, memungkinkan komponen menjadi interaktif.

## Bedanya Props dan State

- **Props**: Data yang diteruskan dari komponen induk (parent) ke komponen anak (child). Props bersifat _read-only_ dan tidak bisa diubah oleh komponen yang menerimanya.
- **State**: Data lokal yang hanya ada dalam komponen tertentu. State dapat diubah oleh komponen itu sendiri melalui metode atau event yang ada di dalamnya, dan dapat memicu re-render UI.

## Apa Itu Stateful Components?

Stateful components adalah komponen yang memiliki dan mengelola state internal. Komponen ini dapat mengubah state-nya sendiri dan biasanya digunakan untuk membuat komponen yang lebih dinamis dan interaktif.

## Apa Itu Stateless Components?

Stateless components adalah komponen yang tidak memiliki atau mengelola state internal. Komponen ini hanya menerima props dan merender UI berdasarkan props yang diberikan tanpa melacak data atau kondisi apa pun.

## Perbedaan Stateful dan Stateless Components

- **Stateful Components**: Menyimpan dan mengelola state internal, bisa mengubah tampilannya sendiri berdasarkan perubahan state.
- **Stateless Components**: Hanya bergantung pada props dan tidak mengelola state internal. Biasanya digunakan untuk tampilan UI yang statis atau yang logikanya sudah ditangani oleh komponen induknya.

## Apa Itu Event Handling?

Event handling adalah proses menangani kejadian-kejadian yang terjadi pada elemen UI, seperti klik tombol, input teks, atau submit form. Di dalam komponen, event handling sering kali melibatkan fungsi atau metode yang dipanggil ketika suatu event terjadi, yang kemudian dapat digunakan untuk mengubah state atau melakukan aksi lain dalam aplikasi.
