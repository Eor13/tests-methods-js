//forEach
const childrens = ["Amanda", "Heitor", "Lucas", "Camila", "Daniele"]
//sem return
childrens.forEach(
    function (children, index, array) {
        console.log(`Bem Vindo ${children}`)
    }
)
//com return
let array = childrens.forEach(
    function (children, index, array) {
        return `Bem Vindo ${children}`
    }
)
console.log(array) //undefined

//map
let array1 = childrens.map(
    function (children, index, array) {
        return `Tchau ${children}. Obrigado por ter vindo.`
    }
)
console.log(array1)
// ['Tchau Amanda. Obrigado por ter vindo.', 'Tchau Heitor. Obrigado por ter vindo.', 'Tchau Lucas. Obrigado por ter vindo.', 'Tchau Camila. Obrigado por ter vindo.', 'Tchau Daniele. Obrigado por ter vindo.']

//flatmap
const operand = [1,2,3,4,5,6,7,8,9,10]
let MultipleOf2 = operand.flatMap((x) => `${x*2}` )
console.log(MultipleOf2) // ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20']

//filter
const numbers = [45,12,5,56,13,7,20,18,15,26]
let numberfilter = numbers.filter(number => number >= 20)
console.log(numberfilter) // [45, 56, 20, 26]
//filter caracterers
const series = ["Stranger Things", "Titans", "The Big Bang History"]
let filter = series.filter(element => {return element.toLocaleLowerCase().includes("b")})
console.log(filter) // ['The Big Bang History']

//reduce
const numb = [45, 4, 9, 16, 25];
let sum = numb.reduce(function (total, value, index, array) {
    return total + value;
},151);
console.log("The sum is " + sum) // The sum is 250

//reduceRight
const numbers2 = [15, 20, 35, 50, 25];
let total = numbers2.reduce(function (total, value, index, array) {
    return total + value;
},155 );
console.log("The sum is " + total) // The sum is 300

//every
const notes = [10,6,7,8,4,3,8,1]
let notesReturn = notes.every(element => { return element > 7 })
console.log(notesReturn) // false

//some
const someArray = [5,35,2,11,19,21]
let someResult = someArray.some((element) => { 
    if(element > 20){ 
        console.log(element) //35
        return element 
    }
}) 
console.log(someResult) // true

//Array.from
const phrase2 = "Hello World"
console.log(Array.from(phrase2)) 
// ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

//keys
let justicyLeague = ["Batman", "Super man", "Flash", "Mulher Maravilha", "Caçador de Marte", "Lanterna Verde", "Mulher Gavião"]
let keys = justicyLeague.keys()
for(let x of keys){
    console.log(++x)
    /*
    1
    2
    3
    4
    5
    6
    7
    */
}

//entries
justicyLeague = ["Batman", "Super Man", "Flash", "Mulher Maravilha", "Caçador de Marte", "Lanterna Verde", "Mulher Gavião"]
let person = justicyLeague.entries() 
for(let [x,y] of person){
    console.log(++x,y)
    /*
    1 Batman
    2 Super Man
    3 Flash
    4 Mulher Maravilha
    5 Caçador de Marte
    6 Lanterna Verde
    7 Mulher Gavião
    */
}

// with
const months = ["Janeiro", "fevereiro", "Mar", "Abril", "Maio"]
let month = months.with(2, "Março")
console.log(month) // ['Janeiro', 'fevereiro', 'Março', 'Abril', 'Maio']