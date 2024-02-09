let num = 2012
let trasnformNum = num.toString() 
console.log(`O tipo do número ${num} é ${typeof(trasnformNum)}`) //O tipo do número 2012 é string

let num1 = 5.652
console.log(num1.toExponential()) // 5.652e+0
console.log(num1.toExponential(2)) // 5.65e+0
console.log(num1.toExponential(5)) // 5.65200e+0
console.log(num1.toExponential(0)) // 6e+0

console.log(num1.toFixed()) // 6 
console.log(num1.toFixed(2)) // 5.65
console.log(num1.toFixed(8)) // 5.65200000

console.log(num1.toPrecision()) // 5.652
console.log(num1.toPrecision(2)) //5.7
console.log(num1.toPrecision(6)) // 5.65200


let obj =new Number(14)
let typ = typeof(obj)
console.log(`o tipo de ${obj} é ${typ}`) //o tipo de 14 é object
let typ2 = typeof(obj.valueOf())
console.log(`o tipo de ${obj} é ${typ2}`) //o tipo de 14 é number


