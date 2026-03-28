//1. buat variable List product  pake array object
let productList = [
    { id: 1, productName: "nike", price: 10000 },
    { id: 2, productName: "kodachi", price: 15000 },
    { id: 3, productName: "adidas", price: 20000 },
]
//2 buat fungsi buat nampilin objectnya, biasa kan kita pake conolse.log.tapi coba pake conolse.table biar cantik
function tampilkanProduct() {
    console.table(productList)
}
tampilkanProduct()
//3 buat fungsi nambahin product ke keranjang
let cart = []
function tambahProduct(id) {
    //id =2

    const product = productList.find((productList) => productList.id === id)
    if (product) {
        cart.push(product)
        console.log("Product berhasil ditambahkan ke keranjang")
    } else {
        console.log("Product tidak ditemukan")
    }
}
tambahProduct(1)
tambahProduct(2)
tambahProduct(3)

function tampilkanCart() {
    console.table(cart)
}
tampilkanCart()

//4. buat fungsi ngehapus product kekeranjang
//5. buat ungsi nampilin product di keranjang
//7. buat fungsi hitung total harga

function hapusProductBerdasarkanId(id) {
    console.log(cart.length);

    for (let index = 0; index < cart.length; index++) {
        const cartSesuaiIndexSaatIni = cart[index]
        console.log(cartSesuaiIndexSaatIni)
        if (cartSesuaiIndexSaatIni.id === id) {
            console.log("ini product apa ya yg masuk kondisi mau dihapus:", cartSesuaiIndexSaatIni)
            cart.splice(index, 3)
            console.log("Product berhasil dihapus dari keranjang")
        }
    }
}

hapusProductBerdasarkanId(3)

tampilkanCart()