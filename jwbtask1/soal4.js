//1
//2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16

for(let index = 1; index <= 50; index++){ 
    if(index %15 === 0){
        console.log("FizzBuzz")
    }
    else if(index %3 === 0){
        console.log("Fizz")
    }
    else if(index %5 === 0){
        console.log("Buzz")
    }
    else{
    console.log(index)
    }
}