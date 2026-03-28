//object
//Analogi: Object itu kayak KTP — satu kartu berisi banyak informasi dengan label masing-masing.
//Array menyimpan data pakai nomor urut (index), Object menyimpan data pakai nama (key).

//array
let siswa = ["Budi", 17, "SMA 1"];
// siswa[0] = nama? umur? sekolah?, kan ambigu ya, kita gatau index 0 itu apa, orang langsung value dia isinya

//object
let siswa2 = {
    nama: "Budi",
    umur: 17,
    sekolah: "SMA 1"
};
//siswa2.nama = Budi, siswa2.umur = 17, siswa2.sekolah = "SMA 1"
// 
//object bisa diakses pakai dot notation atau bracket notation
let object = {
  key1: "value1",   // key: value
  key2: "value2",   // dipisah koma
  key3: 123,        // value bisa tipe apa saja
};

//akses dan ubah object
let mobil = {
  merk: "Toyota",
  warna: "Hitam",
  tahun: 2024,
};

// Dot notation (paling umum)
console.log(mobil.merk);    

// Bracket notation (kalau key-nya dinamis / ada spasi)
console.log(mobil["warna"]); 

let key = "tahun";
console.log(mobil[key]);

// Ubah
mobil.warna = "Putih";

// Tambah property baru
mobil.plat = "B 1234 XYZ";

// Hapus property
delete mobil.tahun;

console.log(mobil);

//destructuring. Destructuring
//"Bongkar" isi object/array ke variable terpisah — biar lebih ringkas.
//Analogi: Buka koper, keluarkan barang-barang ke meja masing-masing.
//Object Destructuring:

//lihat object siswa diatas, kan cara laamabuata mbil datanya 
//siswa2.nama
//siswa2.umur
//siswa2.sekolah

//bisa kita persimple
const {nama, umur, sekolah} = siswa2;
console.log(nama, umur, sekolah);

//Rename saat destructuring:
let {nama: n, umur: u, sekolah: s} = siswa2;
console.log(n, u, s);
//default value, tujuanya klo datanya gaboleh null dan wajib ada minmal isinya
let { namaSiswa, jurusanSiswa = "Belum ada" } = siswa;
console.log(namaSiswa, jurusanSiswa);

//Array Destructuring:
//sama kaya object,tpi klo ini array
let array = [1, 2, 3];
let [a, b, c] = array;
console.log(a, b, c);

let [, , hanyaKetiga] = array;
console.log(hanyaKetiga);

//Destructuring di parameter function 
// Tanpa destructuring
function cetakSiswa(siswa) {
  console.log(siswa.nama + " umur " + siswa.umur);
}

// Dengan destructuring — lebih bersih
function cetakSiswa({ nama, umur }) {
  console.log(nama + " umur " + umur);
}

cetakSiswa({ nama: "Budi", umur: 17 });
//array object
let siswaList = [
    { nama: "Budi", nilai: 85, kelas: "A" },
  { nama: "Ani", nilai: 92, kelas: "B" },
  { nama: "Joko", nilai: 67, kelas: "A" },
  { nama: "Dewi", nilai: 78, kelas: "B" },
  { nama: "Rudi", nilai: 45, kelas: "A" },

];
//Kombinasi dengan array methods:
let ani = siswaList.find((s) => s.nama === "Ani");
console.log(ani);
// Filter siswa kelas A
let kelasA = siswaList.filter((s) => s.kelas === "A");
console.log(kelasA);
// [{ nama: "Budi"... }, { nama: "Joko"... }, { nama: "Rudi"... }]

// Ambil nama-nama saja
let namaList = siswaList.map((s) => s.nama);
console.log(namaList);  

// Hitung rata-rata nilai
let rataRata = siswaList.reduce((acc, s) => acc + s.nilai, 0) / siswaList.length;
console.log(rataRata)

//Spread Operator
//Tiga titik (...) yang powerful — copy, gabung, dan clone.
//Analogi: Fotokopi dokumen — hasilnya identik tapi berdiri sendiri
//array:
let buah = ["Apel", "Mangga"];
let sayur = ["Bayam", "Wortel"];

// Gabungkan
let semua = [...buah, ...sayur];
console.log(semua);  // ["Apel", "Mangga", "Bayam", "Wortel"]

// Copy array (bukan referensi)
let buahCopy = [...buah];
buahCopy.push("Jeruk");
console.log(buah);      // ["Apel", "Mangga"] → AMAN, gak berubah
console.log(buahCopy);  // ["Apel", "Mangga", "Jeruk"]
//object
let defaults = { tema: "light", bahasa: "id", fontSize: 14 };
let userSetting = { tema: "dark", fontSize: 18 };

// Merge — yang belakang menimpa yang depan
let finalSetting = { ...defaults, ...userSetting };
console.log(finalSetting);
// { tema: "dark", bahasa: "id", fontSize: 18 }
//Update object tanpa mutasi:
let user = { nama: "Budi", umur: 20 };

// Buat versi baru dengan umur diupdate
let userBaru = { ...user, umur: 21 };
console.log(user);      // { nama: "Budi", umur: 20 } → TETAP
console.log(userBaru);  // { nama: "Budi", umur: 21 }