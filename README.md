# 🐾 Animal Image Classification with TensorFlow.js

Proyek ini adalah aplikasi web sederhana untuk **klasifikasi gambar hewan** menggunakan model deep learning (CNN) yang telah dilatih, kemudian dikonversi ke format **TensorFlow.js**.

### 📌 Fitur Utama
- Upload gambar dari perangkat.
- Prediksi langsung di browser (tanpa server backend).
- Mendukung model dengan input 224x224 piksel.
- Tampilan modern dan responsif dengan CSS terpisah.
- Klasifikasi 6 jenis hewan: **anjing, ayam, kucing, kupu-kupu, sapi, tupai**.

---

## 📂 Struktur Folder

klasifikasi-gambar-hewan 
├── model_2_best_tfjs # Model hasil konversi ke TensorFlow.js 
│ ├── group1-shard1of4.bin
│ ├── group1-shard2of4.bin
│ ├── group1-shard3of4.bin
│ ├── group1-shard4of4.bin 
│ └── model.json
├── index.html # Halaman utama web 
├── style.css # File CSS untuk styling 
├── script.js # Script JavaScript untuk TFJS inference


---

## 🚀 Cara Menjalankan

1. Pastikan semua file berada dalam satu folder (termasuk `model_2_best_tfjs`).
2. Jalankan server lokal (misalnya dengan Python):

   ```bash
   python -m http.server 8000

3. Buka browser dan akses http://localhost:8000
4. Upload gambar → klik Predict → lihat hasil prediksi.

## 💡 Teknologi yang Digunakan

- TensorFlow.js
- HTML5 & CSS3
- JavaScript (Vanilla)
- Model CNN hasil training dan konversi dari TensorFlow
