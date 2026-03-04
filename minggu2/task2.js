const produkList = [
  { nama: "Laptop", harga: 12000000, stok: 5 },
  { nama: "Mouse", harga: 150000, stok: 50 },
  { nama: "Keyboard", harga: 350000, stok: 30 },
  { nama: "Monitor", harga: 3500000, stok: 0 },
  { nama: "Webcam", harga: 500000, stok: 15 },
  { nama: "Headset", harga: 275000, stok: 0 },
  { nama: "SSD 1TB", harga: 1200000, stok: 20 },
  { nama: "RAM 16GB", harga: 800000, stok: 10 },
];


//dari array diatas
//1.map — Buat array baru berisi nama produk saja 

//2.filter — Tampilkan produk yang stok-nya masih ada (stok > 0)

//3.filter — Tampilkan produk dengan harga di bawah 1 juta

//4.find — Cari produk bernama "SSD 1TB"

//5.reduce — Hitung total nilai inventaris (harga × stok untuk setiap produk, lalu jumlahkan)

//6.chaining — Dari produk yang stoknya > 0, ambil namanya saja, lalu urutkan A-Z

//7.reduce — Hitung berapa banyak produk yang stoknya habis (0)