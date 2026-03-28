//tanpa array

const sepatu1 = "Adidas";
const sepatu2 = "Nike";
const sepatu3 = "Puma";
const sepatu4 = "New Balance";
const sepatu5 = "Converse";

//pake array
let sepatu = ["Adidas", "Nike", "Puma", "New Balance", "Converse"];

//isi array bisa beda beda tipe datanya

//array jug bisa di cek panjngnya
sepatu.length


//akses dan ubah array
let sepatuBaru = sepatu[0];
//ubah array
sepatu[0] = "Super";
console.log(sepatuBaru);

//mainpulasi array:push,pop,shift,unshift
//anrrian indomaret
let antrian = ["Tsany", "Syarif", "Ocha"];
//push, si zidny ikut antri
antrian.push("Zidny");
console.log(antrian);
//pop, si zidny keluar antri, katanya kelamaan
antrian.pop();
console.log(antrian);
//shift, si tsany keluar antri, ada yg ketinggalan
antrian.shift();
console.log(antrian);
//unshift, si tsany masuk antri lagi
antrian.unshift("Tsany");
console.log(antrian);


//slice dan splice
let warna = ["hitam", "putih", "merah", "kuning", "biru"];
//Dua method yang sering bikin bingung.
// splice(mulaiDariIndex, jumlahYangDihapus, ...elemenBaru)
//splice:  Mengubah array asli (potong/sisipkan/hapus). 

//hapus 2 elemen, mulai dri index 2
warna.splice(1, 2);
console.log(warna);

//sisipkan 2 elemen, mulai dri index 1
warna.splice(1,0,"abu-abu","pink");
console.log(warna);
//ganti 1 elemen, mulai dri index 2
warna.splice(2, 1, "Perak");
console.log(warna);

//slice() — Tidak mengubah array asli (cuma copy sebagian).
//Analogi: Fotokopi halaman 2–4 dari buku, buku asli tetap utuh.
//slice(mulaiDariIndex, sampaiIndex) → sampaiIndex TIDAK termasuk
let angka = [10, 20, 30, 40, 50];

let potongan = angka.slice(1, 4);
console.log(potongan);  
console.log(angka);    

// Tanpa parameter kedua = sampai akhir
let sisa = angka.slice(2);
console.log(sisa); 

// Copy seluruh array
let copy = angka.slice();
console.log(copy); 

//array map
//Fungsi: Ubah setiap elemen array → menghasilkan array baru.
//Analogi: Mesin fotokopi yang bisa edit — setiap halaman dicopy dan dimodifikasi.
let number = [1, 2, 3, 4, 5];
let kaliDua = number.map((item) => item * 2);
console.log(kaliDua);
console.log(number);

//array filter
//Fungsi: Pilih elemen array → menghasilkan array baru.

let genap = number.filter((item) => item  > 10);
console.log(genap);
console.log(number);

//array reduce
//Fungsi: Menghitung total elemen array → menghasilkan 1 nilai.
let total = number.reduce((total, item) => total + item, 0);
console.log(total);
//find
//Fungsi: Nyari 1 elemet yg cocok, klo ketemu stop
let find = number.find((item) => item === 3);
console.log(find);

//kalo gaketemu undefined
let undefinedFind = number.find((item) => item === 500000);
console.log(undefinedFind);

//find index
//fungsi: nyari index dari elemen yg cocok
let findIndex = number.findIndex((item) => item === 3);
console.log(findIndex);
//chaining methd
//nah fungsi fungsi diatas langsung bsia digabungin semua
//cntoh:
let hasil = angka
  .filter((n) => n % 2 === 0)       
  .map((n) => n * 3)                 
  .reduce((acc, n) => acc + n, 0);   
console.log(hasil);  
