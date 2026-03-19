//1.buat object profile, isinya:
//nama(string),umur(number),hobi(array),alamat (nested object:alamat,provinsi),sosialMedia(nested object)


//2.desstruct object dibawah
const mahasiswa = {
  nama: "Andi Pratama",
  nim: "2024001",
  jurusan: "Teknik Informatika",
  ipk: 3.75,
  alamat: {
    kota: "Surabaya",
    provinsi: "Jawa Timur",
  },
  mataKuliah: ["Algoritma", "Basis Data", "Jaringan", "Web Development"],
};



//1.Destructure nama, jurusan, dan ipk dalam 1 baris
//2.Destructure kota dari nested object alamat
//3.Destructure mata kuliah pertama dan kedua dari array mataKuliah
//4.Buat function cetakProfil({ nama, jurusan, ipk }) yang menerima parameter destructured
//5 Cetak semua hasilnya

