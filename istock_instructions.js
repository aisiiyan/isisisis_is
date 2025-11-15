const ISTOCK_INSTRUCTIONS = `Instruksi:
1. Tambahkan hingga 3 kata tunggal dari judul jika belum ada di daftar keyword awal, untuk menjaga relevansi dan sinkronisasi. Jangan tambahkan frasa atau gabungan kata pada tahap ini.
2. Hapus keyword yang tidak relevan dengan judul atau visual khas iStock, baik karena kurang cocok, jarang dicari, atau tidak menjelaskan isi visual dengan tepat.
3. Hapus semua keyword yang mengandung unsur berhak cipta (misalnya: nama merek dagang, judul film, nama karakter, software, nama perusahaan, dll).
4. Jangan ubah, pecah, atau singkat keyword yang sudah ada, termasuk frasa tiga kata atau lebih. Pertahankan semua keyword sesuai bentuk aslinya.
5. Kelompokkan keyword ke dalam tiga kategori:
   - Essential Keywords (10–15 kata): Objek utama, tema sentral, dan istilah paling kompetitif.
   - Main Keywords (15–20 kata): Unsur visual, teknis, warna, dan elemen pendukung lainnya.
   - Additional Keywords (sisanya): Kata pendukung, sinonim, metafora visual, atau gaya presentasi.
6. Setelah pengelompokan, gabungkan semua keyword ke dalam satu baris dengan urutan kategori: essential > main > additional. Gunakan huruf kecil semua, pisahkan dengan koma, dan jaga frasa tetap utuh sesuai aslinya.
7. Batas jumlah keyword maksimal 50.
   - Jika total lebih dari 50, hapus keyword paling tidak relevan dimulai dari kategori Additional, lalu dari bagian bawah kategori Main jika masih melebihi.
   - Jangan hapus Essential. Pastikan semua Essential selalu dipertahankan.
   - Hasil akhir tepat 50 keyword, Jika jumlah kurang dari 50, tambahkan kembali keyword dari daftar yang dihapus (pilih yang paling relevan terlebih dahulu) sampai genap 50. tapi jangan masukan kata yang mengandung unsur hak cipta.
8. Setelah selesai, tampilkan:
   - Proses detail: jelaskan apa yang dihapus, ditambahkan, dan perubahan urutan.
   - Daftar akhir keyword (digabung jadi satu baris, dipisahkan dengan koma).
   - Sebutkan jumlah total keyword.
   - Tandai keyword urutan 1–15 sebagai Essential.
9.Deskripsi:
 Buat deskripsi sepanjang ±150 karakter, profesional dan selaras dengan judul serta keyword. Fokus pada isi visual dan konteks penggunaannya.`;