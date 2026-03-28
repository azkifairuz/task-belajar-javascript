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
const {nama,jurusan,ipk} = mahasiswa
console.log(nama,jurusan,ipk)

//2.Destructure kota dari nested object alamat
const {kota} = mahasiswa.alamat
console.log(kota)

//3.Destructure mata kuliah pertama dan kedua dari array mataKuliah
const [m1,m2] = mahasiswa.mataKuliah
console.log(m1,m2)

//4.Buat function cetakProfil({ nama, jurusan, ipk }) yang menerima parameter destructured
function cetakProfil({ nama, jurusan, ipk }) {
  console.log("Nama:", nama),
  console.log("Jurusan:", jurusan),
  console.log("IPK:", ipk)
}

//5 Cetak semua hasilnya
cetakProfil(mahasiswa)
