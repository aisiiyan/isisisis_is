const ADOBE_STOCK_INSTRUCTIONS = `Instruksi:
1. Hapus semua keyword yang terdeteksi duplikat.
2. Hapus semua keyword yang mengandung unsur berhak cipta (misalnya: nama merek dagang, judul film, nama karakter, software, nama perusahaan, dll).
3. Hapus keyword yang tidak relevan dengan judul/gambar. Keyword yang masih ada hubungan konteks tetap dipertahankan.
4. Tambahkan maksimal 3 kata tunggal dari judul jika belum ada di daftar keyword awal.
5. Urutkan keyword sesuai kategori prioritas berikut (paling relevan di awal, paling umum di akhir):
   - Produk Utama → objek inti gambar.
   - Aplikasi Produk → kegunaan atau tujuan gambar.
   - Mood / Style → suasana atau gaya visual.
   - Teknik / Media → metode pembuatan atau format file.
   - Kata Pendukung Umum → kata yang bersifat luas untuk jangkauan trafik.
6. Prioritaskan 15 keyword pertama untuk:
   - Relevansi paling tinggi.
   - Volume pencarian tinggi di stok foto.
   - Minimal 3 kata penting dari judul ada di urutan 1–10.
7. Batasi hasil akhir menjadi **tepat 49 keyword**:
   - Jika jumlah kurang dari 49, tambahkan kembali keyword dari daftar yang dihapus (pilih yang paling relevan terlebih dahulu) sampai genap 49.
   - Jika jumlah lebih dari 49, buang keyword dari prioritas terbawah sampai tersisa 49.
8. Setelah selesai, tampilkan:
   - Daftar keyword yang di salin
   - Proses detail: jelaskan apa yang dihapus, ditambahkan, dan perubahan urutan.
   - Daftar akhir keyword (digabung jadi satu baris, dipisahkan dengan koma).
   - Sebutkan jumlah total keyword.
   - Tandai keyword urutan 1–15 sebagai Essential.`;