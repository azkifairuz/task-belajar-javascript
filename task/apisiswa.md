# Tugas: Student Grade API

> Bangun REST API untuk sistem nilai siswa menggunakan Express.js.
>
> Semua data disimpan di **array of objects** (gak pakai database).
---



## Setup Awal

```bash
mkdir student-api
cd student-api
npm init -y
npm install express
```

Buat file `server.js`, setup Express seperti biasa.

---

## Struktur Data

```js
let students = [
  {
    id: 1,
    nama: "Budi Santoso",
    kelas: "A",
    nilai: [
      { mapel: "Matematika", skor: 85 },
      { mapel: "Bahasa Indonesia", skor: 90 },
      { mapel: "IPA", skor: 78 },
      { mapel: "IPS", skor: 82 },
    ],
  },
  {
    id: 2,
    nama: "Ani Wijaya",
    kelas: "B",
    nilai: [
      { mapel: "Matematika", skor: 95 },
      { mapel: "Bahasa Indonesia", skor: 88 },
      { mapel: "IPA", skor: 92 },
      { mapel: "IPS", skor: 90 },
    ],
  },
  {
    id: 3,
    nama: "Joko Prasetyo",
    kelas: "A",
    nilai: [
      { mapel: "Matematika", skor: 55 },
      { mapel: "Bahasa Indonesia", skor: 60 },
      { mapel: "IPA", skor: 45 },
      { mapel: "IPS", skor: 58 },
    ],
  },
  {
    id: 4,
    nama: "Dewi Lestari",
    kelas: "B",
    nilai: [
      { mapel: "Matematika", skor: 72 },
      { mapel: "Bahasa Indonesia", skor: 78 },
      { mapel: "IPA", skor: 65 },
      { mapel: "IPS", skor: 70 },
    ],
  },
  {
    id: 5,
    nama: "Rudi Hermawan",
    kelas: "A",
    nilai: [
      { mapel: "Matematika", skor: 40 },
      { mapel: "Bahasa Indonesia", skor: 50 },
      { mapel: "IPA", skor: 38 },
      { mapel: "IPS", skor: 42 },
    ],
  },
];
```

---

## Endpoint yang Harus Dibuat

### 1. `GET /students` — Tampilkan Semua Siswa

Return semua data siswa.

**Tambahan logic:**
- Kalau ada query `?kelas=A` → filter hanya siswa kelas A
- Kalau ada query `?search=budi` → cari siswa yang namanya mengandung kata tersebut (case-insensitive),
Clue pake finde, buat dapet inputan user yg pake tanda tanya itu pake
req.query.kelas dan req.query.search, caranya mirip contoh get by id, cmn ini yg diambil dri query tanda tanya bukan dri params, jdi nnti di postmantnya gini
/students?kelas=A
/students?search=budi

**Contoh:**
```
GET /students
GET /students?kelas=A
GET /students?search=dewi
```

---

### 2. `GET /students/:id` — Detail 1 Siswa

Return data 1 siswa berdasarkan ID.

Kalau ID tidak ditemukan → return 404.

ini ikutin get product by id yg kemaren ya
---

### 3. `POST /students` — Tambah Siswa Baru

User kirim:
```json
{
  "nama": "Sari Indah",
  "kelas": "B",
  "nilai": [
    { "mapel": "Matematika", "skor": 80 },
    { "mapel": "Bahasa Indonesia", "skor": 75 },
    { "mapel": "IPA", "skor": 70 },
    { "mapel": "IPS", "skor": 85 }
  ]
}

buat ambil nilai arraynya sama aja kaya contoh
const { nama, kelas, nilai } = req.body;

cyman nnti bagian nilai, di postmantnya gini

{
    nilai:[
         { "mapel": "IPA", "skor": 70 },
    ]
}

terus cara nambahin ke array object sama aj kaya kmrn
 const newStudent = {
        id: nextId++,
        nama,    // dari body
        kelas,   // dari body
        nilai,   // dari body (array langsung masuk)
    };
```

**Validasi yang harus dicek:**
- `nama` wajib diisi
- `kelas` wajib diisi
- `nilai` harus array dan isinya minimal 1
- Setiap skor harus angka antara 0–100
- Kalau ada yang gak valid → return 400 dengan pesan error yang jelas

---

### 4. `PUT /students/:id` — Update Data Siswa

User bisa update `nama`, `kelas`, atau `nilai` (salah satu atau semua).

**Validasi:**
- Kalau update skor, tetap harus antara 0–100
- Kalau ID tidak ditemukan → return 404

---

### 5. `DELETE /students/:id` — Hapus Siswa

Hapus siswa berdasarkan ID. Kalau tidak ditemukan → return 404.

---

### 6. `GET /students/:id/rapor` — Generate Rapor 

Hitung dan return rapor lengkap untuk 1 siswa:

ini nya ma sama kaya tugas if else yang dulu, paling bedanya ini valuenya dri  array object yg diatas
**Yang harus dihitung:**
- **Rata-rata** dari semua skor
- **Nilai tertinggi** → mapel apa dan skornya
- **Nilai terendah** → mapel apa dan skornya
- **Predikat** berdasarkan rata-rata:
  - `>= 90` → A (Sangat Baik)
  - `>= 75` → B (Baik)
  - `>= 60` → C (Cukup)
  - `< 60` → D (Kurang)
- **Status**: rata-rata >= 60 → "LULUS", di bawah itu → "TIDAK LULUS"
- **Mapel yang perlu perbaikan**: semua mapel dengan skor di bawah 60

