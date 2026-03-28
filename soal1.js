//1.buat object profile, isinya:
//nama(string),umur(number),hobi(array),alamat (nested object:alamat,provinsi),sosialMedia(nested object)
const profile = {
  nama: "Zidny",
  umur: 14,
  hobi: "eskplor hal baru",
  alamat:{
    perumahan: "islamic",
    kec: "cibodas",
    prov: "banten"
  },
  sosmed: {
    ig: "zidny_taylor",
    tw: "zidny_gomez"
  }
}
console.log(profile)