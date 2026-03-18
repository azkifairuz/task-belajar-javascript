//1 — Ganjil
//2 — Genap
//3 — Ganjil
//4 — Genap
//5 — Ganjil
//...
//100 — Genap

for(let index = 1; index <= 100; index++){ 
    if(index %2 === 0){
        console.log(index+ " genap")
    } 
    else{
    console.log(index + " ganjil")
    }
}