**Contoh response:**
```json
{
  "success": true,
  "data": {
    "nama": "Joko Prasetyo",
    "kelas": "A",
    "nilai": [
      { "mapel": "Matematika", "skor": 55 },
      { "mapel": "Bahasa Indonesia", "skor": 60 },
      { "mapel": "IPA", "skor": 45 },
      { "mapel": "IPS", "skor": 58 }
    ],
    "rpiataRata": 54.5,
    "nilaiTertinggi": { "mapel": "Bahasa Indonesia", "skor": 60 },
    "nilaiTerendah": { "mapel": "IPA", "skor": 45 },
    "predikat": "D (Kurang)",
    "status": "TIDAK LULUS",
    "perluPerbaikan": ["Matematika", "IPA", "IPS"]
  }
}
```

---

### 7. `GET /ranking` — Ranking Seluruh Siswa 

Hitung rata-rata setiap siswa, urutkan dari yang tertinggi.

**Contoh response:**
```json
{
  "success": true,
  "data": [
    { "ranking": 1, "nama": "Ani Wijaya", "kelas": "B", "rataRata": 91.25, "predikat": "A (Sangat Baik)" },
    { "ranking": 2, "nama": "Budi Santoso", "kelas": "A", "rataRata": 83.75, "predikat": "B (Baik)" },
    { "ranking": 3, "nama": "Dewi Lestari", "kelas": "B", "rataRata": 71.25, "predikat": "C (Cukup)" },
    { "ranking": 4, "nama": "Joko Prasetyo", "kelas": "A", "rataRata": 54.5, "predikat": "D (Kurang)" },
    { "ranking": 5, "nama": "Rudi Hermawan", "kelas": "A", "rataRata": 42.5, "predikat": "D (Kurang)" }
  ]
}
```

**Tambahan:** Kalau ada query `?kelas=A` → ranking hanya untuk kelas A.

---

### 8. `GET /statistik` — Statistik Keseluruhan ⭐

Endpoint yang menghitung banyak hal sekaligus:

**Yang harus dihitung:**
- **Total siswa**
- **Jumlah lulus** dan **jumlah tidak lulus**
- **Persentase kelulusan** (contoh: "60%")
- **Siswa terbaik**: siapa yang rata-ratanya paling tinggi
- **Siswa perlu perhatian**: siapa yang rata-ratanya paling rendah
- **Rata-rata per mapel**: hitung rata-rata seluruh siswa untuk setiap mapel
- **Mapel tersulit**: mapel dengan rata-rata paling rendah
- **Mapel termudah**: mapel dengan rata-rata paling tinggi

**Contoh response:**
```json
{
  "success": true,
  "data": {
    "totalSiswa": 5,
    "jumlahLulus": 3,
    "jumlahTidakLulus": 2,
    "persentaseKelulusan": "60%",
    "siswaTerbaik": { "nama": "Ani Wijaya", "rataRata": 91.25 },
    "siswaPerluPerhatian": { "nama": "Rudi Hermawan", "rataRata": 42.5 },
    "rataRataPerMapel": [
      { "mapel": "Matematika", "rataRata": 69.4 },
      { "mapel": "Bahasa Indonesia", "rataRata": 73.2 },
      { "mapel": "IPA", "rataRata": 63.6 },
      { "mapel": "IPS", "rataRata": 68.4 }
    ],
    "mapelTermudah": { "mapel": "Bahasa Indonesia", "rataRata": 73.2 },
    "mapelTersulit": { "mapel": "IPA", "rataRata": 63.6 }
  }
}
```

---

## Hint & Tips

### Hitung rata-rata pakai reduce:
```js
const total = arrayNilai.reduce((acc, item) => acc + item.skor, 0);
const rataRata = total / arrayNilai.length;
```

### Sort array (untuk ranking):
```js
array.sort((a, b) => b.rataRata - a.rataRata);
```

### Search case-insensitive:
```js
// toLowerCase() biar "Budi" dan "budi" cocok
nama.toLowerCase().includes(keyword.toLowerCase());
```

### Jangan lupa return setelah res.json() di dalam if:
```js
// SALAH — kode di bawah tetap jalan
if (!student) {
  res.status(404).json({ message: "not found" });
}
// kode ini masih kejalan... 

// BENAR — pakai return
if (!student) {
  return res.status(404).json({ message: "not found" });
}
// kode ini gak kejalan ✅
```

---

## Checklist

- [ ] `GET /students` jalan + filter kelas + search nama
- [ ] `GET /students/:id` jalan + handle 404
- [ ] `POST /students` jalan + validasi lengkap
- [ ] `PUT /students/:id` jalan + validasi skor 0–100
- [ ] `DELETE /students/:id` jalan + handle 404
- [ ] `GET /students/:id/rapor` — rata-rata, predikat, status, perlu perbaikan
- [ ] `GET /ranking` — urutan benar + filter kelas
- [ ] `GET /statistik` — semua data terhitung benar
- [ ] Semua response format konsisten (`success`, `statusCode`, `data/message`)
- [ ] Sudah test semua endpoint di Postman

---

## Bonus (Kal masih ngerasa kurang seru ngodingnya wkkwkw)

1. **`PUT /students/:id/nilai`** — Update skor 1 mapel saja. User kirim `{ "mapel": "IPA", "skor": 75 }`. Server harus cari mapel itu di array nilai dan update skornya.

2. **`GET /students/:id/rekomendasi`** — Berdasarkan nilai siswa, kasih rekomendasi otomatis:
   - Skor < 60 → "Perlu bimbingan intensif di [mapel]"
   - Skor 60–75 → "Perlu latihan tambahan di [mapel]"
   - Skor > 90 → "Pertahankan prestasi di [mapel]"

3. **`GET /ranking-per-mapel/:mapel`** — Ranking siswa khusus untuk 1 mapel. Contoh: `GET /ranking-per-mapel/Matematika`.

---
boleh search google, nanya ai, atua gua klo udh pusing bet