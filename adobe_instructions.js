const ADOBE_STOCK_INSTRUCTIONS = `PERINTAH OPTIMASI KEYWORD:
Optimalkan daftar keyword (kata kunci) yang disediakan menjadi tepat 50 untuk platform microstock (Shutterstock/Adobe Stock), dengan fokus utama pada relevansi dan urutan prioritas awal (1-15).

 1. Pembersihan:
   • Hapus semua keyword yang terdeteksi duplikat.
   • Hapus semua keyword yang mengandung unsur berhak cipta (trademark, merek dagang, judul film, nama karakter, software, nama perusahaan, dll.).
   • Hapus keyword yang tidak relevan dengan judul/gambar. Keyword yang masih ada hubungan konteks tetap dipertahankan.

 2. Integrasi Judul:
   • Tambahkan maksimal 3 kata tunggal paling penting dari judul jika belum ada di daftar keyword awal.

 3. Pengurutan dan Kategorisasi (Prioritas Awal):
   • Urutkan semua keyword sesuai kategori prioritas berikut (paling relevan di awal, paling umum di akhir):
     • Produk Utama: Objek inti/subjek utama gambar.
     • Aplikasi Produk: Kegunaan atau tujuan komersial gambar (copy space, template, dll.).
     • Mood / Style: Suasana, emosi, atau gaya visual (flat design, modern, happy).
     • Teknik / Media: Metode pembuatan atau format (vector, 3D, digital art).
     • Kata Pendukung Umum: Kata yang bersifat luas untuk jangkauan trafik.
   • Prioritaskan 15 keyword pertama untuk:
     • Relevansi paling tinggi.
     • Volume Pencarian: (Asumsikan AI memiliki data volume pencarian microstock; jika tidak, prioritaskan keyword yang paling deskriptif dan sering digunakan di industri).
     • Minimal 3 kata penting dari judul harus ada di urutan 1–10.

 4. Penyesuaian Jumlah Akhir (50 Keyword):
   • Batasi hasil akhir menjadi tepat 50 keyword:
     • Jika jumlah kurang dari 50, tambahkan kembali keyword dari daftar yang dihapus (pilih yang paling relevan terlebih dahulu) sampai genap 50.
     • Jika jumlah lebih dari 50, buang keyword dari prioritas terbawah (Kategori Kata Pendukung Umum) sampai tersisa 50.

 5. Tampilan Hasil Akhir:
   • Tampilkan Daftar Keyword Input Awal (sebelum diproses, untuk referensi).
   • Proses Detail: Jelaskan apa yang dihapus (duplikat/hak cipta/tidak relevan), apa yang ditambahkan (dari judul), dan perubahan urutan utama.
   • Daftar Akhir Keyword (digabung jadi satu baris, dipisahkan dengan koma).
   • Sebutkan Jumlah Total Keyword.
   • Tandai keyword urutan 1–15 sebagai Essential (misalnya, berikan tanda bintang atau sebutkan secara terpisah).`;

