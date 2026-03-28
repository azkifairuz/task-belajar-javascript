# 🧪 Tantangan — Pertemuan 2: Function, Kondisi & Looping

Kerjakan semua tantangan di bawah ini menggunakan **Node.js**. Jalankan file kamu dengan perintah:

```bash
node namafile.js
```

Kumpulkan sebelum pertemuan berikutnya. Selamat mengerjakan! 💪

---

## Tantangan 1 — Cek Nilai Lulus / Tidak Lulus

**Tujuan:** Latihan `if`, `else if`, `else`

Buat program yang menerima sebuah variable `nilai` (angka 0–100), lalu cetak hasilnya berdasarkan aturan berikut:

| Nilai | Output |
|-------|--------|
| >= 80 | Lulus — Predikat A 🌟 |
| >= 60 | Lulus — Predikat B 👍 |
| >= 40 | Lulus — Predikat C 😅 |
| < 40  | Tidak Lulus ❌ |

**Contoh:**

```
Input:  nilai = 75
Output: Lulus — Predikat B 👍

Input:  nilai = 35
Output: Tidak Lulus ❌
```

**Instruksi:**
1. Buat file `tantangan1.js`
2. Buat variable `let nilai = 75;`
3. Gunakan `if / else if / else` untuk menentukan predikat
4. Cetak hasilnya dengan `console.log()`
5. Coba ganti-ganti isi variable `nilai` dan jalankan ulang

---

## Tantangan 2 — Function Luas & Keliling Persegi Panjang

**Tujuan:** Latihan membuat function, parameter, return value, dan arrow function

Buat 2 function:
- `hitungLuas(panjang, lebar)` → mengembalikan hasil **panjang × lebar**
- `hitungKeliling(panjang, lebar)` → mengembalikan hasil **2 × (panjang + lebar)**

**Contoh:**

```
hitungLuas(10, 5)       → 50
hitungKeliling(10, 5)   → 30
```

**Instruksi:**
1. Buat file `tantangan2.js`
2. Buat kedua function menggunakan **arrow function** (`=>`)
3. Panggil masing-masing function dengan angka berbeda-beda
4. Cetak hasilnya dengan `console.log()`

**Bonus:** Buat function tambahan `hitungLuasLingkaran(r)` yang mengembalikan `Math.PI * r * r`

---

## Tantangan 3 — Cetak Angka 1–100: Ganjil / Genap

**Tujuan:** Latihan `for` loop, operator `%` (modulus), dan `if/else`

Buat program yang mencetak angka 1 sampai 100. Setiap angka ditandai apakah **Ganjil** atau **Genap**.

**Contoh output:**

```
1 — Ganjil
2 — Genap
3 — Ganjil
4 — Genap
5 — Ganjil
...
100 — Genap
```

**Instruksi:**
1. Buat file `tantangan3.js`
2. Gunakan `for` loop dari 1 sampai 100
3. Di dalam loop, gunakan `if` dan operator `%` untuk cek ganjil/genap
4. Cetak setiap angka beserta labelnya

**💡 Hint:** `angka % 2 === 0` artinya genap

---

## Tantangan 4 — FizzBuzz 🔥

**Tujuan:** Gabungan `for` loop, `if/else if/else`, dan operator `%`

Ini soal klasik yang sering muncul di **interview kerja programmer**!

Cetak angka 1 sampai 50 dengan aturan:

| Kondisi | Output |
|---------|--------|
| Kelipatan 3 **dan** 5 | `FizzBuzz` |
| Kelipatan 3 saja | `Fizz` |
| Kelipatan 5 saja | `Buzz` |
| Selain itu | Cetak angkanya |

**Contoh output:**

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
...
```

**Instruksi:**
1. Buat file `tantangan4.js`
2. Gunakan `for` loop dari 1 sampai 50
3. ⚠️ **Urutan pengecekan penting!** Cek kelipatan 3 DAN 5 (`% 15`) **duluan** sebelum cek masing-masing

**💡 Hint:** Kelipatan 3 dan 5 = kelipatan 15 → `i % 15 === 0`

---

## Tantangan 5 — Kalkulator Sederhana (PR Utama) 🏠

**Tujuan:** Gabungkan **semua materi** — variable, function, switch case, dan loop

Buat program kalkulator yang bisa menghitung beberapa operasi sekaligus dari sebuah array.

**Langkah-langkah:**

### Step 1 — Buat function per operasi

```js
const tambah = (a, b) => ...
const kurang = (a, b) => ...
const kali   = (a, b) => ...
const bagi   = (a, b) => ...
```

### Step 2 — Buat function `kalkulator(a, operator, b)`

Gunakan `switch case` untuk menentukan operasi mana yang dijalankan berdasarkan operator (`+`, `-`, `*`, `/`).

Jangan lupa handle kasus:
- Pembagian dengan 0 → cetak pesan error
- Operator tidak dikenal → cetak pesan error

### Step 3 — Jalankan beberapa perhitungan sekaligus pakai loop

Buat array berisi beberapa perhitungan, lalu loop dan cetak hasilnya:

```js
const soal = [
  { a: 10, op: "+", b: 5 },
  { a: 20, op: "-", b: 8 },
  { a: 7,  op: "*", b: 3 },
  { a: 100, op: "/", b: 4 },
  { a: 50, op: "/", b: 0 },
];
```

**Contoh output yang diharapkan:**

```
10 + 5 = 15
20 - 8 = 12
7 * 3 = 21
100 / 4 = 25
50 / 0 = Error: tidak bisa bagi dengan nol!
```

**Instruksi:**
1. Buat file `tantangan5.js`
2. Ikuti ketiga step di atas
3. Tambahkan minimal 3 soal perhitungan lagi dari kamu sendiri

---

## 📁 Struktur File

Setelah selesai, folder kamu seharusnya terlihat seperti ini:

```
pertemuan-2/
├── tantangan1.js    ← Cek lulus/tidak lulus
├── tantangan2.js    ← Luas & keliling
├── tantangan3.js    ← Ganjil/genap 1-100
├── tantangan4.js    ← FizzBuzz
└── tantangan5.js    ← Kalkulator (PR utama)
```

---

## ✅ Checklist Sebelum Kumpulkan

- [ ] Semua file bisa dijalankan tanpa error (`node namafile.js`)
- [ ] Setiap tantangan menghasilkan output yang benar
- [ ] Tantangan 5 sudah handle pembagian dengan 0
- [ ] Sudah coba ganti-ganti input dan hasilnya tetap benar
- [ ] Kode rapi dan ada komentar penjelasan

---

> **💬 Stuck? Boleh diskusi sama teman, tapi pastikan kamu ngetik sendiri. Copy-paste = gak belajar.**
>
> Selamat ngoding! 🚀