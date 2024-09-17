# Version Control and Branch Management (Git)

**Versioning** adalah proses mengelola dan mengatur versi dari source code agar
perubahan dapat dilacak dan diatur dengan baik.

**Git** adalah salah satu Version Control System (VCS) yang paling populer,
memungkinkan developer untuk berkolaborasi dan mengelola perubahan dalam proyek
secara efisien.

## Git Branch

- **Membuat Branch Baru**: Saat bekerja pada sebuah fitur atau perbaikan,
  developer dapat membuat cabang (_branch_) baru dari kode utama. Ini membantu
  menjaga agar perubahan tidak langsung mempengaruhi kode produksi.
  - Perintah: `git branch <nama-branch>` untuk membuat branch baru.
  - **Mengecek Branch Baru**: Gunakan `git checkout <nama-branch>` untuk
    berpindah ke branch yang baru dibuat.
- **Push Branch ke GitHub**: Setelah selesai mengerjakan fitur atau perbaikan
  di branch baru, developer dapat mem-push perubahan ke remote repository di
  GitHub.

  - Perintah: `git push origin <nama-branch>` untuk mengunggah branch ke
    remote repository.

- **Merge Branch**: Setelah menambahkan kode baru pada branch pengembangan,
  branch tersebut bisa digabungkan (_merge_) ke branch utama seperti `master`
  atau `development` setelah melalui review.
  - Perintah: `git merge <nama-branch>` untuk menggabungkan branch.

## Pull Request (PR)

- **Pengertian Pull Request**: Pull request adalah cara bagi developer untuk
  mengajukan kontribusi terhadap sebuah repositori yang sudah ada. Developer
  membuat pull request setelah menambahkan perubahan di branch mereka, agar tim
  atau pemilik repositori dapat memeriksa dan menyetujui perubahan tersebut
  sebelum digabungkan ke branch utama.

- **Cara Membuat Pull Request**:
  1. Push branch dengan perubahan ke repository GitHub.
  2. Buka repository di GitHub.
  3. Pilih branch yang ingin diajukan untuk di-_merge_.
  4. Klik "New Pull Request" dan isi detail mengenai perubahan yang diajukan.
  5. Tunggu review dari tim atau pemilik repository.

## Workflow Kolaborasi

- **Branching Workflow**: Struktur branch yang baik membantu mengelola
  pengembangan proyek yang lebih teratur. Idealnya, terdapat dua branch utama,
  yaitu:

  - `master`: Branch yang selalu mengandung versi produksi (release).
  - `development` atau `dev`: Branch pengembangan yang berfungsi sebagai dasar
    untuk penggabungan fitur baru sebelum di-_merge_ ke `master`.

- **Branch Fitur**: Setiap fitur baru atau perbaikan harus dikerjakan pada
  branch terpisah yang nantinya akan digabungkan ke branch `development`.

### Tips

1. Biarkan branch `master` tetap bersih dan stabil, hindari distribusi langsung.
2. Hindari mengedit kode langsung di branch `development`, sebaiknya buat
   branch terpisah untuk setiap fitur baru.
3. Selalu merge branch fitur ke `development`, dan jangan pernah merge branch
   fitur langsung ke `master`.
4. Setelah semua fitur selesai dan branch `development` stabil, baru lakukan
   merge dari `development` ke `master` untuk rilis.
