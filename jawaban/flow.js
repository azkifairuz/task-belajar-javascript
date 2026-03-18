//syarat keluar rumah
//1. kalo cuaca cerah
//2. kalo tidak banjir


const cuaca = "cerah"
const isbanjir = false

if(cuaca == "cerah" && isbanjir == false) {
    console.log("bisa keluar rumah")
} else {
    console.log("tidak bisa keluar rumah")
}

if(cuaca == "cerah" || isbanjir == true) {
    console.log("bisa keluar rumah")
} else {
    console.log("tidak bisa keluar rumah")
}
